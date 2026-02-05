

## Update GHL Popup Form Embed Code

**Goal:** Update the GoHighLevel popup form iframe in `index.html` with the new configuration.

---

### Changes to `index.html`

| Attribute | Current Value | New Value |
|-----------|---------------|-----------|
| `style` (border-radius) | `4px` | `20px` |
| `data-deactivation-type` | `leadCollected` | `neverDeactivate` |
| `data-height` | `551` | `485` |

---

### Technical Details

**File:** `index.html` (lines 38-54)

The iframe will be updated with:
- Rounder corners (20px border radius)
- Popup will never deactivate (previously closed after lead collected)
- Slightly shorter form height (485px instead of 551px)

---

### No Other Changes Needed

The script tag `https://link.msgsndr.com/js/form_embed.js` remains the same.

