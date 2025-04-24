import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-1 px-3 text-center text-sm font-semibold flex items-center justify-center hover:bg-purple-500/30 transition-colors",
        className,
      )}
      {...props}
    >
      <div className="flex items-center w-full justify-center">
        <div className="h-2 w-2 rounded-full bg-purple-500 transition-all duration-300 group-hover:scale-[100.8] group-hover:opacity-30"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 ml-2 group-hover:text-purple-500">
          {children}
        </span>
      </div>
      <div className="absolute top-0 left-0 z-10 flex h-full w-full items-center justify-center gap-1 text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 bg-background/80 group-hover:bg-purple-500/30 group-hover:text-purple-100">
        <span className="px-1 group-hover:text-purple-100">{children}</span>
        <ArrowRight className="w-4 h-4 group-hover:text-purple-100" />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
