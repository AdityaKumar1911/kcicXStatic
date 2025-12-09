# Analytics Setup Guide

This guide explains how to set up Google Analytics and Facebook Pixel for your KCIC application.

## Google Analytics Setup

### Step 1: Create a Google Analytics Account
1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Enter your account name (e.g., "KCIC")
5. Create a property for your website

### Step 2: Get Your Measurement ID
1. In Google Analytics, go to Admin → Data Streams
2. Click on your web stream (or create one)
3. Copy the **Measurement ID** (starts with `G-`)

### Step 3: Add to Environment Variables
Add to your `.env.local` file:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-MP4H75L0K9
```


### Step 4: Track Custom Events
Use the helper functions in your components:
```tsx
import { trackEvent } from '@/components/analytics/GoogleAnalytics';

// Track a button click
trackEvent('click', 'Button', 'Apply Now');

// Track form submission
trackEvent('submit', 'Form', 'Contact Form');
```

---

## Facebook Pixel Setup

### Step 1: Create a Facebook Pixel
1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Click "Connect Data Sources" → "Web"
3. Select "Facebook Pixel" and click "Connect"
4. Name your pixel and enter your website URL
5. Copy the **Pixel ID** (15-16 digit number)

### Step 2: Add to Environment Variables
Add to your `.env.local` file:
```
NEXT_PUBLIC_FB_PIXEL_ID=XXXXXXXXXXXXXXX
```

### Step 3: Track Custom Events
Use the helper functions in your components:
```tsx
import { fbEvent } from '@/components/analytics/FacebookPixel';

// Track a lead
fbEvent.lead({ content_name: 'Program Inquiry' });

// Track registration
fbEvent.completeRegistration({ content_name: 'Application' });

// Track contact
fbEvent.contact();

// Custom event
fbEvent.custom('ViewProgram', { program: 'Aerospace Engineering' });
```

---

## Available Facebook Events

| Event | Description | Usage |
|-------|-------------|-------|
| `pageView()` | Track page views | Automatic on navigation |
| `lead()` | User shows interest | Newsletter signup, inquiry |
| `completeRegistration()` | User registers | Application submitted |
| `contact()` | User contacts you | Contact form submitted |
| `custom()` | Custom events | Any custom tracking |

---

## Testing Your Setup

### Google Analytics
1. Open your website
2. Go to Google Analytics → Reports → Realtime
3. You should see your visit appear

### Facebook Pixel
1. Install [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper) Chrome extension
2. Visit your website
3. The extension icon should show a green checkmark

---

## Production Checklist

- [ ] Google Analytics Measurement ID added to `.env.local`
- [ ] Facebook Pixel ID added to `.env.local`
- [ ] Test tracking in development
- [ ] Verify events in Google Analytics Realtime
- [ ] Verify pixel fires using Facebook Pixel Helper
- [ ] Add privacy policy mentioning analytics usage
