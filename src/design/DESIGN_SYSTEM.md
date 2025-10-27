# SAFE-MIT Digital Platform - Design System

## 🎨 Overview

This document outlines the complete design system for the SAFE-MIT Digital Platform, ensuring consistency across all components and pages while maintaining accessibility and cultural sensitivity for our multi-country audience.

---

## 📐 Design Principles

### 1. **Accessibility First**
- WCAG 2.1 AA compliance
- Minimum contrast ratio of 4.5:1 for text
- Touch targets minimum 44px × 44px
- Full keyboard navigation support

### 2. **Mobile-First Responsive**
- Optimized for low-bandwidth environments
- Progressive enhancement
- Adaptive layouts for all screen sizes

### 3. **Cultural Inclusivity**
- RTL (Right-to-Left) support for Arabic
- Multilingual typography considerations
- Culturally appropriate imagery and colors

### 4. **Performance Optimized**
- Minimal animations for low-spec devices
- Lazy loading for images
- Efficient color palette

---

## 🎨 Color Palette

### Primary Colors
```css
/* Blue - Trust, Security, Official */
--primary-50:   #eff6ff;
--primary-100:  #dbeafe;
--primary-200:  #bfdbfe;
--primary-300:  #93c5fd;
--primary-400:  #60a5fa;
--primary-500:  #3b82f6;  /* Main Primary */
--primary-600:  #2563eb;  /* Hover State */
--primary-700:  #1d4ed8;
--primary-800:  #1e40af;
--primary-900:  #1e3a8a;
```

### Secondary Colors
```css
/* Green - Safety, Growth, Progress */
--green-50:   #f0fdf4;
--green-100:  #dcfce7;
--green-200:  #bbf7d0;
--green-300:  #86efac;
--green-400:  #4ade80;
--green-500:  #22c55e;
--green-600:  #16a34a;  /* Main Green */
--green-700:  #15803d;
--green-800:  #166534;
--green-900:  #14532d;
```

### Accent Colors
```css
/* Orange - Action, Energy, Awareness */
--orange-50:   #fff7ed;
--orange-100:  #ffedd5;
--orange-200:  #fed7aa;
--orange-300:  #fdba74;
--orange-400:  #fb923c;
--orange-500:  #f97316;
--orange-600:  #ea580c;  /* Main Orange */
--orange-700:  #c2410c;
--orange-800:  #9a3412;
--orange-900:  #7c2d12;

/* Purple - Education, Wisdom */
--purple-50:   #faf5ff;
--purple-100:  #f3e8ff;
--purple-200:  #e9d5ff;
--purple-300:  #d8b4fe;
--purple-400:  #c084fc;
--purple-500:  #a855f7;
--purple-600:  #9333ea;  /* Main Purple */
--purple-700:  #7e22ce;
--purple-800:  #6b21a8;
--purple-900:  #581c87;
```

### Neutral Colors
```css
/* Gray - Text, Backgrounds, Borders */
--gray-50:   #f9fafb;
--gray-100:  #f3f4f6;
--gray-200:  #e5e7eb;
--gray-300:  #d1d5db;
--gray-400:  #9ca3af;
--gray-500:  #6b7280;
--gray-600:  #4b5563;
--gray-700:  #374151;  /* Body Text */
--gray-800:  #1f2937;
--gray-900:  #111827;  /* Headings */
```

### Semantic Colors
```css
/* Success */
--success: #22c55e;
--success-light: #dcfce7;
--success-dark: #15803d;

/* Warning */
--warning: #f59e0b;
--warning-light: #fef3c7;
--warning-dark: #d97706;

/* Error */
--error: #ef4444;
--error-light: #fee2e2;
--error-dark: #dc2626;

/* Info */
--info: #3b82f6;
--info-light: #dbeafe;
--info-dark: #1d4ed8;
```

### Page-Specific Gradient Colors

**Info Hub**
```css
--info-hub-gradient: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
```

**Campaign Library**
```css
--campaigns-gradient: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%);
```

**Training Modules**
```css
--training-gradient: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
```

**Analytics Dashboard**
```css
--analytics-gradient: linear-gradient(135deg, #ea580c 0%, #c2410c 100%);
```

**Facilitator Dashboard**
```css
--facilitator-gradient: linear-gradient(135deg, #9333ea 0%, #2563eb 100%);
```

---

## 🔤 Typography

