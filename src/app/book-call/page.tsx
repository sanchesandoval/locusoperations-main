import { CalEmbed } from "@/components/cal-embed";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description: "Schedule your free strategy call with Locus. We'll map your ICP, look at your current outbound, and show you how Operate or Build would work for you.",
};

export default function BookCallPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full px-6 py-20">
      <div className="max-w-3xl w-full text-center mb-12">
        <p className="text-sm font-medium text-secondary uppercase tracking-widest mb-4">
          Free Strategy Call
        </p>
        <h1 className="text-4xl md:text-5xl font-medium tracking-tighter mb-4">
          Let&apos;s find your fastest path to qualified meetings.
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          30 minutes. We&apos;ll look at your ICP and your current outbound, then map whether Operate or Build is the right fit before you commit to anything.
        </p>
        <p className="text-sm text-muted-foreground mt-3">
          If we take you on, the guarantee is simple: no qualified meeting within 30 days of launch, and you get your setup fee back.
        </p>
      </div>

      <div className="w-full max-w-3xl rounded-xl overflow-hidden border border-border min-h-[700px]">
        <CalEmbed />
      </div>
    </main>
  );
}
