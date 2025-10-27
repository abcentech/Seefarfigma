# Component Specifications - SAFE-MIT Digital Platform

Complete visual and functional specifications for all UI components.

---

## 🏠 Navigation Components

### Header

**Dimensions**
- Height: 72px (desktop), 64px (mobile)
- Background: White
- Border Bottom: 1px solid #e5e7eb
- Z-index: 50 (sticky)

**Logo**
- Size: 40px height
- Position: Left aligned
- Spacing: 16px padding

**Navigation Links**
- Font Size: 14px
- Font Weight: 500
- Color: #374151 (gray-700)
- Hover: #2563eb (primary-600)
- Active: #2563eb with 2px bottom border
- Spacing: 24px between links

**Language Switcher**
- Dropdown menu
- Flag icons: 20px
- Current language displayed
- Smooth transition on change

**User Menu**
- Avatar: 40px circle
- Dropdown aligned right
- Menu items: 14px font, 44px height
- Divider: 1px solid #e5e7eb

### Footer

**Structure**
- Background: #f9fafb (gray-50)
- Padding: 48px top/bottom, 24px sides
- Border Top: 1px solid #e5e7eb

**3-Column Layout** (desktop)
- Info Column: Logo + description
- Links Column: Quick links
- Social Column: Social media icons

**Mobile Layout**
- Stacked single column
- Centered alignment
- 24px spacing between sections

**Copyright**
- Font Size: 12px
- Color: #6b7280 (gray-500)
- Border Top: 1px solid #e5e7eb
- Padding Top: 24px

---

## 📚 Info Hub Components

### Country Selector

**Layout**
- Grid: 2 columns (desktop), 1 column (mobile)
- Gap: 24px
- Cards: Equal height

**Country Card**
- Background: White
- Border: 2px solid #e5e7eb
- Border Radius: 12px
- Padding: 32px
- Hover: Border color #2563eb, shadow elevation
- Transition: 300ms ease

**Flag Display**
- Size: 80px
- Position: Centered
- Margin Bottom: 16px

**Country Name**
- Font Size: 24px
- Font Weight: 600
- Color: #111827 (gray-900)
- Margin Bottom: 8px

**Language Badge**
- Background: #dbeafe (blue-100)
- Color: #1e40af (blue-800)
- Padding: 4px 12px
- Border Radius: 12px
- Font Size: 12px

### Article Card

**Dimensions**
- Min Height: 320px
- Border Radius: 12px
- Background: White
- Border: 1px solid #e5e7eb

**Thumbnail**
- Aspect Ratio: 16:9
- Border Radius: 12px 12px 0 0
- Object Fit: Cover

**Content Area**
- Padding: 20px

**Category Badge**
- Position: Absolute, top-left of thumbnail
- Margin: 12px
- Background: Semi-transparent white (rgba(255,255,255,0.9))
- Backdrop Filter: Blur(4px)
- Padding: 6px 12px
- Border Radius: 6px

**Title**
- Font Size: 18px
- Font Weight: 600
- Color: #111827
- Line Clamp: 2 lines
- Margin Bottom: 12px

**Metadata**
- Font Size: 13px
- Color: #6b7280 (gray-500)
- Icons: 16px
- Gap: 16px between items

**Tags**
- Display: Flex wrap
- Gap: 8px
- Badge Style: Outline
- Font Size: 11px

### FAQ Section

**Accordion Item**
- Background: White
- Border: 1px solid #e5e7eb
- Border Radius: 8px
- Margin Bottom: 12px

**Question Header**
- Padding: 16px 20px
- Cursor: Pointer
- Hover: Background #f9fafb

**Question Text**
- Font Size: 16px
- Font Weight: 500
- Color: #111827

**Expand Icon**
- Size: 20px
- Color: #6b7280
- Rotation: 180deg when expanded
- Transition: 300ms

**Answer Content**
- Padding: 0 20px 20px 20px
- Font Size: 14px
- Line Height: 1.6
- Color: #4b5563

**Myth Badge** (if applicable)
- Background: #fef3c7 (yellow-100)
- Color: #92400e (yellow-800)
- Icon: AlertTriangle
- Prominent display

