

# Remove Scrollbar from GHL Form (ChatGPT Approach)

## Overview
Replace the current iframe implementation with a wrapper-based approach that uses explicit height, `scrolling="no"`, and CSS overrides to fully eliminate the scrollbar.

## Changes

### 1. Update `src/pages/Scorecard.tsx`
- Remove the current `card-premium` div with inline styles wrapping the iframe
- Replace with a `<div className="ghl-form-wrap">` containing the new iframe markup
- Key iframe changes:
  - Add `scrolling="no"` attribute
  - Add `className="ghl-form-iframe"`
  - Bump `data-height` from `732` to `820`
  - Remove inline `style` with `display:none` and `height:100%` (CSS will handle it)
  - Keep all existing `data-*` attributes
- The GHL embed script stays loaded via `useEffect` (no inline `<script>` tag in JSX)

### 2. Add CSS to `src/index.css`
Add the following rules in the `@layer components` section:

- `.ghl-form-wrap` -- full width, max-width 900px, centered, overflow hidden, border-radius 20px
- `.ghl-form-iframe` -- display block !important, width/height 100%/820px !important, border 0, overflow hidden, scrollbar hiding for Firefox/Webkit/Edge

## Technical Details

**Scorecard.tsx** will look like:
```
<div className="ghl-form-wrap">
  <iframe
    src="https://api.leadconnectorhq.com/widget/form/p61qThW6q0uTt7jSreIK"
    id="inline-p61qThW6q0uTt7jSreIK"
    className="ghl-form-iframe"
    title="Locus LP Lead Magnet Assessment Form"
    scrolling="no"
    style={{ border: "none", borderRadius: "20px" }}
    data-layout="{'id':'INLINE'}"
    data-trigger-type="alwaysShow"
    data-activation-type="alwaysActivated"
    data-deactivation-type="leadCollected"
    data-form-name="Locus LP Lead Magnet Assessment Form"
    data-height="820"
    data-layout-iframe-id="inline-p61qThW6q0uTt7jSreIK"
    data-form-id="p61qThW6q0uTt7jSreIK"
  />
</div>
```

**CSS additions** in `src/index.css` (`@layer components`):
```css
.ghl-form-wrap {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 20px;
}

.ghl-form-iframe {
  display: block !important;
  width: 100% !important;
  height: 820px !important;
  border: 0 !important;
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.ghl-form-iframe::-webkit-scrollbar {
  width: 0;
  height: 0;
}
```
