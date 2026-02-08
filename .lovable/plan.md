

# Remove GHL Popup Form from index.html

## What
Remove the scroll-triggered GHL popup iframe and its associated script tag from `index.html`. The only GHL form should be the inline embed on the `/scorecard` page.

## Changes

### `index.html`
- Remove the popup iframe (`id="popup-p61qThW6q0uTt7jSreIK"`) near the bottom of the body
- Remove the `<script src="https://link.msgsndr.com/js/form_embed.js"></script>` tag that accompanies it

The `/scorecard` page (`src/pages/Scorecard.tsx`) already loads its own embed script dynamically via `useEffect`, so no other changes are needed.

