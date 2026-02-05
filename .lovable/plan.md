

## Add Taglines and Positioning Lines to Pricing Tiers

**Goal:** Update the pricing section with bold taglines and smaller gray positioning lines below each tier name.

---

### Updated Tier Data

| Tier | Tagline (Bold) | Positioning (Small, Gray) |
|------|----------------|---------------------------|
| Locus Core | The Operating System | Self-install. Full control. |
| Locus Ops | **Full Operational Deployment** | Professionally installed. Live in 2-3 weeks. |
| Locus Command | Enterprise + Fractional COO | Multi-location. Full optimization. |

---

### Changes to `src/components/home/PricingSection.tsx`

**1. Update tiers array** - Add `tagline` and `positioning` fields to each tier object

**2. Update card header JSX** - Render the new fields:
- Tier name (existing bold style)
- Tagline (bold text)
- Positioning line (smaller, gray text using `text-muted-foreground`)

```text
Card Header Structure:
┌─────────────────────────────────────────────┐
│  Locus Ops                                  │  ← name
│  Full Operational Deployment                │  ← tagline (bold)
│  Professionally installed. Live in 2-3 weeks│  ← positioning (small, gray)
└─────────────────────────────────────────────┘
```

---

### File to Edit

| File | Action |
|------|--------|
| `src/components/home/PricingSection.tsx` | Add tagline/positioning data + update card rendering |

