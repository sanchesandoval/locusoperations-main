import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Locus",
  description: "Privacy Policy for Locus Operations LLC.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
        ← Back to home
      </Link>

      <h1 className="text-4xl font-medium tracking-tighter mt-8 mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground mb-12">Last updated: April 26, 2026</p>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-muted-foreground">

        <p>
          Locus Operations LLC (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store, and protect your information when you use our website or services.
        </p>
        <p>By accessing or using Locus, you agree to the terms outlined in this Privacy Policy.</p>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">1. Information We Collect</h2>
          <h3 className="font-medium text-primary mb-2">a. Personal Information</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Company name</li>
            <li>Contact details</li>
            <li>Any information you submit through forms</li>
          </ul>
          <h3 className="font-medium text-primary mt-4 mb-2">b. Usage Data</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Pages visited</li>
            <li>Time spent on pages</li>
          </ul>
          <h3 className="font-medium text-primary mt-4 mb-2">c. Cookies & Tracking Technologies</h3>
          <p>We use cookies and similar technologies to improve user experience, analyze traffic, and optimize our services.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Provide and maintain our services</li>
            <li>Improve website performance and user experience</li>
            <li>Communicate updates, offers, or important notices</li>
            <li>Respond to inquiries and support requests</li>
            <li>Analyze usage trends and service performance</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">3. Sharing of Information</h2>
          <p>We do not sell your personal data.</p>
          <p className="mt-2">We may share information only with:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Trusted third-party service providers (analytics, hosting, payment tools)</li>
            <li>Legal authorities if required by law</li>
            <li>Business partners strictly for service functionality</li>
          </ul>
          <p className="mt-2">All partners are required to keep your data secure.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">4. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect your data against unauthorized access, loss, misuse, or alteration. However, no online system is 100% secure, and we cannot guarantee absolute security.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">5. Data Retention</h2>
          <p>We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy or comply with legal obligations.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">6. Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Access your personal data</li>
            <li>Request correction or deletion</li>
            <li>Object to data processing</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p className="mt-2">To exercise these rights, contact us at <a href="mailto:chris@locusops.com" className="text-primary hover:underline">chris@locusops.com</a>.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">7. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites. We are not responsible for their privacy practices or content.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">8. Children&apos;s Privacy</h2>
          <p>Locus does not knowingly collect data from children under the age of 13. If we discover such data, we will delete it immediately.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="mt-2">Email: <a href="mailto:chris@locusops.com" className="text-primary hover:underline">chris@locusops.com</a></p>
        </section>

      </div>
    </main>
  );
}
