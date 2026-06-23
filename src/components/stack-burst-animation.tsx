"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { OrbitingIconsBurst, type OrbitingItem } from "@/components/ui/orbiting-icons-burst";

const LINE_COUNT = 20;

const STACK_ITEMS: OrbitingItem[] = [
  {
    id: 1,
    delay: 0.3,
    rayIndex: 0,
    distance: 115,
    className: "bg-background border border-border shadow-sm p-1.5 rounded-xl",
    icon: <img src="/logos/hubspot-small-logo.png" alt="HubSpot" className="size-6 object-contain" />,
  },
  {
    id: 2,
    delay: 0.5,
    rayIndex: 2,
    distance: 120,
    className: "bg-background border border-border shadow-sm p-1.5 rounded-xl",
    icon: <img src="/logos/clay-small-logo.webp" alt="Clay" className="size-6 object-contain" />,
  },
  {
    id: 3,
    delay: 0.4,
    rayIndex: 4,
    distance: 115,
    className: "bg-background border border-border shadow-sm p-1.5 rounded-xl",
    icon: <img src="/logos/Apolloio-small-logo.png" alt="Apollo" className="size-6 object-contain" />,
  },
  {
    id: 4,
    delay: 0.6,
    rayIndex: 6,
    distance: 120,
    className: "bg-background border border-border shadow-sm p-1.5 rounded-xl",
    icon: <img src="/logos/n8n-small-logo.webp" alt="n8n" className="size-6 object-contain" />,
  },
  {
    id: 5,
    delay: 0.35,
    rayIndex: 8,
    distance: 115,
    className: "bg-background border border-border shadow-sm p-1.5 rounded-xl",
    icon: <img src="/logos/rb2b logo.webp" alt="RB2B" className="size-6 object-contain" />,
  },
  {
    id: 6,
    delay: 0.55,
    rayIndex: 10,
    distance: 120,
    className: "bg-background border border-border shadow-sm p-1.5 rounded-xl",
    icon: <img src="/logos/smartlead-small-logo.jpeg" alt="Smartlead" className="size-6 object-contain" />,
  },
  {
    id: 7,
    delay: 0.45,
    rayIndex: 12,
    distance: 115,
    className: "bg-background border border-border shadow-sm p-1.5 rounded-xl",
    icon: <img src="/logos/leadpipe-small-logo.svg" alt="LeadPipe" className="size-6 object-contain" />,
  },
  {
    id: 8,
    delay: 0.65,
    rayIndex: 14,
    distance: 120,
    className: "bg-background border border-border shadow-sm p-1.5 rounded-xl",
    icon: <img src="/logos/apify-small-logo.png" alt="Apify" className="size-6 object-contain" />,
  },
  {
    id: 9,
    delay: 0.5,
    rayIndex: 16,
    distance: 115,
    className: "bg-background border border-border shadow-sm p-1.5 rounded-xl",
    icon: <img src="/logos/heyreach-small-logo.png" alt="HeyReach" className="size-6 object-contain" />,
  },
  {
    id: 10,
    delay: 0.4,
    rayIndex: 18,
    distance: 120,
    className: "bg-background border border-border shadow-sm p-1.5 rounded-xl",
    icon: <img src="/logos/anthropic-small-logo.svg" alt="Claude" className="size-6 object-contain" />,
  },
];

const SPOKE_DATA = STACK_ITEMS.map((item) => ({
  id: item.id,
  angle: (360 / LINE_COUNT) * item.rayIndex,
  distance: item.distance,
  delay: item.delay + 1.0,
}));

export function StackBurstAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
    >
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20" />
      <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-background to-transparent z-20" />

      {SPOKE_DATA.map((spoke) => (
        <div
          key={`spoke-${spoke.id}`}
          className="absolute z-[15] overflow-hidden"
          style={{
            left: "50%",
            top: "50%",
            width: spoke.distance,
            height: 3,
            marginTop: -1.5,
            transformOrigin: "0 50%",
            transform: `rotate(${spoke.angle}deg)`,
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              transformOrigin: "left center",
              background: "linear-gradient(90deg, rgba(13,147,115,0.8) 0%, rgba(13,147,115,0.5) 100%)",
              boxShadow: "0 0 4px rgba(13,147,115,0.6)",
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={
              isInView
                ? { scaleX: [0, 1, 1, 0], opacity: [0, 1, 0.5, 0] }
                : { scaleX: 0, opacity: 0 }
            }
            transition={
              isInView
                ? {
                    duration: 3.5,
                    delay: spoke.delay,
                    repeat: Infinity,
                    times: [0, 0.37, 0.86, 1.0],
                    ease: "linear",
                  }
                : { duration: 0 }
            }
          />
          <motion.div
            className="absolute top-0 h-full"
            style={{
              width: 32,
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 35%, #7fffd4 50%, rgba(255,255,255,0.6) 65%, transparent 100%)",
              filter: "blur(0.75px)",
            }}
            initial={{ x: -32 }}
            animate={isInView ? { x: [-32, spoke.distance + 32] } : { x: -32 }}
            transition={
              isInView
                ? {
                    duration: 1.3,
                    delay: spoke.delay,
                    repeat: Infinity,
                    repeatDelay: 2.2,
                    ease: "easeOut",
                  }
                : { duration: 0.15 }
            }
          />
        </div>
      ))}

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-16 bg-secondary rounded-full z-[25]"
        initial={{ scale: 0 }}
        animate={{ scale: isInView ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
      />

      <OrbitingIconsBurst
        items={STACK_ITEMS}
        lineCount={LINE_COUNT}
        showConnectingLines={true}
        className="h-full w-full"
      />
    </div>
  );
}
