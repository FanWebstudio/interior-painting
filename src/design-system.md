# HomeMaster Interior Painting Design System

This document outlines the design system used across the HomeMaster Interior Painting website, ensuring consistency in visual design, components, and user experience.

## Colors

### Primary Colors
```css
--primary-blue: #2563eb;     /* Blue 600 */
--primary-hover: #1d4ed8;    /* Blue 700 */
--primary-focus: #3b82f6;    /* Blue 500 */
```

### Text Colors
```css
--text-primary: #111827;     /* Gray 900 */
--text-secondary: #4b5563;   /* Gray 600 */
--text-light: #6b7280;       /* Gray 500 */
```

### Background Colors
```css
--bg-white: #ffffff;
--bg-gray-50: #f9fafb;
--bg-gray-100: #f3f4f6;
```

## Typography

### Font Family
```css
--font-sans: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
```

### Font Sizes
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

### Font Weights
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

## Spacing

### Standard Spacing Scale
```css
--space-1: 0.25rem;    /* 4px */
--space-2: 0.5rem;     /* 8px */
--space-3: 0.75rem;    /* 12px */
--space-4: 1rem;       /* 16px */
--space-6: 1.5rem;     /* 24px */
--space-8: 2rem;       /* 32px */
--space-12: 3rem;      /* 48px */
--space-16: 4rem;      /* 64px */
--space-20: 5rem;      /* 80px */
```

## Components

### Buttons

#### Primary Button
```html
<button class="bg-blue-600 py-3 px-4 rounded-md text-white font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
  Button Text
</button>
```

#### Secondary Button
```html
<button class="bg-gray-100 py-3 px-4 rounded-md text-gray-900 font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
  Button Text
</button>
```

### Form Elements

#### Text Input
```html
<input
  type="text"
  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
/>
```

#### Text Area
```html
<textarea
  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
  rows="4"
></textarea>
```

#### Form Label
```html
<label class="block text-sm font-medium text-gray-700">
  Label Text
</label>
```

### Cards

#### Basic Card
```html
<div class="bg-white p-8 rounded-lg shadow-lg">
  <!-- Card content -->
</div>
```

### Section Headers

#### Main Header
```html
<h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
  Header Text
</h1>
```

#### Section Header
```html
<h2 class="text-3xl font-bold text-gray-900">
  Section Header
</h2>
```

#### Subsection Header
```html
<h3 class="text-lg font-medium text-gray-900">
  Subsection Header
</h3>
```

### Navigation

#### Navigation Link
```html
<a class="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
  Link Text
</a>
```

## Layout

### Container
```html
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <!-- Content -->
</div>
```

### Grid System
```html
<!-- 2 Column Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
  <!-- Grid items -->
</div>

<!-- 3 Column Grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
  <!-- Grid items -->
</div>
```

### Section Spacing
```html
<section class="py-20">
  <!-- Section content -->
</section>
```

## Responsive Breakpoints

```css
--sm: 640px;   /* @media (min-width: 640px) */
--md: 768px;   /* @media (min-width: 768px) */
--lg: 1024px;  /* @media (min-width: 1024px) */
--xl: 1280px;  /* @media (min-width: 1280px) */
--2xl: 1536px; /* @media (min-width: 1536px) */
```

## Best Practices

1. Always use the defined color variables for consistency
2. Maintain consistent spacing using the spacing scale
3. Use responsive design patterns with the defined breakpoints
4. Follow accessibility guidelines with proper contrast ratios
5. Maintain consistent component patterns across the site

## Usage Guidelines

1. Use semantic HTML elements whenever possible
2. Follow the BEM naming convention for custom CSS classes
3. Prefer utility classes from Tailwind when available
4. Keep components modular and reusable
5. Document any custom components or variations

This design system is built on top of Tailwind CSS and should be used as a reference for maintaining consistency across the HomeMaster Interior Painting website. When creating new components or pages, refer to this document to ensure adherence to the established design patterns.
