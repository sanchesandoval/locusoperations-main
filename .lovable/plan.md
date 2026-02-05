

## Fix Scroll-to-Top on Navigation

**Goal:** Ensure clicking "Watch 5-Min System Demo" or "Or watch the 5-minute system walkthrough" links navigates to `/system-demo` and starts at the top of the page.

**Problem:** React Router doesn't automatically scroll to top when navigating between routes, so users land in the middle/bottom of the new page.

---

### Solution: Add ScrollToTop Component

**1. Create new file: `src/components/ScrollToTop.tsx`**

```tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
```

**2. Update `src/App.tsx`**

Add the ScrollToTop component inside the BrowserRouter so it triggers on every route change:

```tsx
import ScrollToTop from "./components/ScrollToTop";

// Inside BrowserRouter, before Routes:
<BrowserRouter>
  <ScrollToTop />
  <Routes>
    ...
  </Routes>
</BrowserRouter>
```

---

### How It Works

- The component listens for `pathname` changes via `useLocation()`
- On every route change, it calls `window.scrollTo(0, 0)` to scroll to top
- This applies globally to all navigation, not just the system demo links

---

### Files to Create/Edit

| File | Action |
|------|--------|
| `src/components/ScrollToTop.tsx` | Create new |
| `src/App.tsx` | Add import and component |

