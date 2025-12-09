# Vercel Deployment Guide for KCIC Next.js App

## Prerequisites

- GitHub account with repository access
- Vercel account (free tier available)
- Supabase project with credentials

---

## Step 1: Connect GitHub Repository

### 1.1 Sign Up/Login to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Login"
3. Choose "Continue with GitHub"

### 1.2 Import Project
1. Click "Add New..." → "Project"
2. Select your GitHub repository
3. If not visible, click "Adjust GitHub App Permissions"

### 1.3 Configure Project
- **Framework Preset**: Next.js (auto-detected)
- **Root Directory**: `nextjs-app` (IMPORTANT!)
- **Build Command**: `npm run build`
- **Install Command**: `npm install`

---

## Step 2: Environment Variables

In Vercel Dashboard → Project → Settings → Environment Variables:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key |
| `NEXT_PUBLIC_SITE_URL` | `https://cornerstone.edu.in` |

---

## Step 3: Custom Domain Setup

### 3.1 Add BOTH Domains in Vercel
1. Project Settings → Domains
2. Add `cornerstone.edu.in` → Click Add
3. Add `www.cornerstone.edu.in` → Click Add (**CRITICAL!**)
4. Configure www to **Redirect to cornerstone.edu.in**

### 3.2 DNS Configuration
At your domain registrar, add:

| Type | Name | Value |
|------|------|-------|
| A | @ | `76.76.21.21` |
| CNAME | www | `cname.vercel-dns.com` |

### 3.3 Verify DNS
```bash
dig cornerstone.edu.in +short
# Should return: 76.76.21.21

dig www.cornerstone.edu.in +short
# Should return: cname.vercel-dns.com
```

---

## Step 4: WWW Redirect Fix

If www.cornerstone.edu.in is not working:

1. **Check Vercel Domains**: Ensure `www.cornerstone.edu.in` is added
2. **Configure Redirect**: Set www to redirect to apex domain
3. **Verify CNAME**: Check DNS has www → cname.vercel-dns.com
4. **Wait for DNS**: Propagation takes 1-48 hours
5. **Clear Cache**: Test in incognito browser

📖 See **WWW_REDIRECT_FIX.md** for detailed troubleshooting.

---

## Step 5: SEO & Sitemap

After deployment, verify:
- Sitemap: `https://cornerstone.edu.in/sitemap.xml`
- Robots: `https://cornerstone.edu.in/robots.txt`

Submit to:
- Google Search Console: https://search.google.com/search-console
- Bing Webmaster Tools: https://www.bing.com/webmasters

---

## Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Supabase data fetching works
- [ ] Contact form submits
- [ ] Images load properly
- [ ] Mobile responsive
- [ ] `cornerstone.edu.in` accessible
- [ ] `www.cornerstone.edu.in` redirects to apex
- [ ] SSL certificate active (green padlock)
- [ ] Sitemap.xml accessible
- [ ] Submitted to search engines

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| WWW not redirecting | Add www domain in Vercel, configure redirect |
| Build failure | Run `npm run build` locally first |
| Supabase error | Check environment variables |
| SSL not working | Wait for DNS propagation |

## Support
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Supabase Docs: [supabase.com/docs](https://supabase.com/docs)
