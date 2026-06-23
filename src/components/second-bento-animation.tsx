import { OrbitingCircles } from "@/components/ui/orbiting-circle";

function StackLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="size-full rounded-xl border border-border bg-background/90 dark:bg-muted/80 flex items-center justify-center p-1.5">
      <img src={src} alt={alt} className="h-full w-full object-contain" />
    </div>
  );
}

export function SecondBentoAnimation() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-background to-transparent z-20" />
      <div className="pointer-events-none absolute top-0 left-0 h-20 w-full bg-gradient-to-b from-background to-transparent z-20" />

      {/* Center hub — Locus */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-16 bg-secondary rounded-full z-30 md:bottom-0 md:top-auto" />

      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <div className="relative flex h-full w-full items-center justify-center translate-y-0 md:translate-y-32">

          {/* Inner orbit — Customer Success */}
          <OrbitingCircles index={0} iconSize={44} radius={88} speed={0.8}>
            <StackLogo src="/logos/customerio-small-logo.png" alt="CustomerIO" />
            <StackLogo src="/logos/notion-small-logo.png" alt="Notion" />
            <StackLogo src="/logos/asana-small-logo.svg" alt="Asana" />
            <StackLogo src="/logos/clickup-small-logo.png" alt="ClickUp" />
          </OrbitingCircles>

          {/* Middle orbit — Sales */}
          <OrbitingCircles index={1} iconSize={44} radius={162} reverse speed={0.5}>
            <StackLogo src="/logos/hubspot-small-logo.png" alt="HubSpot" />
            <StackLogo src="/logos/highlevel-small-logo.webp" alt="GoHighLevel" />
            <StackLogo src="/logos/smartlead-small-logo.jpeg" alt="Smartlead" />
            <StackLogo src="/logos/instantly-small-logo.png" alt="Instantly" />
            <StackLogo src="/logos/heyreach-small-logo.png" alt="HeyReach" />
          </OrbitingCircles>

          {/* Outer orbit — Marketing */}
          <OrbitingCircles index={2} iconSize={44} radius={236} speed={0.35}>
            <StackLogo src="/logos/leadpipe-small-logo.svg" alt="LeadPipe" />
            <StackLogo src="/logos/rb2b%20logo.webp" alt="RB2B" />
            <StackLogo src="/logos/apify-small-logo.png" alt="Apify" />
            <StackLogo src="/logos/clay-small-logo.webp" alt="Clay" />
            <StackLogo src="/logos/Apolloio-small-logo.png" alt="Apollo" />
          </OrbitingCircles>

        </div>
      </div>
    </div>
  );
}
