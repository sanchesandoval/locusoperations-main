

## Show Navigation Links on Mobile and Tablet

**Goal:** Make the navigation links (Process, Results, Get Started) visible on all screen sizes with responsive text sizing.

---

### Current State

The nav uses `hidden lg:flex` which hides it on screens smaller than 1024px (tablet and mobile).

---

### Changes to `src/components/layout/Header.tsx`

| Element | Current | New |
|---------|---------|-----|
| Nav container | `hidden lg:flex` | `flex` (always visible) |
| Nav gap | `gap-6 xl:gap-8` | `gap-2 sm:gap-4 lg:gap-6 xl:gap-8` |
| Link text size | `text-sm` | `text-[10px] sm:text-xs lg:text-sm` |

---

### Updated Code

```tsx
{/* Navigation Links */}
<nav className="flex items-center gap-2 sm:gap-4 lg:gap-6 xl:gap-8">
  <a 
    href="#how-it-works" 
    className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground hover:text-foreground transition-colors"
  >
    Process
  </a>
  <a 
    href="#testimonials" 
    className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground hover:text-foreground transition-colors"
  >
    Results
  </a>
  <a 
    href="#calendly" 
    className="text-[10px] sm:text-xs lg:text-sm text-muted-foreground hover:text-foreground transition-colors"
  >
    Get Started
  </a>
</nav>
```

---

### Responsive Breakdown

| Screen | Text Size | Gap |
|--------|-----------|-----|
| Mobile (<640px) | 10px | 8px (gap-2) |
| Tablet (640px+) | 12px (xs) | 16px (gap-4) |
| Desktop (1024px+) | 14px (sm) | 24px (gap-6) |
| Large (1280px+) | 14px (sm) | 32px (gap-8) |

---

### File to Edit

| File | Action |
|------|--------|
| `src/components/layout/Header.tsx` | Update nav visibility and text sizing |