---

## 🎥 Campaign Library Components

### Campaign Card

**Card Structure**
- Width: 100% (responsive)
- Border Radius: 12px
- Overflow: Hidden
- Box Shadow: Level 2
- Hover: Lift effect (-4px translateY)

**Media Preview**
- Aspect Ratio: 16:9
- Background: #000000
- Position: Relative

**Media Type Indicator**
- Position: Absolute top-right
- Padding: 8px 12px
- Background: rgba(0,0,0,0.7)
- Backdrop Filter: Blur(8px)
- Color: White
- Border Radius: 0 12px 0 8px

**Video Icon Overlay**
- Position: Centered
- Size: 64px circle
- Background: rgba(37, 99, 235, 0.9)
- Icon: Play, 32px, White

**Content Section**
- Padding: 20px

**Title**
- Font Size: 18px
- Font Weight: 600
- Line Clamp: 2
- Margin Bottom: 12px

**Description**
- Font Size: 14px
- Color: #6b7280
- Line Clamp: 3
- Margin Bottom: 16px

**Stats Row**
- Display: Flex
- Gap: 16px
- Font Size: 13px
- Color: #6b7280

**Stat Item**
- Icon: 14px
- Gap: 4px
- Display: Inline flex

**Action Buttons**
- Margin Top: 16px
- Border Top: 1px solid #e5e7eb
- Padding Top: 16px
- Display: Flex
- Gap: 8px

### Share Widget

**Modal/Dialog**
- Width: 480px max
- Border Radius: 16px
- Padding: 24px
- Background: White
- Shadow: Level 4

**Social Buttons**
- Grid: 2 columns
- Gap: 12px
- Button Height: 48px
- Icon Left: 20px
- Text: Platform name

**Platform Colors**
- WhatsApp: #25D366
- Facebook: #1877F2
- Twitter: #1DA1F2
- Email: #6b7280

**Copy Link Section**
- Background: #f9fafb
- Border: 1px solid #e5e7eb
- Border Radius: 8px
- Padding: 12px
- Display: Flex
- Gap: 8px

**Link Input**
- Background: Transparent
- Border: None
- Flex: 1
- Font Size: 14px
- Color: #4b5563

**Copy Button**
- Background: #2563eb
- Color: White
- Padding: 8px 16px
- Border Radius: 6px
- Icon: Copy

---

## 🎓 Training Components

### Module Card

**Card Base**
- Height: 100% (flex column)
- Border: 1px solid #e5e7eb
- Border Radius: 12px
- Background: White
- Hover: Shadow elevation + translateY(-2px)

**Header Section**
- Padding: 20px
- Border Bottom: 1px solid #f3f4f6

