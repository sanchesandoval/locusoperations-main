import { CalEmbed } from "@/components/cal-embed";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Book a Strategy Call",
  description: "Schedule your free revenue operations audit with Locus. We'll map your funnel, find the leaks, and fix 1-2 live in the call.",
};

export default function BookCallPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full px-6 py-20">
      <div className="max-w-3xl w-full text-center mb-12">
        <p className="text-sm font-medium text-secondary uppercase tracking-widest mb-4">
          Book a Strategy Call
        </p>
        <h1 className="text-4xl md:text-5xl font-medium tracking-tighter mb-4">
          Let&apos;s find what&apos;s leaking.
        </h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          30 minutes. We&apos;ll look at your current motion and tell you exactly where revenue is leaving before you ever get on a project.
        </p>
        <p className="text-sm text-muted-foreground mt-3">
          Audit refunded if we don&apos;t surface at least 3 leaks worth more than the fee.
        </p>
      </div>

      <div className="w-full max-w-3xl rounded-xl overflow-hidden border border-border min-h-[700px]">
        <CalEmbed />
      </div>
    </main>
  );
}
