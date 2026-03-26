# Locus — Agency Landing Page

AI-powered revenue operations agency. This repo is the marketing website only — not the product, not the client dashboard.

## Tech Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS 4
- Framer Motion (via Magic UI components)
- Magic UI component library (licensed — use components from registry)
- Deploy target: Vercel

## Commands

```bash
npm run dev          # Dev server
npm run build        # Production build
npm run lint         # ESLint check
npx next start       # Preview production build locally
```

## Brand

### Colors (CSS variables)

- `--bg-primary: #04080C` — near-black background, used everywhere
- `--accent: #0D9373` — signature green, CTAs and highlights only
- `--white-logo: #FFFFFF` — reserved for "Locus" wordmark only
- `--white-ui: #F5F5F5` — all UI text, components, borders

IMPORTANT: Never use #FFFFFF for anything except the logo. All other white UI elements use #F5F5F5.

### Typography

- **Headings:** Satoshi (variable weight) — bold at hero scale, medium for section heads
- **Body/UI:** Eudoxus Sans — all paragraphs, nav, buttons, captions
- Never use Inter, Roboto, Arial, or system fonts

### Design Direction

Dark, premium, clean. Think high-end consulting firm meets operational intelligence.

- Dark backgrounds throughout — no light/white sections
- Green accent used sparingly for maximum impact (CTAs, key stats, active states)
- Generous negative space, not cluttered
- Subtle depth: noise textures, faint gradients, soft glows on accent elements
- Animations should feel precise, not playful — staggered reveals, smooth fades, no bounce

## Tone of Voice

Write like you already ran the audit and you're presenting the findings — calm, precise, a little damning. Direct, no-fluff, slightly uncomfortable because it's too accurate. Never soft. Never consultative. The voice is a confident operator who already knows what's wrong. Think surgeon, not salesperson.

Diagnostic-first philosophy: we audit before we automate. We set a baseline, build inside their existing stack, and take accountability for the outcome. The differentiator isn't just speed or tooling — it's that we can prove what changed and why.

We own the full revenue motion – marketing ops, sales ops, and customer success ops connected. Not one slice. The whole system.

## Site Structure

### Nav
- Services, Results, CTA button ("Book a Free Consultation")

### Hero
- Badge: "For Fast-Moving B2B Companies"
- Two CTAs: "Book a Free Consultation" (primary) → GHL booking page, "Take the Revenue Leak Scorecard" (secondary) → /scorecard

### Integration Logos
- B2B stack: HubSpot, Salesforce, Slack, Make, n8n, Zapier, Pipedrive

### Problem Section
- 3 cards showing revenue leak patterns across B2B/SaaS/agency operations

### How Locus Works
- 01 Identify → 02 Build → 03 Operate
- Maps to service tiers: Locus Audit → Locus Build → Locus Command

### Stats Section
- 4-stat format with PLACEHOLDER numbers (clearly marked)
- Cover marketing ops, sales ops, and CS ops metrics
- Examples: speed-to-lead improvement, pipeline velocity, churn reduction, rep efficiency

### Results/Testimonials
- Carousel format
- Use placeholder testimonials (clearly marked) until real ones exist

### FAQ
- Accordion format
- B2B revenue operations questions (not clinic/healthcare)

### Final CTA / Scorecard Block
- Push to Revenue Leak Scorecard (/scorecard) and consultation booking

### Footer
- Standard structure with updated tagline

## Services Reference

- **Locus Audit** — 90-min revenue operations diagnostic. Map the funnel, find the leaks, fix 1–2 live.
- **Locus Build** — Build the system. CRM cleanup, speed-to-lead, automated follow-up, onboarding — whatever the audit reveals.
- **Locus Command** — Fully embedded ops partner. We run it for you.

## Differentiator
We diagnose before we build and take accountability for the outcome. We set the baseline, build inside their existing stack, and prove what changed and why. That's not a deliverable. That's infrastructure.

## Target Audience

B2B SaaS, agencies, and consultancies scaling through $50K–$500K MRR who know their pipeline is leaking but don't have an internal ops person to fix it. Three buyer moments: Three buyer moments, same ICP: (1) Pre-stall — scaling fast, ops hasn't caught up, we're the preventative play before the wall hits. (2) Mid-stall — growth is slowing, they feel it but can't name it, we diagnose it. (3) Post-stall — hired more reps, bought more tools, still not growing, the problem is ops but they're blaming everything else, we're the reveal.

## Terminology

- **Revenue leak** — operational gaps where pipeline, deals, or customers fall through the cracks
- **Speed-to-lead** — time between inbound lead action and first human/automated response
- **RevOps** — revenue operations: the unified function across marketing, sales, and CS ops
- **GTM** — go-to-market: the full motion of how a company acquires, converts, and retains customers across marketing, sales, and CS


## Important Notes

- NEVER use light/white page backgrounds — the entire site is dark-themed
- All placeholder content (stats, testimonials) must be clearly marked with `{PLACEHOLDER}` comments in code
- The scorecard at /scorecard is a 12-question quiz — link to it, don't rebuild it
- "Book a Free Consultation" always links to the GHL calendar page, never Calendly
- Use Magic UI components where they fit — don't reinvent what the library provides
- Prefer Framer Motion for animations over CSS-only when using React components
