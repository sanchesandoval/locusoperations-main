
# Plan: Adjust Individual Logo Sizes in Marquee

## Overview
Add individual scale factors to specific logos so they appear more visually balanced with the others.

## Implementation

### Modify `src/components/home/HeroSection.tsx`

**1. Add a `scale` property to each logo object:**

The logos needing enlargement:
- SimplePractice
- Mangomint  
- Boulevard
- Vagaro
- AestheticsPro
- WhatsApp
- Slack

```tsx
const integrationLogos = [{
  name: "AestheticsPro",
  src: aestheticsproLogo,
  scale: 1.3  // 30% larger
}, {
  name: "Vagaro",
  src: vagaroLogo,
  scale: 1.3
}, {
  // ... other logos with scale: 1 (default) or higher values
}];
```

**2. Update the image rendering to use dynamic height:**

Replace the static `h-6 sm:h-7 md:h-8 lg:h-8` class with inline styles that multiply the base height by each logo's scale factor:

```tsx
<img 
  src={logo.src} 
  alt={logo.name} 
  className="w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
  style={{ height: `${(logo.scale || 1) * 32}px` }}
/>
```

## Files Modified
| File | Change |
|------|--------|
| `src/components/home/HeroSection.tsx` | Add scale property to logos, apply dynamic sizing |

## Expected Result
- SimplePractice, Mangomint, Boulevard, Vagaro, AestheticsPro, WhatsApp, and Slack logos will appear ~30% larger
- Other logos remain at default size
- All logos will appear more visually balanced in the marquee
