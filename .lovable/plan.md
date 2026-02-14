

## Summary

Replace all Calendly booking widgets and scripts with the new GoHighLevel (GHL) booking widget across the site.

## Files to Change

### 1. `src/components/home/CalendlySection.tsx`
- Rename to conceptually be a "BookingSection" (or just update internals)
- Remove Calendly script loading from `useEffect`
- Replace the Calendly `div` with the GHL iframe:
  ```html
  <iframe
    src="https://api.leadconnectorhq.com/widget/booking/TqgqhfmP8rOA9BTwevpK"
    style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "700px" }}
    scrolling="no"
    id="msgsndr-calendar"
  />
  ```
- Load the GHL embed script (`https://link.msgsndr.com/js/embed.js`) instead of Calendly's script

### 2. `src/pages/BookCall.tsx`
- Remove Calendly script loading from `useEffect`
- Replace the Calendly `div` with the same GHL iframe
- Load the GHL embed script instead

### 3. Cleanup
- Remove the Calendly logo asset if present (`src/assets/logos/calendly.png`) -- this is just a logo used elsewhere, will keep unless you want it removed
- No other files reference Calendly widgets

## Technical Details

Both components currently:
1. Load `https://assets.calendly.com/assets/external/widget.js` via a script tag in `useEffect`
2. Render a `<div className="calendly-inline-widget" data-url="...">` element

They will be updated to:
1. Load `https://link.msgsndr.com/js/embed.js` via a script tag in `useEffect`
2. Render the GHL `<iframe>` with the booking URL

The wrapper styling (`card-premium`, max-width, etc.) will be preserved.

