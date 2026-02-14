
## Summary

Remove the `card-premium` wrapper styling from the GHL booking iframe on both the homepage and the /book-call page so the widget displays cleanly without a redundant dark background behind it.

## Changes

### 1. `src/components/home/CalendlySection.tsx`
- Remove the `card-premium` class from the `div` wrapping the iframe
- Keep the `max-w-4xl mx-auto` for centering/width, but drop the card background and border

### 2. `src/pages/BookCall.tsx`
- Same change: remove `card-premium` from the iframe wrapper div

## Technical Details

The `card-premium` class applies `bg-card border border-border rounded-2xl` plus a box shadow. Since the GHL widget already has its own dark background, this creates a visible dark border/padding area beneath the calendar content. Removing it will let the widget render directly without the extra card layer.