### Font Family
```css
/* System Font Stack - Optimized for Performance */
font-family: 
  -apple-system, 
  BlinkMacSystemFont, 
  'Segoe UI', 
  'Roboto', 
  'Oxygen', 
  'Ubuntu', 
  'Cantarell', 
  'Fira Sans', 
  'Droid Sans', 
  'Helvetica Neue', 
  sans-serif;

/* Arabic Font Support */
font-family: 
  'Arabic Typesetting', 
  'Traditional Arabic', 
  'Noto Sans Arabic', 
  sans-serif;
```

### Font Sizes & Line Heights
```css
/* Display - Hero Sections */
.text-display-lg {
  font-size: 3.75rem;    /* 60px */
  line-height: 1.1;
  font-weight: 700;
}

.text-display-md {
  font-size: 3rem;       /* 48px */
  line-height: 1.15;
  font-weight: 700;
}

/* Headings */
h1, .text-4xl {
  font-size: 2.25rem;    /* 36px */
  line-height: 1.25;
  font-weight: 700;
}

h2, .text-3xl {
  font-size: 1.875rem;   /* 30px */
  line-height: 1.3;
  font-weight: 600;
}

h3, .text-2xl {
  font-size: 1.5rem;     /* 24px */
  line-height: 1.35;
  font-weight: 600;
}

h4, .text-xl {
  font-size: 1.25rem;    /* 20px */
  line-height: 1.4;
  font-weight: 600;
}

/* Body Text */
.text-base {
  font-size: 1rem;       /* 16px */
  line-height: 1.5;
  font-weight: 400;
}

.text-sm {
  font-size: 0.875rem;   /* 14px */
  line-height: 1.5;
  font-weight: 400;
}

.text-xs {
  font-size: 0.75rem;    /* 12px */
  line-height: 1.5;
  font-weight: 400;
}
```

### Font Weights
```css
.font-normal    { font-weight: 400; }  /* Body text */
.font-medium    { font-weight: 500; }  /* Emphasis */
.font-semibold  { font-weight: 600; }  /* Subheadings */
.font-bold      { font-weight: 700; }  /* Headings */
```

---

## 📏 Spacing System

### Scale (based on 4px)
```css
--space-0:   0;
--space-1:   0.25rem;   /* 4px */
--space-2:   0.5rem;    /* 8px */
--space-3:   0.75rem;   /* 12px */
--space-4:   1rem;      /* 16px */
--space-5:   1.25rem;   /* 20px */
--space-6:   1.5rem;    /* 24px */
--space-8:   2rem;      /* 32px */
--space-10:  2.5rem;    /* 40px */
--space-12:  3rem;      /* 48px */
--space-16:  4rem;      /* 64px */
--space-20:  5rem;      /* 80px */
--space-24:  6rem;      /* 96px */
```

### Common Spacing Patterns
```css
/* Component Padding */
--padding-sm:    12px 16px;      /* Small buttons, tags */
--padding-md:    16px 24px;      /* Standard buttons, cards */
--padding-lg:    24px 32px;      /* Large cards, sections */

/* Section Spacing */
--section-spacing-mobile:  48px;
--section-spacing-tablet:  64px;
--section-spacing-desktop: 96px;

/* Grid Gap */
--grid-gap-sm:   16px;
--grid-gap-md:   24px;
--grid-gap-lg:   32px;
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm:  640px;   /* Small tablets */
--breakpoint-md:  768px;   /* Tablets */
--breakpoint-lg:  1024px;  /* Small laptops */
--breakpoint-xl:  1280px;  /* Desktops */
--breakpoint-2xl: 1536px;  /* Large screens */
```

### Usage
```css
/* Mobile (default) */
.container { width: 100%; padding: 0 16px; }

/* Tablet and up */
@media (min-width: 768px) {
  .container { max-width: 768px; padding: 0 24px; }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container { max-width: 1024px; padding: 0 32px; }
}
```

---

## 🎯 Component Design Patterns

### Buttons

#### Primary Button
```css
Background: --primary-600 (#2563eb)
Hover: --primary-700 (#1d4ed8)
Text: White
Padding: 12px 24px
Border Radius: 6px
Font Size: 14px
Font Weight: 500
Min Height: 44px
```

#### Secondary Button
```css
Background: Transparent
Border: 1px solid --gray-300
Hover Border: --gray-400
Text: --gray-700
Padding: 12px 24px
Border Radius: 6px
```

#### Danger Button
```css
Background: --error (#ef4444)
Hover: --error-dark (#dc2626)
Text: White
```

#### Button Sizes
```css
/* Small */
height: 36px; padding: 8px 16px; font-size: 13px;

/* Medium (Default) */
height: 44px; padding: 12px 24px; font-size: 14px;

/* Large */
height: 52px; padding: 16px 32px; font-size: 16px;
```

### Cards

