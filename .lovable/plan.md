

# Store Revenue Leak Finder Submissions (Matched by Timestamp)

## Overview

Save the Revenue Leak Finder quiz answers and scores to your database each time someone submits. Since you only get a few submissions per day, you'll match them to GHL contacts by comparing the submission timestamps.

## What Gets Built

### 1. Database Table

A new `leak_finder_submissions` table storing:
- All 12 yes/no answers
- Per-category breakdown (e.g., "Speed-to-Lead: 2 of 3 gaps") so you know which areas to reference in nurture messages
- Overall score and risk tier
- Timestamp for cross-referencing with GHL

Public insert-only -- no login required. No public read access.

### 2. Frontend Update

When the user clicks "See My Score" on the Revenue Leak Finder page:
- Silently save their answers to the database
- No change to the user experience -- results appear instantly as before

### 3. How You Use It

- Open your backend to view the `leak_finder_submissions` table
- See a new row each time someone completes the quiz, with a timestamp
- Match it to the GHL form submission that came in around the same time (since you redirect from the GHL form to the quiz)
- Read their category breakdown to craft a tailored nurture message targeting their specific weak areas

## Technical Details

### Database Migration SQL

```sql
CREATE TABLE public.leak_finder_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  answers jsonb NOT NULL,
  category_scores jsonb NOT NULL,
  score integer NOT NULL,
  result_label text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE public.leak_finder_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous inserts"
  ON public.leak_finder_submissions
  FOR INSERT
  WITH CHECK (true);
```

### Frontend Changes (RevenueLeakFinder.tsx)

- Import the database client
- On "See My Score" click, compute per-category scores and insert to the database
- Fire-and-forget -- no loading spinners or error messages needed for analytics data

```typescript
// Example of what gets saved
{
  answers: { "0": "yes", "1": "no", "2": "yes", ... },
  category_scores: [
    { name: "Speed-to-Lead", gaps: 2, total: 3 },
    { name: "Follow-Up", gaps: 1, total: 3 },
    { name: "Booking", gaps: 0, total: 2 },
    { name: "No-Shows", gaps: 2, total: 2 },
    { name: "Reactivation", gaps: 1, total: 2 }
  ],
  score: 6,
  result_label: "Moderate Risk"
}
```

