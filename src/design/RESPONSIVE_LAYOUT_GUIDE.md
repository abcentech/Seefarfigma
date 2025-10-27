# Responsive Layout Guide - SAFE-MIT Digital Platform

Complete guide for responsive design patterns across all breakpoints.

---

## 📐 Breakpoint System

```css
/* Mobile First Approach */
--mobile:   0px - 639px      /* Base (no media query) */
--sm:       640px - 767px    /* Large phones, small tablets */
--md:       768px - 1023px   /* Tablets */
--lg:       1024px - 1279px  /* Laptops, small desktops */
--xl:       1280px - 1535px  /* Desktops */
--2xl:      1536px+          /* Large screens */
```

---

## 🏠 Homepage Layouts

### Hero Section

**Mobile (< 640px)**
```
┌─────────────────────┐
│                     │
│  [Logo/Title]       │
│                     │
│  Headline           │
│  (2-3 lines)        │
│                     │
│  Subtitle           │
│  (3-4 lines)        │
│                     │
│  [CTA Button]       │
│  [CTA Button]       │
│  (Stacked)          │
│                     │
└─────────────────────┘

Padding: 32px 16px
Text Align: Center
Heading: 32px
Subheading: 16px
Button Width: 100%
Button Spacing: 12px
```

**Tablet (768px - 1023px)**
```
┌───────────────────────────────┐
│                               │
│       [Logo/Title]            │
│                               │
│     Headline (1-2 lines)      │
│                               │
│     Subtitle (2-3 lines)      │
│                               │
│  [CTA Button]  [CTA Button]   │
│  (Side by side)               │
│                               │
└───────────────────────────────┘

Padding: 64px 32px
Text Align: Center
Heading: 48px
Subheading: 20px
Button Width: Auto (min 160px)
Button Spacing: 16px
```

**Desktop (1024px+)**
```
┌─────────────────────────────────────┐
│                                     │
│                                     │
│        Large Headline               │
│        (1 line)                     │
│                                     │
│        Subtitle (1-2 lines)         │
│                                     │
│  [CTA Button]    [CTA Button]       │
│                                     │
│                                     │
└─────────────────────────────────────┘

Padding: 96px 48px
Text Align: Center
Heading: 60px
Subheading: 24px
Max Width: 1200px
```

### Feature Cards Section

**Mobile**
```
┌─────────────┐
│   [Icon]    │
│   Title     │
│   Desc...   │
└─────────────┘

┌─────────────┐
│   [Icon]    │
│   Title     │
│   Desc...   │
└─────────────┘

┌─────────────┐
│   [Icon]    │
│   Title     │
│   Desc...   │
└─────────────┘

Grid: 1 column
Gap: 16px
Card Padding: 20px
```

**Tablet**
```
┌──────────┐  ┌──────────┐
│  [Icon]  │  │  [Icon]  │
│  Title   │  │  Title   │
│  Desc... │  │  Desc... │
└──────────┘  └──────────┘

┌──────────┐  ┌──────────┐
│  [Icon]  │  │  [Icon]  │
│  Title   │  │  Title   │
│  Desc... │  │  Desc... │
└──────────┘  └──────────┘

Grid: 2 columns
Gap: 24px
Card Padding: 24px
```

**Desktop**
```
┌─────────┐ ┌─────────┐ ┌─────────┐
│ [Icon]  │ │ [Icon]  │ │ [Icon]  │
│ Title   │ │ Title   │ │ Title   │
│ Desc... │ │ Desc... │ │ Desc... │
└─────────┘ └─────────┘ └─────────┘

┌─────────┐ ┌─────────┐ ┌─────────┐
│ [Icon]  │ │ [Icon]  │ │ [Icon]  │
│ Title   │ │ Title   │ │ Title   │
│ Desc... │ │ Desc... │ │ Desc... │
└─────────┘ └─────────┘ └─────────┘

Grid: 3 columns
Gap: 32px
Card Padding: 32px
```

---

## 📚 Info Hub Page Layouts

### Country Selector

**Mobile**
```
┌───────────────┐
│   🇳🇬 Nigeria  │
│   English     │
└───────────────┘

┌───────────────┐
│   🇸🇳 Senegal  │
│   Français    │
└───────────────┘

┌───────────────┐
│   🇲🇦 Morocco  │
│   العربية     │
└───────────────┘

┌───────────────┐
│   🇰🇪 Kenya    │
│   Swahili     │
└───────────────┘

Columns: 1
Card Height: 120px
Font Size: 20px
Flag Size: 64px
```

