import * as React from "react"
import { cn } from "@/lib/utils"

const Badge = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variant === "default" && "bg-primary text-white",
        variant === "secondary" && "bg-background-muted text-text-secondary",
        variant === "outline" && "border border-border text-text",
        className
      )}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

export { Badge }

