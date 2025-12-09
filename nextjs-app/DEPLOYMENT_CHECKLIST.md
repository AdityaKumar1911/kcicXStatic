# KCIC Next.js Vercel Deployment - Quick Checklist

## Your Supabase Credentials

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://nrowebneeydlishwmdpf.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Get from [Supabase Dashboard → Settings → API](https://supabase.com/dashboard/project/nrowebneeydlishwmdpf/settings/api) |
| `SUPABASE_SERVICE_ROLE_KEY` | Get from [Supabase Dashboard → Settings → API](https://supabase.com/dashboard/project/nrowebneeydlishwmdpf/settings/api) |

---

## Step-by-Step Deployment

### 1. Go to Vercel
👉 [vercel.com/new](https://vercel.com/new)

### 2. Import Repository
- Click "Import Git Repository"
- Select your GitHub repository
- Grant access if needed

### 3. Configure Project Settings
| Setting | Value |
|---------|-------|
| **Framework Preset** | Next.js |
| **Root Directory** | `nextjs-app` ⚠️ IMPORTANT! |
| **Build Command** | `npm run build` |
| **Install Command** | `npm install` |

### 4. Add Environment Variables
Click "Environment Variables" and add:

```
NEXT_PUBLIC_SUPABASE_URL = https://nrowebneeydlishwmdpf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = [paste from Supabase]
SUPABASE_SERVICE_ROLE_KEY = [paste from Supabase]
```

### 5. Deploy
Click **"Deploy"** button and wait 2-5 minutes.

---

## Post-Deployment Verification

After deployment, test these URLs:

- [ ] Homepage: `https://your-app.vercel.app/`
- [ ] Programs: `https://your-app.vercel.app/programs`
- [ ] Universities: `https://your-app.vercel.app/universities`
- [ ] Contact: `https://your-app.vercel.app/contact`
- [ ] Admin Login: `https://your-app.vercel.app/admin/login`
- [ ] API Health: `https://your-app.vercel.app/api/health`

---

## Custom Domain Setup

After initial deployment, configure your custom domains:

### Add Domains in Vercel
1. Go to **Settings** → **Domains**
2. Add `cornerstone.edu.in`
3. Add `www.cornerstone.edu.in` (IMPORTANT!)


### DNS Configuration
Add these records at your domain registrar:

| Type | Name | Value |
|------|------|-------|
| A | @ | `76.76.21.21` |
| CNAME | www | `cname.vercel-dns.com` |

### Update Environment Variable (CRITICAL for SEO)
After adding your custom domain, update the site URL:

1. Go to **Vercel Dashboard** → **Settings** → **Environment Variables**
2. Add or update:
```
NEXT_PUBLIC_SITE_URL = https://cornerstone.edu.in
```
3. **Redeploy the application** (Deployments → Redeploy)

This ensures all SEO metadata, sitemap, and canonical URLs use the correct domain.

📖 See **CUSTOM_DOMAIN_SETUP.md** for detailed instructions.

---

## Admin CMS Login

After deployment, login at `/admin/login`:
- **Email**: admin@kcic.edu
- **Password**: admin123

⚠️ First create the admin user in Supabase Auth (see ADMIN_LOGIN_SETUP.md)

---

## Troubleshooting

### Build Failed
```bash
cd nextjs-app
npm install
npm run build
```

### Environment Variables Not Working
- Redeploy after adding variables
- Check no quotes around values
- Verify variable names are exact

### Supabase Connection Failed
- Check project is active at supabase.com
- Verify API keys are correct
- Test `/api/health` endpoint

### Custom Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check SSL certificate status in Vercel