#### Standard Card
```css
Background: White
Border: 1px solid --gray-200
Border Radius: 12px
Padding: 24px
Box Shadow: 0 1px 3px rgba(0, 0, 0, 0.1)
Hover Shadow: 0 4px 6px rgba(0, 0, 0, 0.1)
```

#### Elevated Card
```css
Box Shadow: 0 4px 6px rgba(0, 0, 0, 0.07), 
            0 10px 15px rgba(0, 0, 0, 0.1)
```

#### Card Header
```css
Border Bottom: 1px solid --gray-200
Padding Bottom: 16px
Margin Bottom: 16px
```

### Form Elements

#### Input Fields
```css
Height: 44px
Padding: 12px 16px
Border: 1px solid --gray-300
Border Radius: 6px
Focus Border: --primary-500
Focus Ring: 0 0 0 3px rgba(37, 99, 235, 0.1)
Font Size: 14px
```

#### Textarea
```css
Min Height: 120px
Padding: 12px 16px
Resize: vertical
```

#### Select Dropdown
```css
Height: 44px
Padding: 12px 16px
Background Icon: Chevron down
```

#### Checkbox/Radio
```css
Size: 20px × 20px
Border: 2px solid --gray-300
Checked Background: --primary-600
Checked Border: --primary-600
```

### Badges

#### Default Badge
```css
Background: --gray-100
Text: --gray-700
Padding: 4px 12px
Border Radius: 12px
Font Size: 12px
Font Weight: 500
```

#### Status Badges
```css
/* Success */
Background: --success-light; Text: --success-dark;

/* Warning */
Background: --warning-light; Text: --warning-dark;

/* Error */
Background: --error-light; Text: --error-dark;

/* Info */
Background: --info-light; Text: --info-dark;
```

### Progress Bars
```css
Height: 8px
Background: --gray-200
Border Radius: 4px
Fill Color: --primary-600
Transition: width 0.3s ease
```

### Alerts
```css
Padding: 16px
Border Radius: 8px
Border Left: 4px solid [color]
Font Size: 14px

/* Success Alert */
Background: --success-light
Border Color: --success
Icon Color: --success-dark

/* Warning Alert */
Background: --warning-light
Border Color: --warning
Icon Color: --warning-dark

/* Error Alert */
Background: --error-light
Border Color: --error
Icon Color: --error-dark
```

---

## 🎭 Page-Specific Design Patterns

### Homepage
- **Hero Section**: Full-width gradient background (blue), centered content
- **Feature Cards**: 3-column grid on desktop, single column mobile
- **CTA Sections**: Contrasting background colors with clear action buttons

### Info Hub
- **Country Selector**: Large flag cards in 2×2 grid (mobile: 1 column)
- **Article Cards**: White cards with category badges, thumbnail images
- **FAQ Section**: Accordion-style with expand/collapse animations

### Campaign Library
- **Media Cards**: Aspect ratio maintained, thumbnail with overlay info
- **Filter Bar**: Sticky top bar with dropdown filters
- **Grid Layout**: 3 columns desktop, 2 columns tablet, 1 column mobile

### Training Modules
- **Module Cards**: Elevated cards with progress indicators
- **Lesson Viewer**: Full-width content area with navigation
- **Quiz Interface**: Centered card layout with progress bar
- **Certificate**: Formal design with borders and verification code

### Analytics Dashboard
- **Metric Cards**: 4-column grid with icons and trend indicators
- **Charts**: Recharts library with custom colors
- **Tables**: Striped rows, hover states, responsive horizontal scroll

### Facilitator Dashboard
- **Upload Form**: Two-column layout with guidelines sidebar
- **Learner Table**: Full-width table with action buttons
- **Stats Cards**: Color-coded by status (active/inactive)

---

## 🖼️ Iconography

### Icon Library: Lucide React

### Icon Sizes
```css
.icon-xs  { width: 12px; height: 12px; }  /* Inline text */
.icon-sm  { width: 16px; height: 16px; }  /* Buttons, badges */
.icon-md  { width: 20px; height: 20px; }  /* Form inputs */
.icon-lg  { width: 24px; height: 24px; }  /* Headers */
.icon-xl  { width: 32px; height: 32px; }  /* Feature sections */
.icon-2xl { width: 48px; height: 48px; }  /* Hero sections */
```

### Common Icons
```
Home: Home
Info Hub: BookOpen
Campaigns: Video
Training: GraduationCap
Analytics: BarChart3
Users: Users
Settings: Settings
Search: Search
Filter: Filter
Download: Download
Upload: Upload
Share: Share2
Certificate: Award
Progress: TrendingUp
Warning: AlertCircle
Success: CheckCircle
Error: XCircle
```

