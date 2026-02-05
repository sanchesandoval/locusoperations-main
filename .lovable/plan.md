
## Spacing Adjustment: Problem Section

**Goal:** Add more breathing room between the main headline and the descriptive paragraph below it.

**File:** `src/components/home/LeakSection.tsx`

**Current spacing:**
- "Problem" label: `mb-4` (margin-bottom)
- Main headline (h2): `mb-6` (margin-bottom)
- Paragraph: No top margin

**Proposed change:**
- Increase the headline's bottom margin from `mb-6` to `mb-8`

This adds an extra 0.5rem (8px) of space between the headline and paragraph, creating better visual separation without disrupting the overall section harmony. The rest of the spacing (`mb-16` on the header container, `mt-12` on the summary) remains balanced.

**Technical detail:**
Change line 33 from:
```tsx
<h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold mb-6">
```
To:
```tsx
<h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold mb-8">
```
