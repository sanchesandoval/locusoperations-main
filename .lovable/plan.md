

# Add HighLevel Logo and Order by Industry

## Summary

Add the HighLevel logo to the marquee and reorder all 20 logos by industry grouping for a logical flow.

## Changes

### 1. Copy HighLevel logo

Copy `user-uploads://highlevel-logo.png` to `src/assets/logos/highlevel.png`

### 2. Edit `src/components/home/HeroSection.tsx`

Add HighLevel import and reorder the `integrationLogos` array by industry:

**Final ordered list (20 logos):**

| Group | Logos |
|-------|-------|
| CRM / Sales | Salesforce, Pipedrive, Wealthbox, Lawmatics, HighLevel |
| Scheduling / Booking | Calendly, Jane, Boulevard, Vagaro |
| Practice Management | AestheticsPro, SimplePractice, Clio, Jobber, ServiceTitan |
| Messaging | Slack, WhatsApp, Twilio |
| Automation | Zapier, n8n, Make |

### Scaling

All logos keep the scales from the approved plan. HighLevel gets scale 1.3 (it has a wide wordmark so standard height works). SimplePractice stays at 1.8 as previously approved.

No other files change. Marquee component and hover styling remain the same.

