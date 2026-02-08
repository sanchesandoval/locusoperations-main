

## Add Descriptive Text Below Scorecard Headline

**What will change:**
A new paragraph block will be added to the Scorecard page (`src/pages/Scorecard.tsx`) between the existing headline and the embedded form. It will describe the three scoring areas using the standard muted grey text color (`text-muted-foreground`), with balanced spacing.

**Details:**
- Add a new `div` below the `h1` inside the existing `max-w-2xl` container
- Use `text-base` size to keep it readable but not oversized
- Use `text-muted-foreground` for the standard grey color
- Structure: one intro sentence, then a list of three items with bold labels
- Adjust bottom margin on the headline container (`mb-8` or `mb-10`) and top margin on the form wrapper to create even, balanced spacing between headline, description text, and form

**Technical steps:**
1. In `src/pages/Scorecard.tsx`, add descriptive text below the `h1` element
2. Use `text-muted-foreground` and `text-base` for styling
3. Adjust spacing: set the headline container to `mb-10` and ensure the form wrapper has `mt-10` for even gaps

