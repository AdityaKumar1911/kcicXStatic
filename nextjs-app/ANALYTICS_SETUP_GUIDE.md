# Analytics & Monitoring Setup Guide

This guide covers setting up Vercel Analytics, Speed Insights, and Sentry error tracking for the KCIC Next.js application.

## Table of Contents
1. [Vercel Analytics](#vercel-analytics)
2. [Speed Insights](#speed-insights)
3. [Sentry Error Tracking](#sentry-error-tracking)
4. [Environment Variables](#environment-variables)

---

## Vercel Analytics

### What It Tracks
- **Page Views**: Track which pages users visit
- **Unique Visitors**: Count distinct users
- **Top Pages**: Most visited pages
- **Referrers**: Traffic sources
- **Countries**: Geographic distribution
- **Devices**: Desktop vs mobile vs tablet

### Setup (Automatic on Vercel)
1. Deploy to Vercel - Analytics is auto-enabled
2. Go to your Vercel dashboard
3. Select your project
4. Click "Analytics" tab
5. Enable Analytics if not already enabled

### Custom Event Tracking
```tsx
import { trackEvent } from "@/components/analytics/VercelAnalytics";

// Track button clicks
<button onClick={() => trackEvent("apply_button_click", { program: "Engineering" })}>
  Apply Now
</button>

// Track form submissions
trackEvent("form_submit", { form_type: "contact", success: true });
```

---

## Speed Insights

### Core Web Vitals Monitored
| Metric | Description | Good Score |
|--------|-------------|------------|
| **LCP** | Largest Contentful Paint | < 2.5s |
| **FID** | First Input Delay | < 100ms |
| **CLS** | Cumulative Layout Shift | < 0.1 |
| **TTFB** | Time to First Byte | < 800ms |
| **INP** | Interaction to Next Paint | < 200ms |

### Viewing Speed Insights
1. Go to Vercel Dashboard → Your Project
2. Click "Speed Insights" tab
3. View real-user performance data
4. Filter by page, device, or country

---

## Sentry Error Tracking

### Setup Steps

#### 1. Create Sentry Account
1. Go to [sentry.io](https://sentry.io)
2. Create account or sign in
3. Create new project → Select "Next.js"
4. Copy your DSN

#### 2. Configure Environment Variables
Add to Vercel Dashboard (Settings → Environment Variables):

```env
NEXT_PUBLIC_SENTRY_DSN=https://xxx@xxx.ingest.sentry.io/xxx
SENTRY_ORG=your-organization
SENTRY_PROJECT=kcic-nextjs
SENTRY_AUTH_TOKEN=sntrys_xxx
```

#### 3. Get Auth Token
1. Go to Sentry → Settings → Auth Tokens
2. Create new token with these scopes:
   - `project:read`
   - `project:releases`
   - `org:read`

### Features Enabled
- **Error Tracking**: Automatic capture of unhandled errors
- **Session Replay**: Record user sessions on errors
- **Performance Monitoring**: Track slow transactions
- **Release Tracking**: Associate errors with deployments

### Manual Error Capture
```tsx
import * as Sentry from "@sentry/nextjs";

// Capture exception
try {
  await riskyOperation();
} catch (error) {
  Sentry.captureException(error);
}

// Capture message
Sentry.captureMessage("User completed onboarding");

// Add context
Sentry.setUser({ id: userId, email: userEmail });
Sentry.setTag("feature", "applications");
```

---

## Environment Variables

### Required for Production

| Variable | Description | Where to Get |
|----------|-------------|--------------|
| `NEXT_PUBLIC_SENTRY_DSN` | Sentry project DSN | Sentry Dashboard |
| `SENTRY_ORG` | Sentry organization slug | Sentry Settings |
| `SENTRY_PROJECT` | Sentry project slug | Sentry Settings |
| `SENTRY_AUTH_TOKEN` | Sentry auth token | Sentry Auth Tokens |

### Adding to Vercel
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add each variable for Production environment

---

## Monitoring Dashboard

### Recommended Alerts

#### Sentry Alerts
- Error spike (>10 errors in 5 minutes)
- New error type detected
- Performance regression (LCP > 4s)

#### Vercel Alerts
- Deployment failed
- Build time exceeded
- Function timeout

### Weekly Review Checklist
- [ ] Check error trends in Sentry
- [ ] Review Core Web Vitals in Speed Insights
- [ ] Analyze top pages in Analytics
- [ ] Check for new error patterns
- [ ] Review performance by device type
