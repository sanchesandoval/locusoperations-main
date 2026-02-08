

## Dynamic Results Page + Qualifying Questions for Revenue Leak Finder

### Overview
Two major upgrades to the Revenue Leak Finder page:
1. Add 4 qualifying questions (Q14-Q17) that don't affect the score but capture lead intel
2. Replace the generic results section with a dynamic, personalized results page

---

### 1. Database Migration

Add a `qualifying_answers` column to store the new question responses:

```sql
ALTER TABLE leak_finder_submissions ADD COLUMN qualifying_answers jsonb;
```

---

### 2. Qualifying Questions (Q14-Q17)

Added below the 12 scored questions under a "A Few More Questions" header:

- **Q14** (radio select): "What's the #1 outcome you want to achieve in the next 90 days?" -- 4 options
- **Q15** (radio select): "What's the biggest obstacle stopping you right now?" -- 4 options
- **Q16** (radio select): "Which solution would suit you best?" -- 4 options (no parenthetical text)
  - "I want someone to build and manage the entire system for me"
  - "I want someone to build it, then I'll run it myself"
  - "I want to learn how to build it myself with resources"
  - "I just want to know what's broken so I can fix it"
- **Q17** (optional textarea): "Is there anything else we should know?"

Submission requires Q14-Q16 answered (Q17 optional). Subtitle updated to "Answer a few quick questions."

---

### 3. Dynamic Results Page

Replace the current simple score display with three personalized sections:

#### Section A: Visual Score Gauge

A semicircular gauge/speedometer built with SVG, colored in three zones:
- **Green zone (0-4 leaks)**: "Your pipeline has solid foundations. A few targeted fixes could unlock significant revenue."
- **Yellow zone (5-8 leaks)**: "Your pipeline has serious gaps. You're likely losing $3-6K/month in revenue that's fixable."
- **Red zone (9-12 leaks)**: "Critical. Your pipeline is bleeding revenue at nearly every stage. Most businesses at this score are losing 30-40% of potential appointments."

The needle/indicator animates to the user's score position.

#### Section B: Top 3 Personalized Insights

Compute per-category gap percentages (gaps / total questions). Rank categories by worst score. Display the top 3 weakest areas, each in its own card with:
- Category name as heading
- A tailored insight paragraph specific to that category:
  - **Speed-to-Lead**: "Your leads are waiting too long for a response. Research shows that leads contacted within 5 minutes are 10-20x more likely to book. Every hour of delay costs you booked appointments."
  - **Follow-Up**: "You're generating leads but not converting them. 59% of qualified leads never book because follow-up is inconsistent. A multi-touch sequence across SMS, email, and voice changes this completely."
  - **Booking**: "Leads who can't self-book drop off. Requiring a phone call to schedule creates friction that kills conversion rates."
  - **No-Shows**: "You're booking appointments but losing them to no-shows and cancellations. Automated confirmation and reminder sequences reduce this by 25-40%."
  - **Reactivation**: "You have a database of past leads and prospects who went cold. Without a reactivation system, this revenue stays locked up."
- A gap indicator (e.g., "2 of 3 gaps found")

#### Section C: Personalized CTA Based on Q16 Answer

Different messaging and calls-to-action depending on the user's Q16 response:

- **"Build and manage the entire system for me"**: Strong CTA -- "Your pipeline has [X] critical leaks. Recommended: Book a free 15-minute pipeline review with our team." Primary button: "Book My Free Pipeline Review"

- **"Build it, then I'll run it myself"**: Medium CTA -- "Your pipeline has [X] leaks that are costing you revenue. Recommended: Book a free 15-minute pipeline review to see what your fix plan would look like." Primary button: "Book My Free Pipeline Review"

- **"Learn to build it myself with resources"** OR **"Just want to know what's broken"**: Softer CTA -- Lists 3 quick wins based on their weakest categories, then a secondary CTA to book a call, plus a link to a workshop/resources if available.

---

### Technical Details

**State additions** in `RevenueLeakFinder.tsx`:
- `q14Answer`, `q15Answer`, `q16Answer` (string | null)
- `q17Answer` (string, default "")

**Category scoring logic**: Reuse the existing `categoryScores` computation. Sort by `gaps/total` descending to find the top 3 weakest areas. Map each category name to its personalized insight text.

**Gauge component**: Built inline with SVG arc paths. Three colored arc segments (green/yellow/red) with an animated needle using framer-motion. No external libraries needed.

**Submission data**: The `qualifying_answers` jsonb column stores:
```json
{
  "desired_outcome": "selected option text",
  "biggest_obstacle": "selected option text",
  "preferred_solution": "selected option text",
  "additional_notes": "free text or empty"
}
```

**Quick wins mapping** (for the softer CTA path): Each category has a predefined "quick win" tip string. The 3 tips shown correspond to the user's 3 weakest categories.

