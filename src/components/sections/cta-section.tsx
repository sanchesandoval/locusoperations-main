import Image from "next/image";
import { siteConfig } from "@/lib/config";
import Link from "next/link";

export function CTASection() {
  const { ctaSection } = siteConfig;

  return (
    <section
      id="cta"
      className="flex flex-col items-center justify-center w-full px-6 py-10"
    >
      <div className="relative w-full rounded-xl bg-secondary overflow-hidden min-h-[380px] flex flex-col items-center justify-center gap-8 py-20 px-6">
        <Image
          src={ctaSection.backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
          fill
          priority
        />
        <div className="relative z-10 flex flex-col items-center gap-8">
          <h1 className="text-white text-4xl md:text-6xl font-medium tracking-tighter max-w-xs md:max-w-2xl text-center text-balance">
            {ctaSection.title}
          </h1>
          <div className="flex flex-col items-center gap-3">
            <Link
              href={ctaSection.button.href}
              className="bg-white text-black font-semibold text-sm h-10 w-fit px-6 rounded-full flex items-center justify-center shadow-md hover:bg-white/90 transition-all active:scale-95"
            >
              {ctaSection.button.text}
            </Link>
            <span className="text-white/70 text-sm text-center max-w-md">{ctaSection.subtext}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
