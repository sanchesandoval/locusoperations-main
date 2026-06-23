import { siteConfig } from "@/lib/config";

export function CompanyShowcase() {
  const { companyShowcase } = siteConfig;
  return (
    <section
      id="company"
      className="flex flex-col items-center justify-center gap-6 md:gap-14 pb-6 pt-3 md:pt-16 w-full relative px-6"
    >
      <p className="text-muted-foreground font-medium text-center">
        We build on the stack powering modern revenue teams
      </p>
      <div className="grid w-full max-w-7xl grid-cols-2 md:grid-cols-4 overflow-hidden border-y border-border items-center justify-center z-20">
        {companyShowcase.companyLogos.map((logo) => (
          <div
            className="bg-background w-full h-28 flex items-center justify-center relative p-4 before:absolute before:-left-1 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-1 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-['']"
            key={logo.id}
          >
            <div className="flex items-center justify-center w-full h-full">
              {logo.logo}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
