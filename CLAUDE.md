# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Locus — B2B SaaS GTM Partner Landing Page

AI-native GTM partner marketing site. This repo is the **public website only**, not the product, not the client dashboard.

> Migration note: this was a Vite + React Router app and was rebuilt on Next.js. Some leftover artifacts remain (`.env` with `VITE_`-prefixed Supabase keys that are unused; `templates-references/` holds the two source templates this design was adapted from and is excluded from the TypeScript build). Ignore them unless a task touches them.

## Tech Stack

- **Next.js 15 App Router** + React 19 + TypeScript (NOT Vite, NOT React Router)
- **Tailwind CSS v4** — CSS-first config. There is no `tailwind.config.js`; the theme lives in the `@theme` block of `src/app/globals.css`
- **shadcn/ui** — "new-york" style, RSC enabled, `neutral` base, Lucide icons (`src/components/ui/`)
- **motion v12** (the `motion` package, the renamed framer-motion) for animations — import from `motion/react`
- **next-themes** for light/dark theming
- **Cal.com** embed (`@calcom/embed-react`) for booking. Not GHL, not Calendly.
- **pnpm** package manager (`pnpm-lock.yaml`)
- Deploy target: Vercel (`vercel.json` sets framework to nextjs)

## Commands

```bash
pnpm dev      # Dev server — http://localhost:3000
pnpm build    # Production build
pnpm start    # Serve the production build
pnpm lint     # next lint (ESLint)
```

There is no test suite configured.

## Architecture

### Routing (App Router)
Routes are directories under `src/app/`, each with a `page.tsx`:
- `/` — home (`src/app/page.tsx`)
- `/book-call` — Cal.com booking embed (`force-dynamic`)
- `/privacy-policy`, `/terms` — legal pages

`src/app/layout.tsx` is the root layout: wraps every page in `ThemeProvider` + a centered `max-w-7xl` frame with the persistent `<Navbar />` and vertical guide borders. Metadata, OpenGraph, and favicon are set here, driven by `siteConfig`. `opengraph-image.tsx` and `icon.svg` are Next file-based metadata conventions.

### Page composition
The home page (`src/app/page.tsx`) renders 11 section components from `src/components/sections/` in order, separated by `divide-y`:
HeroSection → CompanyShowcase → ProblemSection → HowItWorksSection → StackTransparencySection → SignalCategoriesSection → WhatYouGetSection → CostComparisonSection → FAQSection → CTASection → FooterSection.

### Content is configuration-driven — edit `src/lib/config.tsx`, not components
**Almost all site copy lives in the `siteConfig` object in [src/lib/config.tsx](src/lib/config.tsx)** — hero text, nav links, company logos, problem cards, how-it-works steps, signal categories, FAQ items, CTA, footer. Section components read from `siteConfig`; to change wording, edit the config. `config.tsx` is `.tsx` (not `.ts`) because logo entries embed `<img>` JSX and it exports a `Highlight` component. The exported `SiteConfig` type is `typeof siteConfig`.

### Component layout
- `src/components/sections/` — the page sections + `navbar.tsx` and `footer-section.tsx`
- `src/components/ui/` — shadcn primitives plus animated effect components (`marquee`, `flickering-grid`, `orbiting-circle`, `code-block`, `markdown`, `response-stream`)
- `src/components/` (root) — bespoke animations and shared pieces (`*-bento-animation`, `handoff-animation`, `stack-burst-animation`, `cal-embed`, `nav-menu`, `section-header`, `theme-provider`, `theme-toggle`, `icons`)
- `src/hooks/use-media-query.ts`, `src/lib/utils.ts` (`cn` helper)

Brand/integration logos are PNG/SVG/WEBP/AVIF files in `public/logos/`, referenced by path in `siteConfig.companyShowcase`.

### Path alias
`@/` → `src/`. Use it for all imports (configured in `tsconfig.json` and `components.json`).

## Brand

### Colors — defined as CSS variables in `src/app/globals.css`

The site is **dark-first**; `--background` dark is `#04080C`. The signature **Locus green `#0D9373` is the `--secondary` token**, exposed as Tailwind `text-secondary` / `bg-secondary`.

> IMPORTANT GOTCHA: in this Tailwind config the green is `secondary`, NOT `accent`. The `--accent` token is a dark card color (`#0A1015`), not green. The `Highlight` component in `config.tsx` uses `text-secondary` for the green emphasis. Use `secondary` for any green CTA/highlight/active state, and use it sparingly for maximum impact.

Other dark-theme tokens: `--foreground: #F5F5F5` (all UI text — never `#FFFFFF` except the logo wordmark), `--card: #0A1015`, `--muted: #1A2228`, `--border: #1A2228`.

### Typography
Headings/UI use **Satoshi**, body uses **Eudoxus Sans** — both loaded via the Fontshare `@import` at the top of `globals.css` and mapped to `--font-sans` / `--font-body` in the `@theme` block. Never use Inter, Roboto, Arial, or system fonts. (Note: `layout.tsx` also loads Geist via `next/font` for the variable/mono slot.)

### Design direction
Dark, premium, clean — high-end consulting firm meets operational intelligence. Generous negative space. Subtle depth (noise, faint gradients, soft glows on accent elements). Animations feel precise, not playful — staggered reveals, smooth fades, no bounce. Prefer `motion` over CSS-only animation in React components. Don't reinvent what shadcn/ui or the existing animated `ui/` components provide.

## Tone of Voice

Write like you already ran the audit and you're presenting the findings — calm, precise, a little damning. Direct, no-fluff, slightly uncomfortable because it's too accurate. Never soft, never consultative. A confident operator who already knows what's wrong — surgeon, not salesperson.

Diagnostic-first: we audit before we automate. We set a baseline, build inside the client's existing stack, and own the outcome. The differentiator isn't speed or tooling — it's that we prove what changed and why. We own the **full** revenue motion (marketing ops + sales ops + customer success ops connected), not one slice.

## Services Reference (Locus Audit → Build → Command)

- **Locus Audit** — paid revenue-motion diagnostic. Map the funnel, find the leaks, fix 1–2 live.
- **Locus Build** — build the system the audit reveals (CRM cleanup, speed-to-lead, automated follow-up, onboarding).
- **Locus Command** — fully embedded ops partner; we run it for you.

The "How Locus Works" section maps to these as 01 Identify → 02 Build → 03 Operate.

## Differentiator
We diagnose before we build and take accountability for the outcome. We set the baseline, build inside the client's existing stack, and prove what changed and why. That's not a deliverable — that's infrastructure.

## Target Audience
Founder-led B2B SaaS companies scaling through ~$50K–$500K MRR who know their pipeline is leaking but have no internal ops person. Three buyer moments, same ICP: **pre-stall** (preventative), **mid-stall** (they feel it, can't name it — we diagnose), **post-stall** (more reps, more tools, still flat — the ops reveal).

## Terminology
- **Revenue leak** — operational gaps where pipeline, deals, or customers fall through the cracks
- **Speed-to-lead** — time between an inbound lead action and first response
- **RevOps** — unified revenue operations across marketing, sales, and CS
- **GTM** — go-to-market: the full acquire→convert→retain motion

## Important Notes
- The site is dark-themed and dark-first — don't introduce light/white page backgrounds for content sections.
- To change site copy, edit `siteConfig` in `src/lib/config.tsx` — not the section components.
- "Book a strategy call" routes to `/book-call`, which renders the Cal.com embed (`locusops/gtm-call`). Never wire booking to Calendly.
- Mark placeholder content (stats, testimonials) clearly in code until real values exist.
