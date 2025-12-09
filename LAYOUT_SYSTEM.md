# KCIC Responsive Layout System

## Overview
Production-grade responsive padding and spacing system ensuring consistent, visually balanced layouts across all devices with WCAG AA accessibility.

## Global Layout Container
```tsx
import Layout from '@/components/Layout';

<Layout>
  {/* Your content */}
</Layout>
```
- 16px (px-4) horizontal padding on mobile
- 24px (sm:px-6) on tablet
- 32px (lg:px-8) on desktop
- Max width: 1280px (max-w-7xl)
- Centered with mx-auto

## Section Padding (Vertical Rhythm)
```tsx
<section className="py-12 sm:py-16 lg:py-20">
```
- 48px vertical padding on mobile
- 64px on tablet
- 80px on desktop

## Hero Section Padding
```tsx
<section className="pt-20 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28">
```
Extra top padding to account for fixed navigation.

## Footer Padding
```tsx
<footer className="pt-10 pb-6 sm:pt-12 sm:pb-8">
```

## Card/Panel Inner Padding
```tsx
<div className="p-4 sm:p-6 lg:p-8 rounded-2xl">
```

## Custom Spacing Tokens
Available in tailwind.config.ts:
- `section-sm`: 3rem (48px)
- `section-md`: 4rem (64px)
- `section-lg`: 5rem (80px)

Usage: `py-section-sm sm:py-section-md lg:py-section-lg`

## Safe-Area Insets
Automatically applied to body for iPhone X+ notch support.

## Testing Breakpoints
- Mobile: 375px (iPhone SE)
- Tablet: 768px (iPad Mini)
- Laptop: 1024px
- Desktop: 1440px (Full HD)
