

## Redesign Services Section with Exact Screenshot Copywriting

### Overview
Completely rewrite the PricingSection component to use horizontal agency-style cards with the exact copywriting provided, a mouse-tracking hover glow effect, and a "Book a Free Consultation" CTA button below.

### Content (exact copy from screenshot)

**Card 01 — IDENTIFY**
- Headline: "We find where your revenue is leaking."
- Description: "We start with a deep diagnostic of your entire lead-to-appointment pipeline. We map every stage — from first contact to booked appointment — and pinpoint the exact leaks costing you money."
- Features:
  - 60-minute pipeline diagnostic
  - Full funnel mapping (visual)
  - Top 3 revenue leaks identified
  - 1-2 quick wins fixed live
  - 1-page fix plan delivered same day

**Card 02 — BUILD**
- Headline: "We build the system that plugs every leak."
- Description: "We design and install your complete AI-powered revenue operations system inside your existing tools. No new platforms to learn. No rip-and-replace. Just automation that works 24/7."
- Features:
  - AI lead response (under 60 seconds)
  - Multi-channel follow-up (SMS, email, voice)
  - Smart qualification + booking flows
  - No-show recovery sequences
  - Database reactivation campaigns
  - Live in 2-4 weeks

**Card 03 — OPERATE**
- Headline: "You run it — or we run it for you."
- Description: "Once the system is live, you choose your path. Take it over with our resources and monthly updates, or keep us embedded as your ongoing revenue operations partner. Either way, the system is yours."
- Features:
  - Monthly workshops + optimization
  - Template + snapshot library
  - KPI dashboards + reporting
  - Optional: ongoing DFY management
  - Optional: weekly strategy calls

### Layout and Interactions
- **Card layout**: Full-width horizontal cards stacked vertically. Each card has a two-column layout on desktop (description left, features right), stacking on mobile.
- **Step badge**: Each card shows its step number (01, 02, 03) and label (IDENTIFY, BUILD, OPERATE) in the top-left as a styled badge.
- **Hover glow**: A radial gradient spotlight follows the mouse cursor across each card using `onMouseMove` tracking. Subtle green tint (`hsl(168 40% 45% / 0.1)`), hidden on mouse leave, `pointer-events-none` overlay.
- **CTA below cards**: Centered "Book a Free Consultation" button using `btn-primary` style, linking to `/book-call`.
- **Footer note**: "Growth Fuel" text remains below the CTA.

### Section Header
- Keep "Our Services" label and "Three Ways to Work With Locus" heading
- Update subtitle to match the new framing (e.g., "From diagnosis to deployment to ongoing optimization.")

### Technical Details

**File modified:** `src/components/home/PricingSection.tsx`

Changes:
1. Replace the `tiers` data array with new content matching the exact copywriting above (step, label, title, description, features)
2. Remove the `popular`, `ctaText`, `ctaLink`, `tagline`, `positioning` fields; add `step`, `label`, `title`, `description` fields
3. Replace the 3-column grid with a vertical `space-y-6` stack of full-width cards
4. Each card uses `md:grid md:grid-cols-2 gap-8` for the two-column layout
5. Add `useState` for mouse position tracking per card, with `onMouseMove` and `onMouseLeave` handlers
6. Render an absolutely-positioned `pointer-events-none` div with a radial gradient background that follows the cursor
7. Add the "Book a Free Consultation" `Link` component after the cards stack, before the Growth Fuel footnote
8. Remove per-card CTA buttons (replaced by the single bottom CTA)

