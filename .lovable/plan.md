

# Show Full GHL Form Without Scrolling

## Change
Update `src/pages/Scorecard.tsx` to remove the fixed `500px` height and instead use a much taller height so the entire form renders inline without any internal scrolling.

- Change iframe height from `500px` to `800px` (can be adjusted once you see how tall the actual form is)
- Remove `overflow-hidden` from the card container so nothing gets clipped

## Colors for GHL Form Styling
Use these in your GHL form builder to match the site:

- **Page/Form background**: `#121212` (or card bg `#1a1a1a`)
- **Text color**: `#f2f2f2`
- **Muted/label text**: `#999999`
- **Primary/button green**: `#45A88C`
- **Input field background**: `#2e2e2e`
- **Border color**: `#2e2e2e`
- **Button text**: `#ffffff`