**Tablet & Desktop**
```
┌──────────────┐  ┌──────────────┐
│  🇳🇬 Nigeria  │  │  🇸🇳 Senegal  │
│   English    │  │   Français   │
└──────────────┘  └──────────────┘

┌──────────────┐  ┌──────────────┐
│  🇲🇦 Morocco  │  │  🇰🇪 Kenya    │
│   العربية    │  │   Swahili    │
└──────────────┘  └──────────────┘

Columns: 2
Card Height: 160px
Font Size: 24px
Flag Size: 80px
```

### Article Grid

**Mobile**
```
┌─────────────────┐
│ [Image]         │
│ Title           │
│ Description...  │
│ [Metadata]      │
└─────────────────┘

┌─────────────────┐
│ [Image]         │
│ Title           │
│ Description...  │
│ [Metadata]      │
└─────────────────┘

Columns: 1
Image Aspect: 16:9
Padding: 16px
```

**Tablet**
```
┌──────────────┐  ┌──────────────┐
│  [Image]     │  │  [Image]     │
│  Title       │  │  Title       │
│  Desc...     │  │  Desc...     │
│  [Metadata]  │  │  [Metadata]  │
└──────────────┘  └──────────────┘

Columns: 2
Gap: 20px
```

**Desktop**
```
┌──────────┐ ┌──────────┐ ┌──────────┐
│ [Image]  │ │ [Image]  │ │ [Image]  │
│ Title    │ │ Title    │ │ Title    │
│ Desc...  │ │ Desc...  │ │ Desc...  │
│ [Meta]   │ │ [Meta]   │ │ [Meta]   │
└──────────┘ └──────────┘ └──────────┘

Columns: 3
Gap: 24px
```

### FAQ Section

**All Breakpoints** (Same layout, scaled)
```
┌─────────────────────────────────┐
│ Question 1                  [▼] │
├─────────────────────────────────┤
│ Answer text here...             │
└─────────────────────────────────┘

┌─────────────────────────────────┐
│ Question 2                  [▼] │
└─────────────────────────────────┘

Mobile: Padding 16px
Tablet: Padding 20px
Desktop: Padding 24px
Max Width: 800px (desktop)
```

---

## 🎥 Campaign Library Layouts

### Filter Bar

**Mobile**
```
┌─────────────────────┐
│ [Search Field]      │
└─────────────────────┘

┌─────────────────────┐
│ [Filter Button]     │
│ Opens Bottom Sheet  │
└─────────────────────┘

Stacked: Vertical
Gap: 12px
Button: Full width
```

**Tablet & Desktop**
```
┌──────────────────────────────────────┐
│ [Search]  [Type▼]  [Country▼]  [🔍] │
└──────────────────────────────────────┘

Layout: Horizontal
Gap: 12px
Filters: Inline dropdowns
```

### Campaign Cards

**Mobile**
```
┌─────────────────┐
│ [Media Preview] │
│                 │
│ Title           │
│ Description...  │
│ Stats           │
│ [Share] [View]  │
└─────────────────┘

Columns: 1
Card Width: 100%
Buttons: Full width
```

**Tablet**
```
┌────────────┐  ┌────────────┐
│ [Media]    │  │ [Media]    │
│ Title      │  │ Title      │
│ Desc...    │  │ Desc...    │
│ Stats      │  │ Stats      │
│ [Buttons]  │  │ [Buttons]  │
└────────────┘  └────────────┘

Columns: 2
Gap: 20px
```

**Desktop**
```
┌─────────┐ ┌─────────┐ ┌─────────┐
│ [Media] │ │ [Media] │ │ [Media] │
│ Title   │ │ Title   │ │ Title   │
│ Desc... │ │ Desc... │ │ Desc... │
│ Stats   │ │ Stats   │ │ Stats   │
│ [Btns]  │ │ [Btns]  │ │ [Btns]  │
└─────────┘ └─────────┘ └─────────┘

Columns: 3
Gap: 24px
```

---

## 🎓 Training Module Layouts

### Module Grid

**Mobile**
```
┌─────────────────┐
│ [Difficulty]    │
│ Module Title    │
│ Description...  │
│ Stats           │
│ Progress: 45%   │
│ [Button]        │
└─────────────────┘

Columns: 1
Full Width
```

