

## Remove Pricing Text from Service Cards

**Goal:** Remove the "$297/month" and "Book a call for pricing" text displays from all three tier cards.

**File:** `src/components/home/PricingSection.tsx`

---

### Changes Required

**1. Remove pricingText from tier data (lines 18, 33, 49)**
- Delete `pricingText: "$297/month"` from Locus Core
- Delete `pricingText: "Book a call for pricing"` from Locus Ops
- Delete `pricingText: "Book a call for pricing"` from Locus Command

**2. Remove pricing display section from JSX (lines 94-97)**
- Delete the entire pricing div block:
```tsx
{/* Pricing */}
<div className="mb-6 pb-6 border-b border-border/50">
  <p className="text-2xl font-bold text-foreground">{tier.pricingText}</p>
</div>
```

---

### Result

Cards will display:
- Tier name and tagline
- CTA button
- Features list

Without any pricing information shown.

