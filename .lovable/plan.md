
## Fix Footer Navigation Links and Update Social Icons

**Goal:** Ensure footer links scroll to correct sections and update social links to only show LinkedIn with the correct URL.

---

### Changes Required

| File | Change |
|------|--------|
| `src/components/home/FAQSection.tsx` | Add `id="faq"` to the section element |
| `src/lib/config.tsx` | Update LinkedIn URL and remove Twitter/Instagram from socialLinks |

---

### Details

**1. Add ID to FAQ Section (`src/components/home/FAQSection.tsx`)**

Line 60 - Change:
```tsx
<section className="section-spacing relative">
```
To:
```tsx
<section id="faq" className="section-spacing relative">
```

**2. Update Social Links (`src/lib/config.tsx`)**

- Update LinkedIn URL from `linkedin.com/company/locus` to `https://linkedin.com/company/locusaiops`
- Remove Twitter and Instagram entries from `socialLinks` array
- Remove unused imports (`FaTwitter`, `RiInstagramFill`)

---

### Current Section IDs (Verified)

| Footer Link | Target ID | Section |
|-------------|-----------|---------|
| Our Process | `#how-it-works` | HowItWorksSection ✓ |
| Results | `#testimonials` | TestimonialsSection ✓ |
| FAQs | `#faq` | FAQSection (needs id added) |

---

### Result

- All three footer links will scroll to their respective sections
- Only LinkedIn icon will appear in footer, linking to `linkedin.com/company/locusaiops`
