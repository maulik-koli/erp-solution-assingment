"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import Icon from "@components/icons"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      richColors
      position="top-right"
      className="toaster group"
      icons={{
        success: (
          <span className="flex size-7 items-center justify-center rounded-full text-emerald-600 dark:text-emerald-400">
            <Icon name="CircleCheckIcon" className="size-4" />
          </span>
        ),
        info: (
          <span className="flex size-7 items-center justify-center rounded-full text-sky-600 dark:text-sky-400">
            <Icon name="InfoIcon" className="size-4" />
          </span>
        ),
        warning: (
          <span className="flex size-7 items-center justify-center rounded-full text-amber-600 dark:text-amber-400">
            <Icon name="TriangleAlertIcon" className="size-4" />
          </span>
        ),
        error: (
          <span className="flex size-7 items-center justify-center rounded-full text-rose-600 dark:text-rose-400">
            <Icon name="OctagonXIcon" className="size-4" />
          </span>
        ),
        loading: (
          <span className="flex size-7 items-center justify-center rounded-full bg-primary/15 text-primary">
            <Icon name="Loader2Icon" className="size-4 animate-spin" />
          </span>
        ),
      }}
      toastOptions={{
        classNames: {
          toast:
            "group toast relative flex w-full items-start gap-3 overflow-hidden rounded-2xl border border-border/60 bg-background/95 p-4 text-foreground shadow-[0_18px_50px_-20px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-300 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full before:bg-primary/60",
          title: "text-[14px] font-semibold leading-tight tracking-tight text-foreground",
          description: "mt-1 text-[13px] leading-normal text-muted-foreground/90",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground font-medium shadow-sm transition-colors hover:group-[.toast]:bg-primary/90",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground font-medium transition-colors hover:group-[.toast]:bg-muted/80",
          error:
            "group-[.toaster]:border-rose-500/20 group-[.toaster]:bg-rose-500/10 group-[.toaster]:text-rose-700 dark:group-[.toaster]:text-rose-300",
          success:
            "group-[.toaster]:border-emerald-500/20 group-[.toaster]:bg-emerald-500/10 group-[.toaster]:text-emerald-700 dark:group-[.toaster]:text-emerald-300",
          warning:
            "group-[.toaster]:border-amber-500/20 group-[.toaster]:bg-amber-500/10 group-[.toaster]:text-amber-800 dark:group-[.toaster]:text-amber-300",
          info:
            "group-[.toaster]:border-sky-500/20 group-[.toaster]:bg-sky-500/10 group-[.toaster]:text-sky-700 dark:group-[.toaster]:text-sky-300",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
