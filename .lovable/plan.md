

## Update Calendly Widget URL

**Goal:** Change the Calendly booking link to the new 30-minute meeting URL with February 2026 as the default month.

---

### Files to Update

| File | Current URL | New URL |
|------|-------------|---------|
| `src/components/home/CalendlySection.tsx` | `https://calendly.com/locusops?hide_landing_page_details=1` | `https://calendly.com/locusops/30min/?month=2026-02&hide_landing_page_details=1` |
| `src/pages/BookCall.tsx` | `https://calendly.com/locusops?hide_landing_page_details=1` | `https://calendly.com/locusops/30min/?month=2026-02&hide_landing_page_details=1` |

---

### Changes

**Line 23 in CalendlySection.tsx:**
```tsx
// Before
data-url="https://calendly.com/locusops?hide_landing_page_details=1"

// After
data-url="https://calendly.com/locusops/30min/?month=2026-02&hide_landing_page_details=1"
```

**Line 57 in BookCall.tsx:**
```tsx
// Before
data-url="https://calendly.com/locusops?hide_landing_page_details=1"

// After
data-url="https://calendly.com/locusops/30min/?month=2026-02&hide_landing_page_details=1"
```

---

### Result

Both Calendly widgets will now link directly to the 30-minute meeting type and default to showing February 2026.

