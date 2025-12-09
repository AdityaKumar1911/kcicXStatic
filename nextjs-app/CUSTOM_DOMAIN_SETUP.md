# Custom Domain Setup Guide

## Domain to Configure
- **Primary:** `cornerstone.edu.in`

---

## Step 1: Add Domain in Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click **Settings** → **Domains**
4. Add ALL of these domains:
   - `cornerstone.edu.in` → Click **Add**
   - `www.cornerstone.edu.in` → Click **Add** (IMPORTANT!)

**CRITICAL:** You must add BOTH the root domain AND the www subdomain!

---

## Step 2: Configure DNS Records

### For cornerstone.edu.in (at your DNS provider)

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | `76.76.21.21` | 3600 |
| CNAME | www | `cname.vercel-dns.com` | 3600 |

---

## Step 3: Configure WWW Redirect

In Vercel Dashboard → Settings → Domains:

1. Click on `www.cornerstone.edu.in`
2. Select **"Redirect to cornerstone.edu.in"**

This ensures www.cornerstone.edu.in → cornerstone.edu.in

---

## Step 4: Verify DNS Propagation

### Command Line
```bash
# Check A record for root domain
dig cornerstone.edu.in +short
# Expected: 76.76.21.21

# Check CNAME for www
dig www.cornerstone.edu.in +short
# Expected: cname.vercel-dns.com
```

### Online DNS Checkers
- [DNS Checker](https://dnschecker.org/?query=cornerstone.edu.in)
- [What's My DNS](https://whatsmydns.net/#A/cornerstone.edu.in)

---

## Step 5: Update Environment Variable

In Vercel Dashboard → Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL = https://cornerstone.edu.in
```

---

## Troubleshooting WWW Not Working

### Issue: www.cornerstone.edu.in not redirecting

**Check 1:** Is www added in Vercel?
- Go to Settings → Domains
- Ensure `www.cornerstone.edu.in` is listed
- If not, add it!

**Check 2:** Is CNAME record correct?
```bash
dig www.cornerstone.edu.in CNAME +short
```
Should return: `cname.vercel-dns.com`

**Check 3:** DNS Propagation
- DNS changes take 1-48 hours
- Check: https://dnschecker.org/?query=www.cornerstone.edu.in

**Check 4:** Clear browser cache
- Try incognito/private window
- Or clear DNS cache: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)

---

## Final Checklist

- [ ] `cornerstone.edu.in` added in Vercel
- [ ] `www.cornerstone.edu.in` added in Vercel  
- [ ] A record: @ → 76.76.21.21
- [ ] CNAME record: www → cname.vercel-dns.com
- [ ] WWW configured to redirect to apex domain
- [ ] SSL certificate issued (automatic)
- [ ] Environment variable updated
