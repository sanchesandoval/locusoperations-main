

## Summary

Update the GHL booking iframe and script in both booking components to use the new embed code you provided, which should fix the form not displaying fully.

## Changes

### 1. `src/components/home/CalendlySection.tsx`
- Change iframe `id` from `"msgsndr-calendar"` to `"TqgqhfmP8rOA9BTwevpK_1771082847803"`
- Change script `src` from `https://link.msgsndr.com/js/embed.js` to `https://link.msgsndr.com/js/form_embed.js`
- Increase `minHeight` from `700px` to `1000px` to ensure the full form (with all fields and calendar) is visible

### 2. `src/pages/BookCall.tsx`
- Same three changes: new iframe `id`, new script `src`, increased `minHeight`

## Technical Details

The key difference in your new embed code:
- Script changed from `embed.js` to `form_embed.js` -- this is likely why the form wasn't rendering fully
- New unique iframe `id` for proper widget initialization
- The increased height accommodates the full form fields (name, email, phone, business type, revenue) plus the calendar picker shown in your screenshot

