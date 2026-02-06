

## Add FAQ Section to System Demo Page and Update Footer Link

### UX Decision: Footer "FAQs" Link

The footer "FAQs" link currently points to `#faq` (an anchor). Since the System Demo page now has its own FAQ section with product-specific questions, and the home page has a broader FAQ section, the best UX approach is:

- **Keep the footer link pointing to the home page FAQ** (`/#faq`) using a route-based link instead of a plain anchor. This ensures the link works correctly from any page (including `/system-demo`) by navigating to the home page and scrolling to the FAQ section. The home page FAQ is more comprehensive and serves as the canonical FAQ destination.
- The System Demo FAQ section will have its own `id="demo-faq"` so it does not conflict.

### Changes

**1. Add FAQ section to `src/pages/SystemDemo.tsx`**

- Add a new FAQ section below the secondary upgrade CTA (after line 104, before the closing `</div>`)
- Use the same Accordion pattern and styling from the home page FAQ section (`card-premium`, `AccordionTrigger`, `AccordionContent`)
- Include the 3 provided Q&As as inline data
- Add `id="demo-faq"` to the section
- Import `Accordion`, `AccordionContent`, `AccordionItem`, `AccordionTrigger` from `@/components/ui/accordion`

**2. Update footer "FAQs" link in `src/lib/config.tsx`**

- Change `{ href: "#faq", label: "FAQs" }` to `{ href: "/#faq", label: "FAQs" }`
- This ensures it navigates to the home page FAQ from any route

**3. Update `src/components/layout/Footer.tsx`**

- Update the link rendering logic so that `/#faq` (starts with `/`) is treated as a `<Link>` route rather than an anchor, which it already will be since it doesn't start with `#`.

### Technical Details

**`src/pages/SystemDemo.tsx`** -- Add after the secondary CTA section (line 104):

```tsx
// New FAQ data array at top of file
const demoFaqs = [
  {
    question: "Do I need technical skills?",
    answer: "No. Setup guides walk you through connecting your calendar, phone, and email. If you'd rather we handle it, book a call for Locus Ops.",
  },
  {
    question: "Can I upgrade to Locus Ops later?",
    answer: "Absolutely. Core is the right choice if you're building your foundation or want full control of the system. Many clinics stay on Core indefinitely. Others upgrade to Ops when they want done-for-you implementation, or to Command when they scale to multiple locations. We'll migrate everything seamlessly.",
  },
  {
    question: "What if it doesn't work for my clinic?",
    answer: "Cancel anytime. No contracts. If you're not seeing more booked appointments in 30 days, we'll help you troubleshoot or you can cancel.",
  },
];
```

New section markup mirrors the home page FAQ styling with `card-premium` accordion items, a "Questions" label, and "Frequently Asked" heading.

**`src/lib/config.tsx`** -- Line 58:
```tsx
// Change from:
{ href: "#faq", label: "FAQs" }
// To:
{ href: "/#faq", label: "FAQs" }
```

This ensures from any page the footer FAQs link takes users to the comprehensive home page FAQ section.