---

## 🎬 Animations & Transitions

### Transition Timing
```css
--transition-fast:   150ms;  /* Hover states */
--transition-normal: 300ms;  /* Modal open/close */
--transition-slow:   500ms;  /* Page transitions */
```

### Common Animations
```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide Up */
@keyframes slideUp {
  from { 
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Scale In */
@keyframes scaleIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
```

### Hover Effects
```css
/* Card Hover */
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
}

/* Button Hover */
.button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
```

---

## ♿ Accessibility Patterns

### Focus States
```css
*:focus-visible {
  outline: 2px solid --primary-600;
  outline-offset: 2px;
  border-radius: 4px;
}
```

### Skip Links
```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: --primary-600;
  color: white;
  padding: 8px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

### ARIA Labels
- All interactive elements have descriptive aria-labels
- Form inputs have associated labels
- Dynamic content has aria-live regions
- Modal dialogs have aria-modal and aria-labelledby

### Color Contrast Ratios
- **Normal Text**: Minimum 4.5:1
- **Large Text** (18px+): Minimum 3:1
- **UI Components**: Minimum 3:1

---

## 🌍 RTL (Right-to-Left) Support

### Arabic Language Adaptations
```css
[dir="rtl"] {
  direction: rtl;
  text-align: right;
}

[dir="rtl"] .flex-row {
  flex-direction: row-reverse;
}

[dir="rtl"] .ml-4 {
  margin-left: 0;
  margin-right: 1rem;
}

[dir="rtl"] .text-left {
  text-align: right;
}
```

### Logical Properties (Preferred)
```css
/* Instead of margin-left, use */
margin-inline-start: 1rem;

/* Instead of padding-right, use */
padding-inline-end: 1rem;

/* Instead of border-left, use */
border-inline-start: 1px solid;
```

---

## 📊 Data Visualization

### Chart Colors
```css
/* Primary Data Series */
--chart-1: #2563eb;  /* Blue */
--chart-2: #16a34a;  /* Green */
--chart-3: #ea580c;  /* Orange */
--chart-4: #9333ea;  /* Purple */
--chart-5: #f59e0b;  /* Amber */

/* Chart Background */
--chart-bg: #f9fafb;

/* Grid Lines */
--chart-grid: #e5e7eb;
```

### Chart Specifications
```css
/* Line Charts */
Stroke Width: 2px
Point Radius: 4px
Fill Opacity: 0.1 (area charts)

/* Bar Charts */
Bar Radius: 4px (top corners)
Gap Between Bars: 8px

/* Pie Charts */
Stroke: White
Stroke Width: 2px
Label Font Size: 12px
```

---

## 🖼️ Images & Media

### Image Sizes
```css
/* Thumbnails */
width: 80px; height: 80px;

/* Card Images */
width: 100%; aspect-ratio: 16/9;

/* Profile Images */
width: 40px; height: 40px; border-radius: 50%;

/* Hero Images */
width: 100%; max-height: 600px; object-fit: cover;
```

### Image Optimization
- Format: WebP with JPEG fallback
- Lazy loading for images below fold
- Responsive srcset for different screen sizes
- Alt text for all images (accessibility)

### Video Players
```css
Aspect Ratio: 16:9
Border Radius: 8px
Controls: Custom styled
Background: Black
```

---

## 🎨 Shadow System

### Elevation Levels
```css
/* Level 1 - Subtle */
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

/* Level 2 - Card */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1),
            0 1px 2px rgba(0, 0, 0, 0.06);

/* Level 3 - Dropdown */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07),
            0 2px 4px rgba(0, 0, 0, 0.05);

/* Level 4 - Modal */
box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1),
            0 4px 6px rgba(0, 0, 0, 0.05);

/* Level 5 - Popover */
box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15),
            0 10px 10px rgba(0, 0, 0, 0.04);
