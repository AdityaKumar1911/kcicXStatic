# Fix: www.cornerstone.edu.in Not Redirecting

## Quick Fix Steps

### Step 1: Add WWW Domain in Vercel

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings** → **Domains**
4. Check if `www.cornerstone.edu.in` is listed
5. If NOT listed, click **Add** and enter `www.cornerstone.edu.in`
6. Configure it to **Redirect to cornerstone.edu.in**

### Step 2: Verify DNS Records

At your DNS provider, ensure you have:

| Type | Name | Value |
|------|------|-------|
| A | @ | `76.76.21.21` |
| CNAME | www | `cname.vercel-dns.com` |

### Step 3: Check DNS Propagation

Visit: https://dnschecker.org/?query=www.cornerstone.edu.in&type=CNAME

- If showing `cname.vercel-dns.com` globally → DNS is correct
- If not showing → Wait for propagation (up to 48 hours)

---

## Common Issues

### Issue 1: WWW Domain Not Added
**Symptom:** www.cornerstone.edu.in shows "DNS_PROBE_FINISHED_NXDOMAIN"
**Fix:** Add `www.cornerstone.edu.in` as a separate domain in Vercel

### Issue 2: Wrong CNAME Value
**Symptom:** www.cornerstone.edu.in shows wrong site or error
**Fix:** Update CNAME record to point to `cname.vercel-dns.com`

### Issue 3: DNS Not Propagated
**Symptom:** Works in some locations but not others
**Fix:** Wait 24-48 hours for full propagation

---

## Troubleshooting Commands

```bash
# Check A record
dig cornerstone.edu.in +short
# Expected: 76.76.21.21

# Check CNAME record
dig www.cornerstone.edu.in CNAME +short
# Expected: cname.vercel-dns.com

# Check both
nslookup cornerstone.edu.in
nslookup www.cornerstone.edu.in
```

---

## Vercel Domain Status

After setup, your Vercel Domains should show:

```
cornerstone.edu.in          ✓ Valid    [Primary]
www.cornerstone.edu.in      ✓ Valid    [Redirects to cornerstone.edu.in]
```

---

## After Fixing

1. Redeploy the project in Vercel
2. Wait 2-5 minutes
3. Test: https://www.cornerstone.edu.in should redirect to https://cornerstone.edu.in