**Tablet**
```
┌────────────┐  ┌────────────┐
│ [Badge]    │  │ [Badge]    │
│ Title      │  │ Title      │
│ Desc...    │  │ Desc...    │
│ Stats      │  │ Stats      │
│ Progress   │  │ Progress   │
│ [Button]   │  │ [Button]   │
└────────────┘  └────────────┘

Columns: 2
Gap: 20px
```

**Desktop**
```
┌─────────┐ ┌─────────┐ ┌─────────┐
│ [Badge] │ │ [Badge] │ │ [Badge] │
│ Title   │ │ Title   │ │ Title   │
│ Desc... │ │ Desc... │ │ Desc... │
│ Stats   │ │ Stats   │ │ Stats   │
│ Progress│ │ Progress│ │ Progress│
│ [Btn]   │ │ [Btn]   │ │ [Btn]   │
└─────────┘ └─────────┘ └─────────┘

Columns: 3
Gap: 24px
```

### Lesson Viewer

**Mobile**
```
┌─────────────────┐
│ [← Back]        │
├─────────────────┤
│ Lesson Title    │
│ Description     │
├─────────────────┤
│ Progress: 50%   │
│ ████████░░░░    │
├─────────────────┤
│                 │
│ Content Area    │
│ (Full Width)    │
│                 │
├─────────────────┤
│ [Prev] [Next]   │
│ (Full Width)    │
└─────────────────┘

Max Width: 100%
Padding: 16px
Buttons: Stacked
```

**Desktop**
```
┌────────────────────────────────┐
│ [← Back to Module]             │
├────────────────────────────────┤
│                                │
│  Lesson Title                  │
│  Detailed Description          │
│                                │
│  Progress: 50% ████████░░░░    │
│                                │
├────────────────────────────────┤
│                                │
│                                │
│       Content Area             │
│       (Centered, max 900px)    │
│                                │
│                                │
├────────────────────────────────┤
│ [Previous]        [Next →]     │
└────────────────────────────────┘

Max Width: 1200px
Content Max: 900px
Padding: 48px
Buttons: Flex space-between
```

### Quiz Interface

**Mobile**
```
┌─────────────────┐
│ Question 2/5    │
│ ████░░░░        │
├─────────────────┤
│ Question text?  │
│                 │
│ ○ Option A      │
│ ○ Option B      │
│ ○ Option C      │
│ ○ Option D      │
├─────────────────┤
│ [Previous]      │
│ [Next]          │
└─────────────────┘

Max Width: 100%
Options: Full width
Buttons: Stacked
```

**Desktop**
```
┌──────────────────────────────┐
│   Question 2 of 5   ████░░   │
├──────────────────────────────┤
│                              │
│   Question text here?        │
│                              │
│   ○  Option A                │
│   ○  Option B                │
│   ○  Option C                │
│   ○  Option D                │
│                              │
├──────────────────────────────┤
│  [Previous]      [Next →]    │
└──────────────────────────────┘

Max Width: 768px
Centered
Buttons: Flex space-between
```

---

## 📊 Analytics Dashboard Layouts

### Metric Cards

**Mobile**
```
┌─────────────────┐
│ [Icon] Users    │
│ 45,678          │
│ ↑ +12.5%        │
└─────────────────┘

┌─────────────────┐
│ [Icon] Views    │
│ 234,567         │
│ ↑ +8.3%         │
└─────────────────┘

Columns: 1
Gap: 16px
```

**Tablet**
```
┌──────────┐  ┌──────────┐
│[I] Users │  │[I] Views │
│ 45,678   │  │ 234,567  │
│ ↑ +12.5% │  │ ↑ +8.3%  │
└──────────┘  └──────────┘

┌──────────┐  ┌──────────┐
│[I] Enrol │  │[I] Down  │
│ 3,421    │  │ 12,345   │
│ ↑ +23.7% │  │ ↑ +15.2% │
└──────────┘  └──────────┘

Columns: 2
Gap: 20px
```

**Desktop**
```
┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐
│[I]Users│ │[I]Views│ │[I]Enrol│ │[I]Down │
│ 45,678 │ │234,567 │ │ 3,421  │ │12,345  │
│↑+12.5% │ │↑ +8.3% │ │↑+23.7% │ │↑+15.2% │
└────────┘ └────────┘ └────────┘ └────────┘

Columns: 4
Gap: 24px
```

### Charts

