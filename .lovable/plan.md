
## Hide Client Portal (Temporarily)

**Goal:** Make the client portal inaccessible while preserving the code for future use.

---

### Changes Required

| File | Action |
|------|--------|
| `src/components/layout/Header.tsx` | Remove "Client Login" nav link |
| `src/App.tsx` | Comment out the `/client-login` route |
| `src/pages/ClientLogin.tsx` | **No changes** - keep file as-is |

---

### 1. Remove Nav Link from Header

**File:** `src/components/layout/Header.tsx`

Delete this block from the navigation:
```tsx
<Link 
  to="/client-login" 
  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
>
  Client Login
</Link>
```

---

### 2. Comment Out Route

**File:** `src/App.tsx`

Comment out the route and import:
```tsx
// import ClientLogin from "./pages/ClientLogin";

// In Routes:
// <Route path="/client-login" element={<ClientLogin />} />
```

---

### Result

- `/client-login` URL will show your 404 page
- No visible link in navigation
- Code preserved for future activation
