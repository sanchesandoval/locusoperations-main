

# Move Headline Down and Add Mobile Responsive CSS

## Problem
The screenshot shows the headline is clipped behind the header/navbar -- it needs more top padding so it sits fully below the nav. Additionally, ChatGPT's responsive and display-safety CSS should be added.

## Changes

### 1. `src/pages/Scorecard.tsx`
- Increase `<main>` top padding from `pt-12` back to `pt-24` so the headline clears the fixed header and has breathing room.

### 2. `src/index.css`
- Add a mobile media query for the iframe height (920px on screens <= 768px).
- The `display: block !important` rule is already present in the existing CSS -- no change needed there.

```css
@media (max-width: 768px) {
  .ghl-form-iframe {
    height: 920px !important;
  }
}
```

This media query will be added right after the existing `.ghl-form-iframe::-webkit-scrollbar` block inside `@layer components`.
