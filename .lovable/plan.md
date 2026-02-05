

## Simplify Solution Section

**Goal:** Transform the current 5-step "SCALE Framework" into a cleaner 3-card "How Locus Works" section while preserving the scroll animation.

### Content Changes

**Header:**
- Label: Keep "Solution"
- Headline: "The SCALE Framework" → "How Locus Works"
- Subhead: "Engineering Your Lead-to-Appointment Pipeline." → "Three systems that fix the revenue leaks in your clinic."

**Items (5 → 3):**

| # | Title | Description |
|---|-------|-------------|
| 01 | Instant Response | AI answers inquiries in under 60 seconds via call, SMS, and email—24/7, even after hours. |
| 02 | Automated Follow-Up | Multi-touch sequences (call + SMS + email) convert leads your team would have lost after one attempt. |
| 03 | No-Show Prevention | Automated reminders and reconfirmation loops cut no-shows by 25-40%. |

### Technical Changes

**File:** `src/components/home/SolutionSection.tsx`

1. **Update `stackItems` array** (lines 3-33):
   - Reduce from 5 items to 3
   - Simplify structure: remove `letter` and `title` fields, use single `title` field
   - Keep `layer`, `title`, `description`

2. **Update header text** (lines 61-66):
   - Change headline and subhead

3. **Update card rendering** (lines 85-87):
   - Remove the `[letter]title` format
   - Display simple title instead

4. **Keep intact:**
   - IntersectionObserver logic for scroll animations
   - Staggered animation delays
   - Hover effects and styling

