

## Revamp System Demo Page

### 1. Update Hero Copy (lines 14-22)

- **Headline**: "See How Locus Fixes Revenue Leaks in 5 Minutes"
- **Subhead**: "Watch how the system responds to leads in under 60 seconds, follows up automatically, and cuts no-shows--so you stop losing $5K-15K/month on leads that never book."

### 2. Remove 3-Card Benefits Section (lines 43-74)

Delete the entire "Key Value Props" grid with the Clock, Zap, and TrendingUp cards.

### 3. Replace CTA Section with Locus Core Pricing Card (lines 76-97)

Add a single centered `card-premium` card styled like the existing pricing tier cards, containing:

- **Title**: "Locus Core" with bold tagline "The Operating System"
- **Price**: "$297/month"
- **Subtitle**: "No setup fee. Cancel anytime."
- **Features list** with green check icons:
  - Locus OS (booking + follow-up automation)
  - Missed-call text-back (after-hours capture)
  - Multi-touch follow-up sequences
  - No-show prevention reminders
  - Pipeline tracking dashboard
  - Technical support
- **CTA Button**: "Get Started" using the `btn-primary` class (green gradient style, no "Locus Core" in button text)
- **Footer text**: "Self-install. Full control. No sales call needed."

### 4. Add Secondary Upgrade CTA Below Pricing Card

A subtle section below the pricing card offering an upgrade path:

- **Text**: "Want us to install it for you?"
- **Description**: "Book a Strategy Call for Locus Ops -- We build it, deploy it, and train your team. Live in 2-3 weeks."
- **Link**: "Book Strategy Call" with arrow, using `btn-secondary` style, linking to `/book-call`

### Technical Details

**File modified**: `src/pages/SystemDemo.tsx`

- Remove unused imports: `Clock`, `Zap`, `TrendingUp`
- Add import: `CheckCircleIcon` from `@/components/icons/BrandIcons`
- Add import: `ArrowRight` from `lucide-react` (already imported)
- Restructure the page content between the video section and footer
- Use `card-premium` class and `btn-primary` class to match existing site styling
- Max width constraint (`max-w-lg` or `max-w-xl`) to keep the single pricing card centered and appropriately sized

