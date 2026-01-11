import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface LinearGradientProps {
  children: ReactNode;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
}

export function LinearGradient({
  children,
  className,
  from = "from-primary",
  via,
  to = "to-brand-accent",
}: LinearGradientProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r bg-clip-text text-transparent",
        from,
        via,
        to,
        className
      )}
    >
      {children}
    </span>
  );
}
