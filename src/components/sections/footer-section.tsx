"use client";

import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { useMediaQuery } from "@/hooks/use-media-query";
import { siteConfig } from "@/lib/config";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
export function FooterSection() {
  const tablet = useMediaQuery("(max-width: 1024px)");

  return (
    <footer id="footer" className="w-full pb-0">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between p-10">
        <div className="flex flex-col items-start justify-start gap-y-2 max-w-xs mx-0">
          <Link href="/" className="flex items-center gap-2">
            <img src="/locus-blackg-full-logo.svg" alt="Locus" className="h-[100px] object-contain dark:hidden" />
            <img src="/locus-white-full-logo.svg" alt="Locus" className="h-[100px] object-contain hidden dark:block" />
          </Link>
          <p className="tracking-tight text-muted-foreground font-medium">
            {siteConfig.footerDescription}
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="flex flex-col items-start justify-start md:flex-row md:items-start md:justify-between gap-y-5 lg:pl-10">
            {siteConfig.footerLinks.map((column, columnIndex) => (
              <ul key={columnIndex} className="flex flex-col gap-y-2">
                <li className="mb-2 text-sm font-semibold text-primary">
                  {column.title}
                </li>
                {column.links.map((link) => (
                  <li
                    key={link.id}
                    className="group inline-flex cursor-pointer items-center justify-start gap-1 text-[15px]/snug text-muted-foreground"
                  >
                    <Link href={link.url}>{link.title}</Link>
                    <div className="flex size-4 items-center justify-center border border-border rounded translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
                      <ChevronRightIcon className="h-4 w-4 " />
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-48 md:h-64 relative mt-24 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-background z-10 from-40%" />
        <div className="absolute inset-0 mx-6">
          <FlickeringGrid
            imageSrc="/favicon.svg"
            imageSize={tablet ? 155 : 235}
            text="Locus"
            fontSize={tablet ? 140 : 180}
            className="h-full w-full"
            squareSize={2}
            gridGap={tablet ? 2 : 3}
            color="#6B7280"
            maxOpacity={0.3}
            flickerChance={0.1}
          />
        </div>
      </div>
      <div className="border-t border-border px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
        <span>© 2026 Locus Operations LLC. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
