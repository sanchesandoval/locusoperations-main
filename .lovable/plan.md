

## Update "Get Started" Nav Link to "Services"

**What changes:**
- Rename the "Get Started" navigation link label to "Services"
- Update its href from `#calendly` to `#our-services` (matching the PricingSection)

**Technical details:**
- In `src/components/home/PricingSection.tsx`, add `id="our-services"` to the section element so the nav link has a scroll target.
- In `src/components/layout/Header.tsx`, update the nav link from `{ href: "#calendly", label: "Get Started" }` to `{ href: "#our-services", label: "Services" }`.

Two files modified, two lines changed total.

