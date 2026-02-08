

# Fix Scrollbar by Matching Container to Form Dimensions

## Problem
The GHL form is 750px wide (per the screenshot) with 105px margin on each side, but the scrollbar persists because the iframe's explicit height isn't set high enough for the rendered content, and the container width may be constraining it.

## Changes to `src/pages/Scorecard.tsx`

1. **Widen the container** -- Change `max-w-2xl` (672px) to `max-w-3xl` (768px) so the 750px-wide form fits without horizontal compression that can cause vertical overflow.

2. **Set explicit iframe height** -- Instead of relying on `height: 100%`, give the iframe a fixed pixel height of at least `800px` (above the 732px data-height plus margins/padding). The GHL script sets `display: none` initially and then reveals it, but the iframe needs an explicit height to avoid scroll.

3. **Keep container overflow hidden** -- The existing `overflow: hidden` and `minHeight: 800px` stay as a safety net.

## Technical Detail

- Container: change `max-w-2xl` to `max-w-3xl`, keep `style={{ minHeight: "800px", overflow: "hidden" }}`
- Iframe: change `height: "100%"` to `height: "800px"` in the inline style, and add `overflow: "hidden"` to the iframe style as well
- This ensures both the container and the iframe element itself are large enough that no scrollbar appears

