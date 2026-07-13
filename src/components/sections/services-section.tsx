import { siteConfig } from "@/lib/config";
import { Check } from "lucide-react";
import Link from "next/link";

const primaryButtonClass =
  "bg-secondary h-9 flex items-center justify-center text-sm font-medium tracking-wide rounded-full text-primary-foreground dark:text-secondary-foreground px-5 shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] border border-white/[0.12] hover:bg-secondary/80 transition-all ease-out active:scale-95";

const outlineButtonClass =
  "border border-border h-9 flex items-center justify-center text-sm font-medium tracking-wide rounded-full text-primary px-5 hover:bg-muted transition-all ease-out active:scale-95";

export function ServicesSection() {
  const { servicesSection } = siteConfig;

  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center gap-12 py-20 w-full px-6"
    >
      <div className="w-full max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-6 text-center">
          {servicesSection.badge}
        </p>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-10">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-balance flex flex-col gap-1">
            {servicesSection.title}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg text-balance md:text-right md:max-w-sm md:pt-1">
            {servicesSection.description}
          </p>
        </div>
      </div>

      <div className="w-full max-w-5xl grid gap-6 md:grid-cols-2 items-stretch">
        {servicesSection.plans.map((plan) => (
          <div
            key={plan.id}
            className={
              plan.emphasized
                ? "flex flex-col gap-6 rounded-2xl border-2 border-secondary bg-secondary/5 p-8"
                : "flex flex-col gap-6 rounded-2xl border border-border bg-card/30 p-8"
            }
          >
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span
                className={
                  plan.emphasized
                    ? "text-xs font-semibold uppercase tracking-widest text-secondary border border-secondary/40 rounded-full px-3 py-1"
                    : "text-xs font-semibold uppercase tracking-widest text-muted-foreground border border-border rounded-full px-3 py-1"
                }
              >
                {plan.tag}
              </span>
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {plan.timeline}
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold tracking-tight">{plan.title}</h3>
              <p className="text-muted-foreground text-sm leading-6">{plan.description}</p>
            </div>

            <ul className="flex flex-col gap-2.5 grow">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <Check className="size-4 shrink-0 text-secondary mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={plan.cta.href}
              className={plan.emphasized ? primaryButtonClass : outlineButtonClass}
            >
              {plan.cta.text}
            </Link>
          </div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground text-center">
        {servicesSection.closingNote.prefix}{" "}
        <Link href="/book-call" className="text-secondary underline underline-offset-4">
          {servicesSection.closingNote.linkText}
        </Link>
      </p>
    </section>
  );
}
