# Responsive Foundations & Best Practices

## Breakpoints (Mobile-First)

All breakpoints use min-width approach:
- **xs**: 360px (small phones)
- **sm**: 480px (phones)
- **md**: 768px (tablets)
- **lg**: 1024px (small laptops)
- **xl**: 1280px (desktops)
- **2xl**: 1440px (large desktops)
- **3xl**: 1920px (extra large screens)

## Typography

### Base Settings
- Base font size: 16px (1rem)
- Line height: 1.6 for body text, 1.4-1.6 for headings
- Max line length: 75 characters for optimal readability

### Responsive Headings (using clamp)
```css
h1: clamp(2rem, 4vw + 1rem, 3rem)        /* 32px - 48px */
h2: clamp(1.75rem, 3vw + 0.75rem, 2.25rem) /* 28px - 36px */
h3: clamp(1.5rem, 2.5vw + 0.5rem, 1.875rem) /* 24px - 30px */
h4: clamp(1.25rem, 2vw + 0.5rem, 1.5rem)    /* 20px - 24px */
h5: clamp(1.125rem, 1.5vw + 0.5rem, 1.25rem) /* 18px - 20px */
h6: clamp(1rem, 1vw + 0.5rem, 1.125rem)      /* 16px - 18px */
```

## Spacing Scale (4/8px base)

Standard spacing values:
- 0.5: 2px
- 1: 4px
- 1.5: 6px
- 2: 8px
- 2.5: 10px
- 3: 12px
- 4: 16px
- 5: 20px
- 6: 24px
- 8: 32px
- 10: 40px
- 12: 48px

## Touch Targets

### Minimum Sizes
- All interactive elements: **≥44×44px** (WCAG 2.2 AA)
- Spacing between targets: **≥8px**

### Implementation
```tsx
// Buttons
min-h-[44px] min-w-[44px]

// Links
min-h-[44px] flex items-center

// Form inputs
min-h-[44px]
```

## Accessibility

### WCAG 2.2 AA Compliance
- Color contrast: 4.5:1 for normal text, 3:1 for large text
- Focus indicators: 3px solid ring with 2px offset
- Keyboard navigation: All interactive elements accessible
- Screen reader support: Proper ARIA labels and semantic HTML

### Focus States
```css
:focus-visible {
  outline: 3px solid hsl(var(--ring));
  outline-offset: 2px;
  border-radius: 4px;
}
```

### Skip to Main Content
```html
<a href="#main-content" class="skip-to-main">Skip to main content</a>
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Layout Safety

### Safe Area Insets (for notches)
```css
body {
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}
```

### Viewport Height
```css
/* Use dvh instead of vh to avoid mobile browser issues */
min-height: 100dvh;
```

## Performance

### Core Web Vitals Targets
- **LCP** (Largest Contentful Paint): < 2.5s
- **CLS** (Cumulative Layout Shift): < 0.1
- **INP** (Interaction to Next Paint): < 200ms
- **TTFB** (Time to First Byte): < 0.8s

### Budgets
- Critical path: < 150KB
- JavaScript: < 200KB parsed at load
- Images: Use WebP/AVIF with fallbacks

### Optimization Techniques
- Preconnect to external domains
- Font-display: swap
- Lazy load below-the-fold images
- Code splitting and tree shaking
- Brotli/Gzip compression

## Security

### Headers (via .htaccess)
- HSTS: max-age=31536000
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: geolocation=(), microphone=(), camera=()

### Content Security Policy
Implemented in index.html meta tags

## Browser Support

### Evergreen Browsers
- Chrome: latest 2 versions
- Safari: latest 2 versions
- Firefox: latest 2 versions
- Edge: latest 2 versions

### Mobile
- iOS Safari: current and previous
- Android Chrome: current and previous

## Form Best Practices

### Input Types & Modes
```tsx
// Email inputs
<input type="email" inputMode="email" />

// Phone inputs
<input type="tel" inputMode="tel" />

// Number inputs
<input type="number" inputMode="numeric" />
```

### Labels & Autocomplete
- All inputs must have associated labels
- Use autocomplete attributes for better UX
- Inline error messages with proper ARIA

## Testing Matrix

### Viewports
- 360px (iPhone SE)
- 390px (iPhone 13/14)
- 768px (iPad)
- 1024px (iPad Pro)
- 1280px (Desktop)
- 1440px (Large Desktop)

### Devices
- iPhone SE/13/15
- iPad 10"
- Pixel 7/8
- 13" and 24"+ desktop

### Scenarios
- Slow 3G throttling
- Low-end CPU
- Offline/spotty network
- 200% zoom
- Keyboard-only navigation
- Screen reader (NVDA/VoiceOver)

## Acceptance Criteria

✅ Passes WCAG 2.2 AA automated checks (axe DevTools)
✅ Core Web Vitals met on 4G throttled mobile
✅ All CTAs ≥44×44px
✅ All forms keyboard + screen-reader accessible
✅ Visual parity across browser/device matrix
✅ Lighthouse score ≥90 (performance/SEO/accessibility/best-practices)
