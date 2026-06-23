"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import type { ReactNode } from "react";
import { useRef } from "react";

export type OrbitingItem = {
  id: number;
  delay: number;
  rayIndex: number;
  distance: number;
  className: string;
  icon: ReactNode;
};

type OrbitingIconsBurstProps = {
  items: OrbitingItem[];
  lineCount?: number;
  centerIcon?: ReactNode;
  showConnectingLines?: boolean;
  className?: string;
  inView?: boolean;
};

export function OrbitingIconsBurst({
  items,
  lineCount = 32,
  centerIcon,
  showConnectingLines = true,
  className,
  inView,
}: OrbitingIconsBurstProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: false, margin: "-100px" });
  const isInView = inView !== undefined ? inView : inViewResult;

  const safeLineCount = Math.max(1, lineCount);
  const rays = Array.from({ length: safeLineCount }, (_, index) => ({
    id: index,
    angle: (360 / safeLineCount) * index,
  }));

  const normalizedItems = items.map((item) => {
    const normalizedRay = ((item.rayIndex % safeLineCount) + safeLineCount) % safeLineCount;
    return { ...item, normalizedRay };
  });

  const itemsGroupedByRay = normalizedItems.reduce(
    (acc, item) => {
      if (!acc[item.normalizedRay]) acc[item.normalizedRay] = [];
      acc[item.normalizedRay].push(item);
      acc[item.normalizedRay].sort((a, b) => a.distance - b.distance);
      return acc;
    },
    {} as Record<number, Array<(typeof normalizedItems)[number]>>,
  );

  return (
    <div
      ref={ref}
      className={cn("w-full flex items-center justify-center relative overflow-hidden", className)}
    >
      {/* Ray containers — geometry only, no visual */}
      {rays.map((ray) => (
        <div
          key={`ray-${ray.id}`}
          className="absolute left-1/2 top-1/2"
          style={{ transform: `translate(-50%, -50%) rotate(${ray.angle}deg)` }}
        />
      ))}

      {/* Center Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: isInView ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
        className="size-10 z-20 rounded-full flex items-center justify-center"
      >
        {centerIcon}
      </motion.div>

      {/* Connecting lines — render behind icons */}
      {showConnectingLines &&
        rays.map((ray) => {
          const itemsOnRay = itemsGroupedByRay[ray.id] ?? [];
          const nearestItem = itemsOnRay[0];
          return (
            <div
              key={`line-wrapper-${ray.id}`}
              className="absolute left-1/2 top-1/2 z-10"
              style={{ transform: `translate(-50%, -50%) rotate(${ray.angle}deg)` }}
            >
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{
                  scaleX: isInView ? 1 : 0,
                  opacity: isInView ? (nearestItem ? 0.5 : 0.35) : 0,
                }}
                transition={{
                  delay: nearestItem ? nearestItem.delay + 0.2 : 0.25,
                  duration: 0.4,
                }}
                className="h-[1.5px] origin-left bg-border dark:bg-border w-screen"
              />
            </div>
          );
        })}

      {/* Icons */}
      {normalizedItems.map((icon) => {
        const ray = rays[icon.normalizedRay];
        const angleInRadians = (ray.angle * Math.PI) / 180;
        const iconOffset = 20;
        const x = Math.cos(angleInRadians) * icon.distance - iconOffset;
        const y = Math.sin(angleInRadians) * icon.distance - iconOffset;

        return (
          <motion.div
            key={icon.id}
            initial={{ scale: 0, x: -iconOffset, y: -iconOffset }}
            animate={{
              scale: isInView ? 1 : 0,
              x: isInView ? x : -iconOffset,
              y: isInView ? y : -iconOffset,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: icon.delay,
            }}
            className={cn(
              "size-10 absolute left-1/2 top-1/2 z-30 rounded-full flex items-center justify-center",
              icon.className,
            )}
          >
            {icon.icon}
          </motion.div>
        );
      })}
    </div>
  );
}
