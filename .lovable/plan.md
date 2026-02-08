
# Fix Scrollbar on Scorecard Iframe

## Problem
The GHL form content is 732px tall (per `data-height`), but the `card-premium` container doesn't have enough explicit height, causing a scrollbar to appear inside the iframe.

## Fix in `src/pages/Scorecard.tsx`

1. **Set a minimum height on the container div** -- Give the `card-premium` wrapper a `min-height` of ~800px (732px form + padding buffer) so the iframe has room to render fully.

2. **Add `overflow: hidden`** to the container to suppress any residual scrollbar while the GHL script auto-sizes the iframe.

The change is a one-line style addition to the container div wrapping the iframe.

## Technical Detail

- On the `<div className="max-w-2xl mx-auto card-premium">`, add inline style: `minHeight: "800px"` and `overflow: "hidden"`
- This ensures the container is always tall enough for the 732px form, eliminating the scrollbar
