

## Summary

The "How It Works" footer link doesn't work because the SolutionSection ("How Locus Works") has no `id` attribute for the browser to scroll to. Two small fixes:

## Changes

### 1. Add `id` to SolutionSection (`src/components/home/SolutionSection.tsx`)

Add `id="how-it-works"` to the `<section>` element:

```
<section id="how-it-works" className="section-spacing relative overflow-hidden">
```

### 2. Update footer link (`src/lib/config.tsx`)

Change the href from `/#our-services` to `/#how-it-works`:

```
{ href: "/#how-it-works", label: "How It Works" },
```

This ensures the footer link on every page scrolls to the "How Locus Works" solution section, not the services section.

