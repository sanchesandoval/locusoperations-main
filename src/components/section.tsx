import { cn } from "@/lib/utils";
import { BlurFade } from "@/components/magicui/blur-fade";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function Section({
  children,
  className,
  id,
  title,
  subtitle,
  description,
}: SectionProps) {
  const sectionId = title ? title.toLowerCase().replace(/\s+/g, "-") : id;

  return (
    <section
      id={sectionId}
      className={cn("section-spacing relative overflow-hidden", className)}
    >
      <div className="container-main">
        <div className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            {title && (
              <BlurFade delay={0.1}>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  {title}
                </h2>
              </BlurFade>
            )}
            {subtitle && (
              <BlurFade delay={0.15}>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-primary">
                  {subtitle}
                </p>
              </BlurFade>
            )}
            {description && (
              <BlurFade delay={0.2}>
                <p className="mt-4 text-lg text-muted-foreground">
                  {description}
                </p>
              </BlurFade>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
