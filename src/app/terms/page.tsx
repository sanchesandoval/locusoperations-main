import Link from "next/link";

export const metadata = {
  title: "Terms of Use — Locus",
  description: "Terms of Use for Locus Operations LLC.",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24">
      <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
        ← Back to home
      </Link>

      <h1 className="text-4xl font-medium tracking-tighter mt-8 mb-2">Terms of Use</h1>
      <p className="text-sm text-muted-foreground mb-12">Last updated: April 26, 2026</p>

      <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-muted-foreground">

        <p>
          Welcome to Locus. By accessing or using our website, products, or services, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use Locus.
        </p>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">1. Definitions</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>&quot;Locus&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot; refers to Locus Operations LLC.</li>
            <li>&quot;User&quot;, &quot;you&quot;, or &quot;your&quot; refers to anyone accessing or using our services.</li>
            <li>&quot;Services&quot; refers to the Locus website, products, features, and related offerings.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">2. Use of Services</h2>
          <p>You agree to use Locus only for lawful purposes and in accordance with these Terms. You must not:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Use the service for illegal or unauthorized activities</li>
            <li>Attempt to disrupt or compromise system security</li>
            <li>Copy, modify, or redistribute any part of the service without permission</li>
            <li>Use Locus to transmit harmful or malicious content</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">3. Account & Access</h2>
          <p>If you create an account:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            <li>You are responsible for all activities that occur under your account</li>
            <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">4. Intellectual Property</h2>
          <p>All content, including but not limited to text, graphics, logos, UI elements, code, and design assets are the exclusive property of Locus Operations LLC and are protected by intellectual property laws. You may not reproduce, distribute, or exploit any content without prior written consent.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">5. Payments & Engagements</h2>
          <p>If Locus offers paid services or engagements:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Prices and billing terms will be clearly communicated before work begins</li>
            <li>Payments are non-refundable unless explicitly stated otherwise in your engagement agreement</li>
            <li>We reserve the right to change pricing or scope with prior notice</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">6. Third-Party Services</h2>
          <p>Locus may integrate or link to third-party tools or services. We are not responsible for the content, policies, or practices of third-party providers. Use of third-party services is at your own risk.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">7. Disclaimer of Warranties</h2>
          <p>Locus is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We do not guarantee error-free or uninterrupted service, specific results or outcomes, or the accuracy of any recommendations made during an engagement.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">8. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, Locus Operations LLC shall not be liable for any indirect or consequential damages, loss of data, revenue, or profits, or business interruption arising from the use or inability to use our services.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">9. Termination</h2>
          <p>We reserve the right to suspend or terminate access to Locus at any time, without prior notice, if you violate these Terms. Upon termination, your right to use the services will immediately cease.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">10. Changes to Terms</h2>
          <p>We may update these Terms of Use at any time. Changes will be effective upon posting on this page. Continued use of Locus constitutes acceptance of the updated terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">11. Governing Law</h2>
          <p>These Terms shall be governed by and interpreted in accordance with the laws of the United States, without regard to conflict of law principles.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-primary mb-3">12. Contact</h2>
          <p>If you have any questions about these Terms of Use, please contact us at:</p>
          <p className="mt-2">Email: <a href="mailto:chris@locusops.com" className="text-primary hover:underline">chris@locusops.com</a></p>
        </section>

      </div>
    </main>
  );
}
