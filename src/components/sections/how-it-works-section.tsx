"use client";

import type { ReactNode } from "react";
import { SectionHeader } from "@/components/section-header";
import { siteConfig } from "@/lib/config";

export function HowItWorksSection() {
  const { howItWorksSection } = siteConfig;

  return (
    <section
      id="how-it-works"
      className="flex flex-col items-center justify-center w-full relative px-5 md:px-10"
    >
      <div className="border-x mx-5 md:mx-10 relative">
        <div className="absolute top-0 -left-4 md:-left-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>
        <div className="absolute top-0 -right-4 md:-right-14 h-full w-4 md:w-14 text-primary/5 bg-[size:10px_10px] [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)]"></div>

        <SectionHeader>
          <p className="text-xs font-semibold uppercase tracking-widest text-secondary">
            {howItWorksSection.badge}
          </p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance">
            {howItWorksSection.title}
          </h2>
          <p className="text-muted-foreground text-center text-balance font-medium">
            {howItWorksSection.description}
          </p>
        </SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 overflow-hidden">
          {howItWorksSection.items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col p-0.5 relative before:absolute before:-left-0.5 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-['']"
            >
              <div className="flex flex-col">
                {"content" in item && !!(item as Record<string, ReactNode>).content && (
                  <div className="h-[460px] relative overflow-hidden border-b border-border">
                    {(item as Record<string, ReactNode>).content}
                  </div>
                )}
                <div className="flex flex-col gap-6 p-6">
                  <div className="flex items-start justify-between">
                    <span className="text-5xl font-medium tracking-tighter text-secondary">
                      {item.step}
                    </span>
                    {"timeline" in item && (
                      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-1 mt-2">
                        {(item as unknown as Record<string, string>).timeline}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-lg tracking-tighter font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                    {"deliverables" in item && Array.isArray((item as Record<string, unknown>).deliverables) && (
                      <ul className="flex flex-col gap-1.5 mt-1">
                        {((item as unknown as Record<string, string[]>).deliverables).map((d, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-secondary mt-0.5 shrink-0">+</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