**Mobile**
```
┌─────────────────┐
│ Engagement      │
├─────────────────┤
│                 │
│ [Chart]         │
│ Height: 240px   │
│                 │
└─────────────────┘

Full Width
Reduced Height
Touch Optimized
```

**Desktop**
```
┌──────────────────────────────┐
│ Engagement Over Time         │
├──────────────────────────────┤
│                              │
│                              │
│       [Chart]                │
│       Height: 360px          │
│                              │
│                              │
└──────────────────────────────┘

Max Width: 100%
Full Featured
Hover Tooltips
```

### Data Table

**Mobile**
```
┌─────────────────┐
│ Learner         │
│ ───────────     │
│ John Doe        │
│ john@email.com  │
│ Modules: 3      │
│ Score: 85%      │
│ ───────────     │
│ Jane Smith      │
│ jane@email.com  │
│ ...             │
└─────────────────┘

Card Layout
Stacked Data
No Table
```

**Tablet**
```
┌────────────────────────────┐
│ Name      Modules   Score  │
│ ────────  ───────   ─────  │
│ John Doe     3       85%   │
│ jane@...                   │
│ ────────  ───────   ─────  │
│ Jane...      2       92%   │
│ ...                        │
└────────────────────────────┘

Simplified Table
Key Columns Only
Horizontal Scroll
```

**Desktop**
```
┌──────────────────────────────────────────────────┐
│ Name      Email       Modules  Lessons  Score  Status │
│ ────────  ─────────   ───────  ───────  ─────  ────── │
│ John Doe  john@...      3        12      85%   Active │
│ Jane...   jane@...      2         8      92%   Active │
│ Ahmed...  ahmed@...     1         3      78%  Inactive│
└──────────────────────────────────────────────────────┘

Full Table
All Columns
Fixed Header
Hover Rows
```

---

## 🎛️ Facilitator Dashboard Layouts

### Upload Form

**Mobile**
```
┌─────────────────┐
│ Upload Content  │
├─────────────────┤
│ [Module▼]       │
│ [Type▼]         │
│ [Title]         │
│ [Description]   │
│ [File Upload]   │
│ [Submit]        │
└─────────────────┘

Single Column
Full Width Inputs
Stacked Layout
```

**Desktop**
```
┌───────────────┐  ┌───────────────┐
│ Upload Form   │  │ Guidelines    │
│ ───────────   │  │ ───────────   │
│ [Module▼]     │  │ • Video tips  │
│ [Type▼]       │  │ • Document    │
│ [Title]       │  │   guidelines  │
│ [Description] │  │ • Best        │
│ [File]        │  │   practices   │
│ [Submit]      │  │               │
└───────────────┘  └───────────────┘

Two Column: 60/40
Form Left
Guidelines Right
```

---

## 🎨 Container Widths

```css
/* Mobile */
.container {
  width: 100%;
  padding: 0 16px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
    padding: 0 24px;
    margin: 0 auto;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
    padding: 0 32px;
  }
}

/* Large Desktop */
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
```

---

## 📱 Touch Targets

**Minimum Sizes**
```
Mobile Touch Targets: 44px × 44px
Tablet Touch Targets: 40px × 40px
Desktop Click Targets: 36px × 36px

Spacing Between Targets: 8px minimum
```

---

## 🔄 Responsive Images

```html
<!-- Srcset for Different Densities -->
<img 
  src="image-800.jpg"
  srcset="
    image-400.jpg 400w,
    image-800.jpg 800w,
    image-1200.jpg 1200w
  "
  sizes="
    (max-width: 640px) 100vw,
    (max-width: 1024px) 50vw,
    33vw
  "
  alt="Description"
/>

<!-- Aspect Ratio Maintained -->
.image-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}
```

---

## 📋 Form Layouts

**Mobile Stack**
```
[Label]
[Input Field]

[Label]
[Input Field]

[Submit Button]
(Full Width)
```

**Desktop Side-by-Side**
```
[Label]  [Input]    [Label]  [Input]

[Label]  [Input - Full Width]

[Cancel]          [Submit →]
```

---

## 🎯 Navigation Patterns

**Mobile: Hamburger Menu**
- Icon: Top right
- Menu: Slide from right
- Overlay: Full screen
- Links: Stacked, 56px height

**Desktop: Horizontal Nav**
- Links: Inline
- Spacing: 24px
- Dropdowns: Aligned below
- Max items: 6

---

**Last Updated**: October 27, 2025  
**Version**: 2.0  
**Maintained By**: SAFE-MIT Design Team
