"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface NumberTickerProps {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  className?: string;
  decimalPlaces?: number;
  suffix?: string;
  prefix?: string;
}

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  suffix = "",
  prefix = "",
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const motionValue = useSpring(direction === "down" ? value : 0, {
    damping: 60,
    stiffness: 100,
  });

  const displayValue = useTransform(motionValue, (current) =>
    Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    }).format(current)
  );

  const [display, setDisplay] = useState(
    direction === "down" ? value.toFixed(decimalPlaces) : "0"
  );

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
        setHasAnimated(true);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction, hasAnimated]);

  useEffect(() => {
    const unsubscribe = displayValue.on("change", (v) => {
      setDisplay(v);
    });
    return unsubscribe;
  }, [displayValue]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
