(ns ^:node-only logseq.graph-parser.cli
  "For file graphs, primary ns to parse graphs with node.js based CLIs"
  (:require ["fs" :as fs]
            ["path" :as path]
            [clojure.edn :as edn]
            [logseq.common.config :as common-config]
            [logseq.common.graph :as common-graph]
            [logseq.common.util :as common-util]
            [logseq.graph-parser :as graph-parser]
            [logseq.graph-parser.db :as gp-db]))

(defn- slurp
  "Return file contents like clojure.core/slurp"
  [file]
  (str (fs/readFileSync file)))

(defn- remove-hidden-files [dir config files]
  (if (seq (:hidden config))
    (->> files
         (map #(assoc % ::rel-path (path/relative dir (:file/path %))))
         ((fn [files] (common-config/remove-hidden-files files config ::rel-path)))
         (map #(dissoc % ::rel-path)))
    files))

(defn- build-graph-files
  "Given a graph directory, return absolute, allowed file paths and their contents in preparation
   for parsing"
  [dir* config]
  (let [dir (path/resolve dir*)]
    (->> (common-graph/get-files dir)
         (map #(hash-map :file/path %))
         graph-parser/filter-files
         (remove-hidden-files dir config)
         (mapv #(assoc % :file/content (slurp (:file/path %)))))))

(defn- read-config
  "Reads repo-specific config from logseq/config.edn"
  [dir]
  (let [config-file (str dir "/" common-config/app-name "/config.edn")]
    (if (fs/existsSync config-file)
      (-> config-file fs/readFileSync str edn/read-string)
      {})))

(defn- parse-files
  [conn files {:keys [config] :as options}]
  (let [extract-options (merge {:date-formatter (common-config/get-date-formatter config)
                                :user-config config
                                :filename-format (or (:file/name-format config) :legacy)}
                               (select-keys options [:verbose]))]
    (mapv
     (fn [{:file/keys [path content]}]
       (let [{:keys [ast]}
             (let [parse-file-options
                   (merge {:extract-options
                           (assoc extract-options
                                  :block-pattern (common-config/get-block-pattern (common-util/get-format path)))}
                          (:parse-file-options options))]
               (graph-parser/parse-file conn path content parse-file-options))]
         {:file path :ast ast}))
     files)))

(defn parse-graph
  "Parses a given graph directory and returns a datascript connection and all
  files that were processed. The directory is parsed as if it were a new graph
  as it can't assume that the metadata in logseq/ is up to date. Directory is
  assumed to be using git. This fn takes the following options:
* :verbose - When enabled prints more information during parsing. Defaults to true
* :files - Specific files to parse instead of parsing the whole directory
* :conn - Database connection to use instead of creating new one
* :parse-file-options - Options map to pass to graph-parser/parse-file"
  ([dir]
   (parse-graph dir {}))
  ([dir options]
   (let [config (read-config dir)
         files (or (:files options) (build-graph-files dir config))
         conn (or (:conn options) (gp-db/start-conn))
         _ (when-not (:files options) (println "Parsing" (count files) "files..."))
         asts (parse-files conn files (merge options {:config config}))]
     {:conn conn
      :files (map :file/path files)
      :asts asts})))
