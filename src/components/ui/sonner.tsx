"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { CircleCheckIcon, InfoIcon, TriangleAlertIcon, OctagonXIcon, Loader2Icon } from "lucide-react"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
       icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      toastOptions={{
        classNames: {
          toast:
            "group toast flex items-start gap-3 w-full p-4 rounded-xl border bg-background text-foreground shadow-xl transition-all duration-300",
          title: "text-[14px] font-semibold leading-none tracking-tight",
          description: "text-[13px] text-muted-foreground/90 leading-normal mt-1",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground font-medium",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground font-medium",
          error: 
            "group-[.toaster]:bg-[oklch(from_var(--destructive)_l_c_h_/_0.08)] group-[.toaster]:border-destructive/20 group-[.toaster]:text-destructive",
          success: 
            "group-[.toaster]:bg-[oklch(from_var(--primary)_l_c_h_/_0.08)] group-[.toaster]:border-primary/20 group-[.toaster]:text-primary",
          warning: 
            "group-[.toaster]:bg-yellow-500/5 group-[.toaster]:border-yellow-500/20 group-[.toaster]:text-yellow-700 dark:group-[.toaster]:text-yellow-400",
          info: 
            "group-[.toaster]:bg-[oklch(from_var(--primary)_l_c_h_/_0.05)] group-[.toaster]:border-primary/10",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
