

## Add Secondary CTA Below "Book a Free Consultation"

### Overview
Add a secondary CTA link labeled "Get your Revenue Leak Scorecard ->" below the existing "Book a Free Consultation" button in the Our Services section, linking to `/scorecard`.

### Changes

**File:** `src/components/home/PricingSection.tsx`

In the CTA area (after the "Book a Free Consultation" button and before the "Growth Fuel" footnote), add a secondary link:

```tsx
<Link
  to="/scorecard"
  className="text-primary hover:text-primary/80 text-sm font-medium inline-flex items-center gap-1 transition-colors"
>
  Get your Revenue Leak Scorecard →
</Link>
```

This will be placed inside the existing `mt-12 text-center` div, between the primary button and the Growth Fuel note, with a small top margin (e.g. `mt-4`).

