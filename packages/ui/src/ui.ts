import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Slider, SliderTrack, SliderRange, SliderThumb } from '@/components/ui/slider'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal, DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Toaster } from '@/components/ui/toaster'
import { genId, useToast } from '@/components/ui/use-toast'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage, useForm,
  useFormField
} from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Switch } from '@/components/ui/switch'
import { Checkbox } from '@/components/ui/checkbox'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal, ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger,
  ContextMenuTrigger
} from '@/components/ui/context-menu'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectIcon,
  SelectItem,
  SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger, PopoverArrow, PopoverRemoveScroll } from '@/components/ui/popover'
import {
  Dialog,
  DialogClose,
  DialogContent, DialogDescription, DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal, DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal, AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TooltipPortal } from '@/components/ui/tooltip'
import { TooltipArrow } from '@radix-ui/react-tooltip'
import { Link } from '@/components/ui/link'
import { Separator } from '@/components/ui/separator'
import { Toggle } from '@/components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import * as uniqolor from 'uniqolor'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

declare global {
  var LSUI: any
  var LSUtils: any
}

const shadui = {
  Link, Button, ButtonGroup,
  Slider, SliderTrack, SliderRange, SliderThumb,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  Toaster, useToast, Badge,
  genToastId: genId,
  Alert, AlertTitle, Input, Textarea,
  AlertDescription, Label,
  Form, FormItem, FormLabel,
  FormField, FormControl,
  FormDescription, FormMessage,
  useFormField, useForm,
  useFormContext, yupResolver, yup,
  Switch, Checkbox, RadioGroup, RadioGroupItem,
  Card, CardHeader, CardTitle, CardDescription,
  CardContent, CardFooter, Skeleton,
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectIcon,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
  Separator,
  Calendar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverRemoveScroll,
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
  Tooltip, TooltipTrigger, TooltipArrow,
  TooltipContent, TooltipProvider, TooltipPortal,
  Toggle, ToggleGroup, ToggleGroupItem,
  Avatar, AvatarImage, AvatarFallback,
  Tabs, TabsContent, TabsList, TabsTrigger
}

function setupGlobals() {
  console.debug('[ui] setup logseq ui globals')

  window.LSUI = shadui

  window.LSUtils = {
    isDev: process.env.NODE_ENV === 'development',
    uniqolor,
  }
}

// setup
setupGlobals()

export {
  setupGlobals
}