**Difficulty Badge**
- Beginner: Green background (#dcfce7), dark green text (#166534)
- Intermediate: Yellow background (#fef3c7), dark yellow text (#92400e)
- Advanced: Red background (#fee2e2), dark red text (#991b1b)
- Padding: 4px 12px
- Border Radius: 12px
- Font Size: 12px
- Font Weight: 500

**Duration Badge**
- Position: Top right
- Font Size: 12px
- Color: #6b7280
- Icon: Clock, 14px

**Module Title**
- Font Size: 18px
- Font Weight: 600
- Line Clamp: 2
- Margin Top: 12px

**Content Section**
- Padding: 20px
- Flex: 1 (pushes footer down)

**Description**
- Font Size: 14px
- Color: #6b7280
- Line Clamp: 3
- Line Height: 1.5

**Stats Row**
- Margin Top: 16px
- Display: Flex
- Gap: 16px
- Font Size: 13px
- Color: #6b7280

**Progress Section** (if enrolled)
- Margin Top: 16px
- Padding Top: 16px
- Border Top: 1px solid #e5e7eb

**Progress Bar**
- Height: 8px
- Background: #e5e7eb
- Border Radius: 4px
- Fill: #2563eb
- Transition: width 500ms ease

**Footer Section**
- Padding: 16px 20px
- Border Top: 1px solid #e5e7eb

**Enroll Button**
- Width: 100%
- Height: 44px
- Primary variant if enrolled
- Outline variant if not enrolled

### Lesson Viewer

**Container**
- Max Width: 1024px
- Margin: Auto
- Padding: 32px 24px

**Back Button**
- Variant: Ghost
- Icon: ChevronLeft
- Margin Bottom: 24px

**Progress Header**
- Margin Bottom: 24px
- Background: #f9fafb
- Padding: 20px
- Border Radius: 8px

**Progress Bar**
- Height: 12px
- Background: #e5e7eb
- Border Radius: 6px
- Margin Top: 12px

**Content Card**
- Border: 1px solid #e5e7eb
- Border Radius: 12px
- Padding: 32px
- Background: White

**Content Type Badge**
- Background: #eff6ff (blue-50)
- Color: #1e40af (blue-800)
- Padding: 6px 12px
- Border Radius: 8px
- Font Size: 12px
- Text Transform: Capitalize

**Video Player Placeholder**
- Aspect Ratio: 16:9
- Background: #f3f4f6
- Border Radius: 12px
- Display: Flex centered

**Play Button**
- Size: 64px circle
- Background: #2563eb
- Icon: Play, 32px, White
- Box Shadow: 0 4px 12px rgba(37, 99, 235, 0.3)

**Text Content**
- Font Size: 16px
- Line Height: 1.6
- Color: #374151
- Max Width: 65ch

**Navigation Buttons**
- Margin Top: 32px
- Display: Flex
- Justify: Space between
- Gap: 16px

### Quiz Component

**Quiz Container**
- Max Width: 768px
- Margin: Auto
- Padding: 0 24px

**Quiz Card**
- Border: 1px solid #e5e7eb
- Border Radius: 12px
- Background: White
- Padding: 32px

**Progress Indicator**
- Display: Flex
- Justify: Space between
- Font Size: 14px
- Color: #6b7280
- Margin Bottom: 16px

**Progress Bar**
- Height: 8px
- Background: #e5e7eb
- Border Radius: 4px
- Fill: #16a34a (green)

**Question Text**
- Font Size: 20px
- Font Weight: 600
- Color: #111827
- Margin Bottom: 24px

**Option Item**
- Border: 2px solid #e5e7eb
- Border Radius: 8px
- Padding: 16px
- Margin Bottom: 12px
- Cursor: Pointer
- Transition: all 200ms

**Option Hover**
- Border Color: #bfdbfe (blue-200)
- Background: #eff6ff (blue-50)

**Selected Option**
- Border Color: #2563eb
- Background: #eff6ff

**Multi-Select Note**
- Background: #dbeafe (blue-100)
- Color: #1e40af
- Padding: 12px
- Border Radius: 8px
- Font Size: 13px
- Icon: AlertCircle

**Results Screen**
- Text Align: Center
- Padding: 48px 32px

**Score Display**
- Font Size: 64px
- Font Weight: 700
- Gradient Text: Primary colors
- Margin Bottom: 16px

**Pass Icon**
- Size: 64px
- Color: #22c55e (green-600)
- Margin Bottom: 16px

**Fail Icon**
- Size: 64px
- Color: #ef4444 (red-600)

**Question Review**
- Margin Top: 32px
- Border: 1px solid #e5e7eb
- Border Radius: 8px
- Padding: 16px

**Correct Answer**
- Border Left: 4px solid #22c55e
- Background: #f0fdf4 (green-50)

**Wrong Answer**
- Border Left: 4px solid #ef4444
- Background: #fef2f2 (red-50)

### Certificate Viewer

**Certificate Container**
- Max Width: 900px
- Margin: Auto
- Padding: 0 24px

**Certificate Card**
- Border: 3px solid #2563eb
- Border Radius: 16px
- Background: White
- Box Shadow: 0 8px 24px rgba(0,0,0,0.12)

**Certificate Header**
- Background: linear-gradient(135deg, #2563eb, #7c3aed)
- Padding: 48px 32px
- Text Align: Center
- Border Radius: 14px 14px 0 0

**Award Icon**
- Size: 64px
- Color: White
- Margin Bottom: 16px

**Certificate Title**
- Font Size: 32px
- Font Weight: 700
- Color: White
- Margin Bottom: 8px

**Certificate Body**
- Padding: 48px 64px
- Text Align: Center
- Line Height: 1.8

**Recipient Name**
- Font Size: 36px
- Font Weight: 700
- Color: #111827
- Margin: 24px 0
- Font Family: Serif (Georgia)

**Module Name**
- Font Size: 28px
- Color: #2563eb
- Font Weight: 600
- Margin Bottom: 16px

**Verification Section**
- Display: Grid
- Grid: 2 columns
- Gap: 32px
- Padding: 32px 0
- Border Top: 2px solid #e5e7eb
- Border Bottom: 2px solid #e5e7eb
- Max Width: 600px
- Margin: 32px auto

**Verification Code**
- Font Family: Monospace
- Font Size: 14px
- Font Weight: 600
- Color: #374151

**Signature Line**
- Border Top: 2px solid #374151
- Padding Top: 12px
- Display: Inline block
- Margin Top: 48px

**Certificate Footer**
- Background: #f9fafb
- Padding: 24px
- Border Radius: 0 0 14px 14px
- Text Align: Center
- Font Size: 13px
- Color: #6b7280

**Action Buttons**
- Margin Top: 32px
- Display: Flex
- Justify: Center
- Gap: 16px

### Progress Tracker

**Container**
- Border: 1px solid #e5e7eb
- Border Radius: 12px
- Background: White

**Header**
- Padding: 24px
- Border Bottom: 1px solid #e5e7eb

**Progress Percentage**
- Font Size: 24px
- Font Weight: 700
- Color: #2563eb
- Padding: 8px 16px
- Background: #eff6ff
- Border Radius: 12px

**Lesson Item**
- Padding: 16px 24px
- Border: 1px solid #e5e7eb
- Border Radius: 8px
- Margin Bottom: 12px
- Transition: all 200ms

**Lesson Item States**
- Default: White background
- Current: #eff6ff background, #2563eb border
- Completed: #f0fdf4 background, #16a34a border
- Locked: #f9fafb background, opacity 0.6

**Status Icon**
- Size: 24px
- Completed: CheckCircle, green
- Current: Circle, gray
- Locked: Lock, gray

**Lesson Number Badge**
- Background: #f3f4f6
- Padding: 4px 8px
- Border Radius: 6px
- Font Size: 11px
- Font Weight: 600

**Action Button**
- Size: Small
- Height: 36px
- Padding: 8px 16px
- Font Size: 13px

---

## 📊 Analytics Components

### Metric Card

**Card Base**
- Background: White
- Border: 1px solid #e5e7eb
- Border Radius: 12px
- Padding: 24px
- Min Height: 140px

**Icon Container**
- Width: 48px
- Height: 48px
- Border Radius: 12px
- Background: Primary color at 10% opacity
- Display: Flex centered
- Icon: 24px, primary color

**Metric Value**
- Font Size: 36px
- Font Weight: 700
- Color: #111827
- Margin: 12px 0 4px 0

**Metric Label**
- Font Size: 14px
- Color: #6b7280
- Font Weight: 500

**Trend Indicator**
- Display: Flex
- Align: Center
- Gap: 4px
- Font Size: 13px
- Margin Top: 8px

**Positive Trend**
- Color: #16a34a (green-600)
- Icon: TrendingUp

**Negative Trend**
- Color: #ef4444 (red-600)
- Icon: TrendingDown

### Engagement Chart

**Container**
- Background: White
- Border: 1px solid #e5e7eb
- Border Radius: 12px
- Padding: 24px

**Chart Area**
- Height: 320px (desktop)
- Height: 240px (mobile)
- Margin Top: 24px

**Chart Configuration**
- Line Stroke Width: 2px
- Line Color: #2563eb
- Area Fill: #2563eb at 10% opacity
- Grid: Horizontal lines, #f3f4f6
- Axis Text: 12px, #6b7280

**Tooltip**
- Background: #111827
- Color: White
- Padding: 12px
- Border Radius: 6px
- Font Size: 13px
- Box Shadow: Level 3

### Device Distribution

**Container**
- Background: White
- Border: 1px solid #e5e7eb
- Border Radius: 12px
- Padding: 24px

**Pie Chart**
- Size: 280px
- Stroke: White
- Stroke Width: 2px

**Device Colors**
- Mobile: #2563eb (blue)
- Desktop: #16a34a (green)
- Tablet: #ea580c (orange)

**Legend**
- Position: Below chart
- Display: Flex
- Gap: 24px
- Justify: Center

**Legend Item**
- Display: Flex
- Align: Center
- Gap: 8px

**Legend Dot**
- Width: 12px
- Height: 12px
- Border Radius: 50%
- Background: Device color

---

## 🎛️ Facilitator Dashboard Components

### Upload Form

**Form Container**
- Background: White
- Border: 1px solid #e5e7eb
- Border Radius: 12px
- Padding: 32px

**Form Field**
- Margin Bottom: 24px

**Label**
- Font Size: 14px
- Font Weight: 500
- Color: #374151
- Margin Bottom: 8px
- Display: Block

**Input/Select**
- Height: 44px
- Border: 1px solid #d1d5db
- Border Radius: 6px
- Padding: 12px 16px
- Font Size: 14px
- Transition: border 200ms

**Input Focus**
- Border Color: #2563eb
- Outline: None
- Ring: 0 0 0 3px rgba(37, 99, 235, 0.1)

**Textarea**
- Min Height: 120px
- Padding: 12px 16px
- Resize: Vertical

**File Upload**
- Border: 2px dashed #d1d5db
- Border Radius: 8px
- Padding: 32px
- Text Align: Center
- Background: #f9fafb
- Cursor: Pointer
- Transition: all 200ms

**File Upload Hover**
- Border Color: #2563eb
- Background: #eff6ff

**Upload Icon**
- Size: 48px
- Color: #9ca3af
- Margin Bottom: 12px

### Guidelines Card

**Card Base**
- Background: White
- Border: 1px solid #e5e7eb
- Border Radius: 12px
- Padding: 24px

**Guideline Item**
- Padding: 16px
- Border Radius: 8px
- Margin Bottom: 12px

**Item Colors**
- Video: Blue (#dbeafe background)
- Document: Green (#dcfce7 background)
- Image: Purple (#f3e8ff background)

**Item Icon**
- Size: 20px
- Color: Matching theme color
- Margin Right: 12px

**Item Title**
- Font Size: 14px
- Font Weight: 500
- Margin Bottom: 4px

**Item Description**
- Font Size: 13px
- Color: #6b7280
- Line Height: 1.5

**Best Practices List**
- Padding Top: 16px
- Border Top: 1px solid #e5e7eb

**List Item**
- Display: Flex
- Gap: 8px
- Margin Bottom: 12px
- Font Size: 14px
- Line Height: 1.5

**CheckCircle Icon**
- Size: 16px
- Color: #16a34a
- Flex Shrink: 0
- Margin Top: 2px

### Learner Progress Table

**Table Container**
- Border: 1px solid #e5e7eb
- Border Radius: 12px
- Overflow: Hidden

**Table Header**
- Background: #f9fafb
- Border Bottom: 1px solid #e5e7eb
- Font Weight: 600
- Font Size: 13px
- Color: #374151
- Text Transform: Uppercase
- Letter Spacing: 0.5px

**Table Cell**
- Padding: 16px
- Border Bottom: 1px solid #e5e7eb
- Font Size: 14px

**Table Row Hover**
- Background: #f9fafb

**Learner Name**
- Font Weight: 500
- Color: #111827

**Learner Email**
- Font Size: 13px
- Color: #6b7280
- Margin Top: 2px

**Progress Mini Bar**
- Width: 64px
- Height: 8px
- Background: #e5e7eb
- Border Radius: 4px
- Display: Inline block

**Status Badge**
- Active: Green (#dcfce7 bg, #166534 text)
- Inactive: Gray (#f3f4f6 bg, #6b7280 text)
- Padding: 4px 10px
- Border Radius: 12px
- Font Size: 12px
- Font Weight: 500

---

## 🎨 Shared Components

### Offline Indicator

**Position**
- Fixed bottom
- Left: 24px (desktop)
- Left: 16px (mobile)
- Right: 16px (mobile, full width)
- Z-index: 100

**Container**
- Background: #fef3c7 (yellow-100)
- Border: 1px solid #fbbf24 (yellow-400)
- Border Radius: 8px
- Padding: 12px 16px
- Box Shadow: Level 3

**Icon**
- Size: 20px
- Color: #92400e (yellow-800)
- Margin Right: 12px

**Text**
- Font Size: 14px
- Color: #92400e
- Font Weight: 500

### Loading Spinner

**Spinner**
- Size: 40px
- Border: 3px solid #e5e7eb
- Border Top: 3px solid #2563eb
- Border Radius: 50%
- Animation: spin 1s linear infinite

**Sizes**
- Small: 24px
- Medium: 40px (default)
- Large: 56px

### Toast Notifications

**Container**
- Position: Fixed top-right
- Top: 24px
- Right: 24px
- Z-index: 9999
- Width: 356px (desktop)
- Width: calc(100% - 32px) (mobile)

**Toast Item**
- Background: White
- Border: 1px solid #e5e7eb
- Border Radius: 8px
- Padding: 16px
- Box Shadow: Level 4
- Animation: slideIn 200ms ease

**Success Toast**
- Border Left: 4px solid #22c55e
- Icon: CheckCircle, green

**Error Toast**
- Border Left: 4px solid #ef4444
- Icon: XCircle, red

**Info Toast**
- Border Left: 4px solid #2563eb
- Icon: Info, blue

**Toast Title**
- Font Size: 14px
- Font Weight: 600
- Color: #111827
- Margin Bottom: 4px

**Toast Description**
- Font Size: 13px
- Color: #6b7280

---

## 📱 Mobile-Specific Components

### Mobile Navigation Menu

**Overlay**
- Position: Fixed
- Inset: 0
- Background: rgba(0, 0, 0, 0.5)
- Z-index: 999
- Backdrop Filter: Blur(4px)

**Menu Panel**
- Position: Fixed
- Right: 0
- Top: 0
- Bottom: 0
- Width: 280px
- Background: White
- Box Shadow: Level 5
- Transform: translateX(100%) (closed)
- Transform: translateX(0) (open)
- Transition: 300ms ease

**Menu Item**
- Padding: 16px 24px
- Border Bottom: 1px solid #e5e7eb
- Font Size: 16px
- Color: #374151

**Menu Item Active**
- Background: #eff6ff
- Color: #2563eb
- Border Left: 4px solid #2563eb

### Bottom Sheet (Mobile Filters)

**Sheet Container**
- Position: Fixed
- Bottom: 0
- Left: 0
- Right: 0
- Background: White
- Border Radius: 16px 16px 0 0
- Box Shadow: 0 -4px 24px rgba(0,0,0,0.15)
- Max Height: 80vh
- Z-index: 1000

**Handle**
- Width: 48px
- Height: 4px
- Background: #d1d5db
- Border Radius: 2px
- Margin: 12px auto
- Cursor: grab

**Sheet Content**
- Padding: 0 24px 24px 24px
- Overflow Y: Auto

---

## 🎨 Animation Specifications

### Transitions
```css
/* Button Hover */
transition: all 150ms ease-in-out;

/* Card Hover */
transition: transform 300ms ease, box-shadow 300ms ease;

/* Modal Open */
transition: opacity 200ms ease-in, transform 200ms ease-in;

/* Dropdown */
transition: opacity 150ms ease-out, transform 150ms ease-out;
```

### Keyframe Animations
```css
/* Fade In */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide Up */
@keyframes slideUp {
  from {
    transform: translateY(16px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Spin (Loading) */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Shimmer (Skeleton) */
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}
```

---

**Last Updated**: October 27, 2025  
**Version**: 2.0  
**Maintained By**: SAFE-MIT Development Team
