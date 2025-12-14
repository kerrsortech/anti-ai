import * as React from "react"
import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, variant = "default", size = "default", ...props }, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        variant === "default" && "bg-primary text-white hover:bg-primary-hover",
        variant === "outline" && "border border-border bg-background hover:bg-background-subtle",
        variant === "ghost" && "hover:bg-background-subtle",
        size === "default" && "h-10 px-4 py-2",
        size === "lg" && "h-12 px-8 text-base",
        size === "sm" && "h-9 px-3 text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button }

