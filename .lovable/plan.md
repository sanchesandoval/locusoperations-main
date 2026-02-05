

## Update Process Section

**Goal:** Simplify the "Process" section with cleaner, more direct copy — Elon simple.

**File:** `src/components/home/HowItWorksSection.tsx`

### Content Changes

**Header:**
- Headline: "The Locus 'Build & Release' Protocol" → "How We Get You Live"
- Subhead: "A three-phase technical integration..." → "Three-phase implementation. Most clinics are live in 2-3 weeks."

**Cards (simplified):**

| Step | Title | Description |
|------|-------|-------------|
| 01 | Systems Mapping | We audit your current workflow and document where leads are falling through. This becomes your blueprint. |
| 02 | Infrastructure Deployment | We build and launch your AI front desk, automated follow-up sequences, and booking pipelines in your system. |
| 03 | Performance Optimization | We track KPIs, refine AI prompts, and tune workflows to maximize cost-per-booked-appointment. |

### Technical Changes

1. **Update `steps` array** (lines 4-23):
   - Remove `tag` field from each item
   - Update descriptions with new copy
   - Change "Performance Intelligence" to "Performance Optimization"

2. **Update header text** (lines 34-41):
   - Change headline to "How We Get You Live"
   - Change subhead to new copy

3. **Update card rendering** (lines 50-52):
   - Remove the `({item.tag})` display
   - Show just the title: `{item.title}`

