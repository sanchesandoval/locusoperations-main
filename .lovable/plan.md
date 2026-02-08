

## Summary

Two changes to `src/lib/config.tsx`:

1. Add "Revenue Leak Scorecard" link under the "Get Started" footer group
2. Add "How It Works" link in the "Company" footer group, positioned between existing links

## Changes (single file: `src/lib/config.tsx`)

Update the `footer` array to:

```
footer: [
  {
    title: "Get Started",
    links: [
      { href: "/book-call", label: "Book a Free Consultation" },
      { href: "/scorecard", label: "Revenue Leak Scorecard" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/#how-it-works", label: "How It Works" },
      { href: "/#testimonials", label: "Results" },
      { href: "/#faq", label: "FAQs" },
    ],
  },
],
```

These changes propagate automatically to every page since all pages use the shared `Footer` component.

