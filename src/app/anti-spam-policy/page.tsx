import Link from "next/link";

export const metadata = {
  title: "Anti-Spam Policy — Locus",
  description:
    "Anti-Spam Policy clarifying the relationship between Locus Ops (locusops.com) and Locus RevOps (locusrevops.com).",
};

export default function AntiSpamPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
        ← Back to home
      </Link>

      <h1 className="text-4xl font-medium tracking-tighter mt-8 mb-2">Anti-Spam Policy</h1>
      <p className="text-sm text-muted-foreground mb-12">Last updated: July 15, 2026</p>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-muted-foreground">

        <p>
          This page clarifies the relationship between Locus Ops and Locus RevOps, and describes how we conduct business email outreach.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">1. Who We Are</h2>
          <p>
            Locus Ops (&quot;Locus&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is a B2B GTM systems agency. Our primary website is{" "}
            <a href="https://locusops.com" className="text-primary hover:underline">locusops.com</a>.
          </p>
          <p className="mt-2">
            Locus RevOps is not a separate company. The domain{" "}
            <span className="text-primary">locusrevops.com</span> is used exclusively for business email outreach and is operated by the same organization as locusops.com — Locus Operations LLC.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">2. Why We Use a Separate Sending Domain</h2>
          <p>
            Using a dedicated domain for outbound email is a standard, industry-recognized deliverability practice. It isolates cold outreach sending activity from our primary corporate domain, protecting the reputation of both. It is not used to obscure who we are or to evade identification — this page exists specifically so that relationship is easy to verify.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">3. How We Send Outreach</h2>
          <p>We send targeted, permission-based outreach to manually selected B2B prospects in the software and services industry. Specifically:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Recipients are individually and manually selected based on relevance to our services — we do not send to purchased or scraped mass lists indiscriminately.</li>
            <li>Every message clearly identifies Locus as the sender and the purpose of the outreach.</li>
            <li>Every message includes a straightforward way to opt out of future communication.</li>
            <li>Opt-out requests are honored promptly.</li>
            <li>We do not use false or misleading subject lines or sender information.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">4. Reporting Concerns</h2>
          <p>
            If you believe you have received an email from us that does not comply with this policy, or you have questions about our outreach practices, contact us at{" "}
            <a href="mailto:chris@locusops.com" className="text-primary hover:underline">chris@locusops.com</a> and we will investigate promptly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">5. Contact Us</h2>
          <p>Email: <a href="mailto:chris@locusops.com" className="text-primary hover:underline">chris@locusops.com</a></p>
          <p className="mt-2">Website: <a href="https://locusops.com" className="text-primary hover:underline">locusops.com</a></p>
        </section>

      </div>
    </main>
  );
}
