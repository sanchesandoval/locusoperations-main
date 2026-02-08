

# Dark Theme + Lead Magnet Funnel Overhaul

## Overview
This plan covers four major changes: (1) inverting the site to a dark black theme, (2) swapping logos to the white Locus logo, (3) creating two new subpages for the lead magnet funnel, and (4) replacing the Calendly section with a lead magnet CTA and updating all "Book a Call" CTAs.

---

## 1. Dark Theme Conversion

Update CSS variables in `src/index.css` to flip the color scheme to dark black while preserving all green (primary) values:

- `--background`: black/near-black (e.g., `0 0% 7%`)
- `--foreground`: white (e.g., `0 0% 95%`)
- `--card`: dark gray (e.g., `0 0% 10%`)
- `--card-foreground`: white
- `--popover`: same as card
- `--secondary`, `--muted`: dark grays
- `--muted-foreground`: light gray (e.g., `0 0% 60%`)
- `--border`: subtle white borders (e.g., `0 0% 15%`)
- All `--primary` / green values stay exactly the same
- Update shadow/gradient variables for dark compatibility
- Update `--brand-deep` footer background to match or go darker

Components that reference `bg-background` or `text-foreground` will automatically adapt. The `card-premium`, `btn-secondary`, `trust-chip`, and other utility classes already reference CSS variables, so they'll update automatically.

Special attention areas:
- Header backdrop blur: update `bg-background/80` will work automatically
- Marquee fade edges (`from-background`) will work automatically
- Dot pattern and glow effects will look better on dark
- Integration logos already have `grayscale opacity-60` -- will add `invert` filter so they show on dark background

## 2. Logo Swap

- Copy `user-uploads://White_Font_Transparent_Large_Locus_Logo.png` to `src/assets/locus-logo-white.png`
- Update `Header.tsx`: import and use the white logo instead of `locus-logo.png`
- Update `Footer.tsx`: use the white logo directly (remove `brightness-0 invert` filter since the logo is already white)

## 3. New Page: `/scorecard` (GHL Form Gate)

Create `src/pages/Scorecard.tsx`:
- Headline: "Find Out Which Revenue Leaks Are Costing You the Most...in under 3 minutes."
- Embeds the GHL form using an iframe and the provided embed script
- Clean, centered layout matching site branding
- After form fill, GHL auto-redirects to `/revenue-leak-finder`

## 4. New Page: `/revenue-leak-finder` (Interactive Scorecard)

Create `src/pages/RevenueLeakFinder.tsx`:
- Header: "Your Revenue Leak Scorecard -- Answer 12 questions. Get your score. See which leaks to fix first."
- 12 yes/no questions organized into 5 categories (Speed-to-Lead, Follow-Up, Booking, No-Shows, Reactivation)
- Each "No" = 1 point (counting leaks)
- Auto-calculated score at bottom with conditional messaging:
  - 0-3: Pipeline in decent shape
  - 4-7: Losing significant revenue ($3-5K/month)
  - 8-12: Critical structural leaks (20-40% revenue loss)
- All score ranges end with the same CTA: "Want to know exactly where YOUR revenue is leaking?" with a "Book a Free 15-Minute Pipeline Review" button linking to `/book-call`
- Page only accessible via direct link or GHL redirect (not in navigation)

## 5. Replace Calendly Section with Lead Magnet CTA

- Remove `CalendlySection.tsx` import/usage from `Index.tsx`
- Create a new `LeadMagnetCTA.tsx` component styled like the reference screenshot:
  - Clean card/section with a bold headline about finding revenue leaks
  - "Find My Revenue Leaks" CTA button linking to `/scorecard`
  - Matches dark theme branding with the green accent
- Add this component to `Index.tsx` in place of CalendlySection

## 6. Update All "Book a Call" CTAs

- Ensure all "Book a Call" buttons/links across the site point to `/book-call`
- This is already the case for most CTAs -- will verify Header, PricingSection, SystemDemo, and HeroSection links

## 7. Route Registration

Update `App.tsx` to add:
- `<Route path="/scorecard" element={<Scorecard />} />`
- `<Route path="/revenue-leak-finder" element={<RevenueLeakFinder />} />`

---

## Technical Details

### Files to Create
- `src/pages/Scorecard.tsx` -- GHL form embed page
- `src/pages/RevenueLeakFinder.tsx` -- 12-question interactive scorecard
- `src/components/home/LeadMagnetCTA.tsx` -- CTA section replacing Calendly

### Files to Modify
- `src/index.css` -- Dark theme CSS variables
- `src/components/layout/Header.tsx` -- White logo swap
- `src/components/layout/Footer.tsx` -- White logo swap, remove invert filter
- `src/pages/Index.tsx` -- Swap CalendlySection for LeadMagnetCTA
- `src/App.tsx` -- Add new routes
- `src/components/home/HeroSection.tsx` -- Invert integration logo filters for dark bg

### Asset to Copy
- `White_Font_Transparent_Large_Locus_Logo.png` to `src/assets/locus-logo-white.png`

