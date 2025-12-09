# SEO, Sitemap & Robots.txt Configuration Guide

## Overview

This Next.js application includes automated SEO features:
- **Dynamic Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: SEO-optimized at `/robots.txt`
- **Search Engine Verification**: Google & Bing support

## Sitemap Configuration

### Automatic Generation
The sitemap is dynamically generated and includes:
- **Static Pages**: Home, Programs, Universities, Campuses, Tutors, Apply, Contact, etc.
- **Program Pages**: All programs from `/programs/[slug]`
- **Specialty Programs**: Motorsport, AI, Psychology, Aerospace, etc.
- **University Pages**: All partner universities
- **Campus Pages**: Mumbai, Bangalore, Delhi NCR
- **Tutor Pages**: All faculty members

### Access Points
- **Sitemap URL**: `https://cornerstone.edu.in/sitemap.xml`
- **Robots.txt URL**: `https://cornerstone.edu.in/robots.txt`

### Priority Levels
| Page Type | Priority | Change Frequency |
|-----------|----------|------------------|
| Homepage | 1.0 | Daily |
| Programs List | 0.9 | Weekly |
| Apply Page | 0.9 | Monthly |
| Individual Programs | 0.8 | Weekly |
| Universities | 0.7 | Monthly |
| Campuses | 0.7 | Monthly |
| Tutors | 0.6 | Monthly |
| Manifesto | 0.5 | Yearly |

## Robots.txt Configuration

### Allowed Paths
- All public pages (`/`)
- Programs, Universities, Campuses, Tutors
- Contact and Apply pages

### Blocked Paths
- `/admin/` - Admin panel
- `/api/` - API routes
- `/_next/` - Next.js internals
- `/private/` - Private resources

## Search Engine Verification

### Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://cornerstone.edu.in`
3. Choose "HTML tag" verification method
4. Copy the verification code (content value)
5. Add to Vercel environment variables:
   ```
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_code_here
   ```

### Bing Webmaster Tools
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Add site: `https://cornerstone.edu.in`
3. Copy verification code
4. Add to environment variables:
   ```
   NEXT_PUBLIC_BING_SITE_VERIFICATION=your_code_here
   ```

## Submit Sitemap to Search Engines

### Google
1. Open Google Search Console
2. Navigate to "Sitemaps" in the left menu
3. Enter: `sitemap.xml`
4. Click "Submit"

### Bing
1. Open Bing Webmaster Tools
2. Go to "Sitemaps"
3. Submit: `https://cornerstone.edu.in/sitemap.xml`

## Environment Variables

Add these to your Vercel project:

```env
NEXT_PUBLIC_SITE_URL=https://cornerstone.edu.in
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_google_code
NEXT_PUBLIC_BING_SITE_VERIFICATION=your_bing_code
```

## Testing

### Verify Sitemap
```bash
curl https://cornerstone.edu.in/sitemap.xml
```

### Verify Robots.txt
```bash
curl https://cornerstone.edu.in/robots.txt
```

### Google Rich Results Test
Visit: https://search.google.com/test/rich-results

## SEO Best Practices Implemented

1. **Canonical URLs**: Prevents duplicate content issues
2. **Open Graph Tags**: Optimized social sharing
3. **Twitter Cards**: Enhanced Twitter previews
4. **Structured Metadata**: Title templates, descriptions
5. **Mobile-First**: Responsive design signals
6. **Performance**: Vercel Edge Network delivery
