

# Move the GHL Form Up on the Scorecard Page

## Change

Reduce the top padding on the scorecard page to move the form closer to the top of the viewport.

## Technical Detail

In `src/pages/Scorecard.tsx`, change the `<main>` element's class from `pt-32 pb-16` to `pt-20 pb-16`. This reduces the top padding from 8rem (128px) to 5rem (80px), pulling both the heading and form upward. Also reduce the bottom margin on the heading block from `mb-12` to `mb-8` to tighten spacing between the title and the form.

