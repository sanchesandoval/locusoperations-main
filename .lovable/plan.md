
## Add Mobile Hamburger Menu

**Goal:** Replace the congested inline navigation with a clean hamburger dropdown menu on mobile screens (below 640px), while keeping inline nav for tablet and desktop.

---

### Approach

Use the existing `Sheet` component from shadcn/ui with a hamburger menu icon (from Lucide) that appears only on mobile.

---

### Changes to `src/components/layout/Header.tsx`

| Element | Mobile (<640px) | Tablet/Desktop (640px+) |
|---------|-----------------|-------------------------|
| Nav links | Hidden (in dropdown) | Visible inline |
| Hamburger icon | Visible | Hidden |
| Sheet menu | Opens on click | Not used |

---

### Implementation Details

1. **Import** `Sheet` components and `Menu` icon from Lucide
2. **Add state** to track menu open/close
3. **Add hamburger button** visible only on mobile (`sm:hidden`)
4. **Show inline nav** only on tablet+ (`hidden sm:flex`)
5. **Sheet content** contains nav links, closes on link click

---

### Updated Structure

```text
Header
├── Logo
├── Hamburger Button (mobile only)
├── Inline Nav Links (tablet+ only)
├── Book a Call CTA
└── Sheet/Drawer (mobile menu)
    ├── Process
    ├── Results
    └── Get Started
```

---

### Visual Result

| Screen | Navigation |
|--------|------------|
| Mobile | Hamburger icon → opens slide-out menu |
| Tablet | Inline links (Process, Results, Get Started) |
| Desktop | Inline links with larger text/spacing |

---

### File to Edit

| File | Action |
|------|--------|
| `src/components/layout/Header.tsx` | Add hamburger menu for mobile |