```

---

## 📱 Mobile-Specific Patterns

### Touch Targets
- Minimum size: 44px × 44px
- Spacing between targets: 8px minimum

### Mobile Navigation
- Hamburger menu: Top right
- Full-screen overlay menu
- Large touch-friendly links

### Mobile Cards
- Full width with 16px side margins
- Reduced padding (16px vs 24px desktop)
- Stacked layout for complex cards

### Bottom Sheets
- Used for filters and actions on mobile
- Slide up animation
- Drag-to-close gesture support

---

## 🎯 Loading States

### Skeleton Screens
```css
Background: linear-gradient(
  90deg,
  #f0f0f0 25%,
  #e0e0e0 50%,
  #f0f0f0 75%
);
Animation: shimmer 2s infinite;
Border Radius: 4px;
```

### Spinners
```css
/* Primary Spinner */
Border: 3px solid --gray-200;
Border Top: 3px solid --primary-600;
Border Radius: 50%;
Animation: spin 1s linear infinite;
Size: 40px;
```

### Progress Indicators
- Linear progress bars for file uploads
- Circular progress for quiz completion
- Step indicators for multi-step forms

---

## 🎨 Empty States

### Design Pattern
```css
Container: Centered, max-width 400px
Icon: 64px, gray-400 color
Heading: text-xl, gray-900
Description: text-sm, gray-600
Action Button: Primary button
```

### Common Empty States
- No search results
- No enrolled courses
- No data available (analytics)
- Offline mode

---

## 📋 Form Validation

### Error States
```css
Input Border: --error (#ef4444)
Error Message: text-sm, --error-dark
Icon: XCircle, --error
Background: --error-light (subtle)
```

### Success States
```css
Input Border: --success (#22c55e)
Success Message: text-sm, --success-dark
Icon: CheckCircle, --success
```

### Inline Validation
- Real-time validation for email, passwords
- Show error below input field
- Prevent form submission if errors exist

---

## 🌐 Multilingual Design Considerations

### Text Expansion
- German/French: +30% longer than English
- Arabic: Similar length to English
- Swahili: Slightly longer than English

### Solutions
- Flexible layouts (avoid fixed widths)
- Minimum button widths
- Text truncation with tooltips
- Multi-line support for navigation

### Number Formatting
- Use locale-specific formatting
- Date format varies by country
- Currency symbols positioned correctly

---

## 🎨 Brand Applications

### Logo Usage
```css
Minimum Size: 120px width
Clear Space: 20px around logo
Light Background: Full color logo
Dark Background: White logo
```

### Color Usage Guidelines
- Primary Blue: Official communications, trust
- Green: Safety, success, progress
- Orange: Calls-to-action, urgency
- Purple: Education, learning

---

## 📐 Grid System

### 12-Column Grid
```css
/* Container */
max-width: 1280px;
padding: 0 16px;  /* Mobile */
padding: 0 24px;  /* Tablet */
padding: 0 32px;  /* Desktop */

/* Column Gap */
gap: 16px;  /* Mobile */
gap: 24px;  /* Tablet */
gap: 32px;  /* Desktop */
```

### Common Layouts
```css
/* 2-Column */
grid-template-columns: repeat(2, 1fr);

/* 3-Column */
grid-template-columns: repeat(3, 1fr);

/* 4-Column */
grid-template-columns: repeat(4, 1fr);

/* Sidebar Layout */
grid-template-columns: 300px 1fr;  /* Desktop */
grid-template-columns: 1fr;         /* Mobile */
```

---

## 🎯 Interactive States

### Link States
```css
/* Default */
color: --primary-600;
text-decoration: none;

/* Hover */
color: --primary-700;
text-decoration: underline;

/* Visited */
color: --purple-600;

/* Active */
color: --primary-800;
```

### Button States
```css
/* Default */
opacity: 1;

/* Hover */
transform: translateY(-1px);
box-shadow: elevated;

/* Active/Pressed */
transform: translateY(0);
box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);

/* Disabled */
opacity: 0.5;
cursor: not-allowed;
pointer-events: none;
```

---

## 🎨 Design Tokens Summary

All design tokens are defined in `/styles/globals.css` using CSS custom properties for easy theming and maintenance.

### Usage Example
```css
.my-component {
  color: var(--gray-700);
  background: var(--primary-50);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
}
```

---

## 📱 Component Library

All components follow these design principles and are built using:
- **Shadcn/ui**: Base component library
- **Tailwind CSS v4.0**: Utility-first styling
- **Lucide React**: Icon system

### Component Checklist
✅ Accessible (ARIA, keyboard nav)
✅ Responsive (mobile-first)
✅ RTL support
✅ Loading states
✅ Error states
✅ Empty states
✅ Consistent with design tokens

---

## 🎨 Future Enhancements

### Dark Mode (Phase 3)
- Toggle in user settings
- Separate color tokens
- Reduced contrast for eye strain
- OLED-optimized blacks

### Animations (Enhanced)
- Micro-interactions
- Page transitions
- Scroll animations (IntersectionObserver)
- Loading animations

### Customization
- User-selectable themes
- Font size preferences
- Reduced motion mode
- High contrast mode

---

**Last Updated**: October 27, 2025  
**Version**: 2.0 (Phase 2)  
**Maintained By**: SAFE-MIT Design Team
