

## Update Services Section with Branded Tier Names

**Goal:** Rebrand pricing tiers with "Locus" prefix for brand consistency and update copy/CTAs.

**File:** `src/components/home/PricingSection.tsx`

---

### Tier Data Updates (lines 4-51)

| Current | New |
|---------|-----|
| "Core System" | "Locus Core" |
| "Implementation" | "Locus Ops" |
| "Growth Ops" | "Locus Command" |

**Tier 1: Locus Core**
- Name: "Locus Core"
- Label: "The Operating System — For clinics who want the infrastructure and can deploy it themselves."
- Pricing: "$297/month" (keep)
- CTA: "Watch 5-Min System Demo" (keep)
- Features: (keep existing)

**Tier 2: Locus Ops** (Popular)
- Name: "Locus Ops"
- Label: "Full Deployment + Revenue Operations — For clinics ready to go live fast with professional installation and AI front desk."
- Pricing: "Book a call for pricing"
- CTA: "Book Strategy Call" → link to `/book-call`
- Features:
  - Everything in Locus Core
  - Full systems mapping & implementation
  - AI Digital Cortex (voice/SMS front desk)
  - Database reactivation campaign
  - Monthly revenue operations support

**Tier 3: Locus Command**
- Name: "Locus Command"
- Label: "Enterprise Infrastructure + Fractional COO — For multi-location clinics or owners who want ongoing optimization and custom builds."
- Pricing: "Book a call for pricing"
- CTA: "Book Strategy Call" → link to `/book-call`
- Features:
  - Everything in Locus Ops
  - Multi-location support (if applicable)
  - Custom tech stack integrations (EMR/EHR)
  - Fractional COO operations partnership
  - Clinical staff training & placement
  - Advanced KPI intelligence & analytics

---

### Why This Works

- "Locus Core / Ops / Command" reinforces brand identity
- "Ops" signals operational infrastructure, not just software
- "Command" conveys control and mastery for enterprise clients
- Clean hierarchy that's easy to explain on sales calls
- "Book a call for pricing" on higher tiers encourages conversations

