# CSS Spacing Standards Applied

This document outlines the global spacing standards implemented across the application, following industry best practices.

## 8-Point Spacing System

All spacing uses multiples of 4 and 8 for consistency:
- **4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 96**

### Implementation in Tailwind
- `p-4` = 16px padding
- `p-6` = 24px padding  
- `p-8` = 32px padding
- `gap-4` = 16px gap
- `gap-6` = 24px gap
- `gap-8` = 32px gap
- `mb-4` = 16px margin-bottom
- `mb-6` = 24px margin-bottom
- `mb-8` = 32px margin-bottom

## Section Spacing (Vertical Rhythm)

### Between Major Sections
- **Desktop**: `py-16` to `py-24` (64-96px)
- **Tablet**: `py-12` to `py-16` (48-64px)
- **Mobile**: `py-8` to `py-12` (32-48px)

### Inside Sections
- **Heading to content**: `mb-4` to `mb-6` (16-24px)
- **Between blocks**: `gap-6` to `gap-8` (24-32px)

## Container & Layout

### Max Content Width
- **Marketing pages**: 1280px (`max-w-7xl`)
- **Content pages**: 1200px (`max-w-6xl`)

### Content Inset (Gutters)
- **Mobile**: `px-4` to `px-6` (16-24px)
- **Tablet**: `px-6` to `px-8` (24-32px)
- **Desktop**: `px-8` to `px-20` (32-80px)

### Grid Gaps
- Use CSS Grid/Flex with `gap` property
- **Cards grid**: `gap-6` (24px)
- **Form fields**: `gap-4` (16px)

## Typography Rhythm

### Body Text
- Font size: 16-18px (`text-base` to `text-lg`)
- Line height: 1.5-1.7 (`leading-relaxed`)

### Headings
- H1: `leading-tight` (1.15)
- H2: `leading-tight` (1.2)
- H3: `leading-snug` (1.25)

### Paragraph Spacing
- Between paragraphs: `space-y-4` (16px)

## Touch & Target Sizes

### Interactive Elements
- Minimum target: 44×44px
- Buttons: `h-10` or `h-11` (40-44px)
- Inline spacing: `gap-2` minimum (8px)

### Focus States
- Visible focus ring: 2px
- Contrast: 3:1 against surrounding

## Breakpoints

Standard Tailwind breakpoints:
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## Applied Examples

### Program Detail Page
```tsx
// Page container
<div className="pt-32 pb-24"> // 128px top, 96px bottom

// Section spacing
<div className="mb-12"> // 48px between sections

// Card spacing
<div className="space-y-8"> // 32px between cards

// Content inset
<div className="container mx-auto px-6 max-w-7xl">
```

### Programs Listing
```tsx
// Grid with proper gaps
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

// Card internal spacing
<CardHeader> // Automatic padding
<CardContent className="space-y-4"> // 16px between elements
```

## Padding vs Margin Rule

- **Padding**: Inside components (use `p-*`)
- **Margin**: Between siblings (use `m-*` or parent's `gap`)
- **Preferred**: Use parent's `gap` or `space-y-*` for consistent spacing

## Responsive Scaling

Spacing scales up 1-2 steps per breakpoint:
```tsx
// Mobile to desktop progression
className="py-8 md:py-12 lg:py-16"
className="px-4 md:px-6 lg:px-8"
className="gap-4 md:gap-6 lg:gap-8"
```
