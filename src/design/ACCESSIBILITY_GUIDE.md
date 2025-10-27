# Accessibility Guide - SAFE-MIT Digital Platform

WCAG 2.1 AA compliance guidelines and implementation.

---

## ♿ Overview

The SAFE-MIT Digital Platform is committed to providing an accessible experience for all users, including those with disabilities. This guide outlines our accessibility standards and implementation details.

**Compliance Level**: WCAG 2.1 AA

---

## 🎨 Color Contrast

### Text Contrast Requirements

**Normal Text** (< 18px or < 14px bold)
- Minimum Ratio: 4.5:1
- Examples:
  - ✅ `#374151` (gray-700) on `#ffffff` (white) = 9.7:1
  - ✅ `#2563eb` (primary-600) on `#ffffff` (white) = 4.9:1
  - ❌ `#9ca3af` (gray-400) on `#ffffff` (white) = 2.8:1

**Large Text** (≥ 18px or ≥ 14px bold)
- Minimum Ratio: 3:1
- Examples:
  - ✅ `#6b7280` (gray-500) on `#ffffff` (white) = 4.6:1
  - ✅ `#60a5fa` (primary-400) on `#ffffff` (white) = 3.3:1

**UI Components & Graphics**
- Minimum Ratio: 3:1
- Examples:
  - ✅ Form borders: `#d1d5db` (gray-300) on `#ffffff` = 3.1:1
  - ✅ Focus outlines: `#2563eb` on `#ffffff` = 4.9:1

### Color Combinations Used

```css
/* Approved Text Combinations */
--text-on-white: #374151 (gray-700)     /* 9.7:1 */
--heading-on-white: #111827 (gray-900)  /* 16.3:1 */
--secondary-text: #6b7280 (gray-500)    /* 4.6:1 */

/* Approved Link Colors */
--link-default: #2563eb (primary-600)   /* 4.9:1 */
--link-hover: #1d4ed8 (primary-700)     /* 6.6:1 */

/* Status Colors on White */
--success-text: #166534 (green-700)     /* 5.5:1 */
--warning-text: #92400e (yellow-800)    /* 5.3:1 */
--error-text: #991b1b (red-800)         /* 6.4:1 */

/* Background Combinations */
--text-on-primary: #ffffff on #2563eb   /* 4.9:1 */
--text-on-dark: #ffffff on #111827      /* 16.3:1 */
```

### Testing Color Contrast

**Tools**
1. WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
2. Chrome DevTools: Lighthouse Accessibility Audit
3. WAVE Browser Extension

**Testing Process**
```javascript
// Example: Check if contrast meets WCAG AA
function checkContrast(foreground, background) {
  const ratio = getContrastRatio(foreground, background);
  const largeText = ratio >= 3.0;
  const normalText = ratio >= 4.5;
  
  return {
    ratio,
    passesAALarge: largeText,
    passesAANormal: normalText,
  };
}
```

---

## ⌨️ Keyboard Navigation

### Tab Order & Focus Management

**Focus Visible Indicator**
```css
*:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
  border-radius: 4px;
}

/* High Contrast Mode */
@media (prefers-contrast: high) {
  *:focus-visible {
    outline-width: 3px;
    outline-offset: 3px;
  }
}
```

**Skip Links**
```html
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #2563eb;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  z-index: 100;
  border-radius: 0 0 4px 0;
}

.skip-link:focus {
  top: 0;
}
</style>
```

### Keyboard Shortcuts

**Global Navigation**
- `Tab`: Move forward through interactive elements
- `Shift + Tab`: Move backward
- `Enter`: Activate links and buttons
- `Space`: Activate buttons, toggle checkboxes
- `Esc`: Close modals and dropdowns

**Component-Specific**
- **Accordion**: `Space/Enter` to expand/collapse
- **Dropdown Menu**: `Arrow Up/Down` to navigate, `Esc` to close
- **Tabs**: `Arrow Left/Right` to switch tabs
- **Modal**: Trap focus within modal, `Esc` to close
- **Quiz**: `Arrow Up/Down` for radio options, `Space` for checkboxes

### Implementation Examples

**Modal Focus Trap**
```typescript
function trapFocus(modal: HTMLElement) {
  const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  });
}
```

---

## 🔊 Screen Reader Support

### Semantic HTML

**Use Proper HTML Elements**
```html
<!-- ✅ Correct -->
<button>Submit</button>
<nav>...</nav>
<main>...</main>
<article>...</article>

<!-- ❌ Incorrect -->
<div onclick="submit()">Submit</div>
<div class="navigation">...</div>
```

### ARIA Labels & Descriptions

**Navigation**
```html
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/info-hub">Information Hub</a></li>
  </ul>
</nav>
```

**Buttons with Icons Only**
```html
<button aria-label="Close modal">
  <XIcon aria-hidden="true" />
</button>

<button aria-label="Download campaign">
  <DownloadIcon aria-hidden="true" />
  Download
</button>
```

**Form Inputs**
```html
<div>
  <label for="email">Email Address</label>
  <input 
    id="email" 
    type="email"
    aria-required="true"
    aria-describedby="email-help"
  />
  <span id="email-help" class="help-text">
    We'll never share your email
  </span>
</div>

<!-- Error State -->
<input 
  id="password"
  type="password"
  aria-invalid="true"
  aria-describedby="password-error"
/>
<span id="password-error" role="alert" class="error">
  Password must be at least 8 characters
</span>
```

**Dynamic Content**
```html
<!-- Live Region for Status Updates -->
<div aria-live="polite" aria-atomic="true">
  Quiz submitted successfully!
</div>

<!-- Urgent Updates -->
<div aria-live="assertive" role="alert">
  Connection lost. Please check your internet.
</div>
```

**Loading States**
```html
<div role="status" aria-live="polite">
  <span class="spinner" aria-hidden="true"></span>
  <span class="sr-only">Loading...</span>
</div>
```

### Component ARIA Patterns

**Accordion**
```html
<div class="accordion">
  <button 
    aria-expanded="false"
    aria-controls="faq-1"
    id="accordion-header-1"
  >
    Question 1
  </button>
  <div 
    id="faq-1"
    role="region"
    aria-labelledby="accordion-header-1"
    hidden
  >
    Answer content...
  </div>
</div>
```

**Tabs**
```html
<div role="tablist" aria-label="Training sections">
  <button 
    role="tab" 
    aria-selected="true"
    aria-controls="panel-1"
    id="tab-1"
  >
    Lessons
  </button>
  <button 
    role="tab" 
    aria-selected="false"
    aria-controls="panel-2"
    id="tab-2"
  >
    Quiz
  </button>
</div>

<div role="tabpanel" id="panel-1" aria-labelledby="tab-1">
  Lesson content...
</div>
```

**Modal Dialog**
```html
<div 
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">Share Campaign</h2>
  <p id="modal-description">Choose a platform to share</p>
  
  <button aria-label="Close dialog">×</button>
  
  <!-- Modal content -->
</div>
```

**Progress Bar**
```html
<div 
  role="progressbar"
  aria-valuenow="45"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-label="Module completion"
>
  <div style="width: 45%"></div>
</div>
```

---

## 🖼️ Images & Media

### Alternative Text

**Informative Images**
```html
<!-- Good -->
<img 
  src="migration-guide.jpg"
  alt="Safe migration guide showing required documents"
/>

<!-- Bad -->
<img src="guide.jpg" alt="image" />
```

**Decorative Images**
```html
<img src="decoration.svg" alt="" role="presentation" />
<!-- OR -->
<img src="decoration.svg" aria-hidden="true" />
```

**Complex Images (Charts, Infographics)**
```html
<figure>
  <img 
    src="analytics-chart.png"
    alt="Line chart showing user growth from January to October"
  />
  <figcaption>
    User growth increased from 10,000 in January to 45,000 in October,
    representing a 350% increase.
  </figcaption>
</figure>
```

### Video & Audio

**Video Player**
```html
<video controls>
  <source src="safe-migration.mp4" type="video/mp4" />
  <track 
    kind="captions"
    src="captions-en.vtt"
    srclang="en"
    label="English"
    default
  />
  <track 
    kind="captions"
    src="captions-fr.vtt"
    srclang="fr"
    label="Français"
  />
  <p>
    Your browser doesn't support video. 
    <a href="safe-migration.mp4">Download the video</a>
  </p>
</video>
```

**Audio Player**
```html
<audio controls>
  <source src="podcast.mp3" type="audio/mpeg" />
  <track 
    kind="descriptions"
    src="transcript.vtt"
    label="Transcript"
  />
  <p>
    Your browser doesn't support audio.
    <a href="podcast.mp3">Download the audio</a>
  </p>
</audio>
```

---

## 📱 Mobile Accessibility

### Touch Targets

**Minimum Sizes**
```css
/* All Interactive Elements */
.interactive {
  min-width: 44px;
  min-height: 44px;
  /* iOS recommendation */
}

@media (max-width: 768px) {
  .interactive {
    min-width: 48px;
    min-height: 48px;
    /* Android recommendation */
  }
}
```

**Spacing Between Targets**
```css
.button-group button {
  margin: 4px; /* Minimum 8px total spacing */
}
```

### Orientation Support

```css
/* Support both portrait and landscape */
@media (orientation: landscape) {
  .hero-section {
    min-height: 400px; /* Reduce for landscape */
  }
}

@media (orientation: portrait) {
  .hero-section {
    min-height: 600px;
  }
}
```

### Zoom & Reflow

**Text Resizing**
- Support up to 200% zoom
- No horizontal scrolling at 320px width
- Text reflows without loss of content

```css
/* Use relative units */
body {
  font-size: 16px; /* Base */
}

h1 {
  font-size: 2.25rem; /* Scales with user preferences */
}

/* Avoid fixed widths */
.container {
  max-width: 100%;
  padding: 1rem;
}
```

---

## 🌍 Internationalization & RTL

### Language Attributes
```html
<html lang="en">
  <!-- English content -->
</html>

<html lang="ar" dir="rtl">
  <!-- Arabic content -->
</html>

<!-- Language switching -->
<span lang="fr">Bienvenue</span>
<span lang="sw">Karibu</span>
```

### RTL Support

**Logical Properties**
```css
/* Instead of margin-left */
.element {
  margin-inline-start: 1rem;
}

/* Instead of text-align: left */
.text {
  text-align: start;
}

/* Instead of padding-right */
.box {
  padding-inline-end: 2rem;
}
```

**RTL Specific Styles**
```css
[dir="rtl"] .icon-before {
  margin-inline-end: 0.5rem;
  /* Same as: margin-left: 0.5rem in LTR */
}

[dir="rtl"] .dropdown {
  left: auto;
  right: 0;
}
```

---

## 📋 Forms Accessibility

### Label Association

```html
<!-- Explicit Association -->
<label for="username">Username</label>
<input id="username" type="text" />

<!-- Implicit Association -->
<label>
  Email
  <input type="email" />
</label>
```

### Required Fields

```html
<label for="email">
  Email Address
  <span aria-label="required">*</span>
</label>
<input 
  id="email"
  type="email"
  required
  aria-required="true"
/>
```

### Error Messages

```html
<div>
  <label for="password">Password</label>
  <input 
    id="password"
    type="password"
    aria-invalid="true"
    aria-describedby="password-error"
  />
  <span id="password-error" role="alert" class="error">
    <span aria-hidden="true">⚠</span>
    Password must be at least 8 characters
  </span>
</div>
```

### Fieldset & Legend

```html
<fieldset>
  <legend>Language Preference</legend>
  <label>
    <input type="radio" name="lang" value="en" />
    English
  </label>
  <label>
    <input type="radio" name="lang" value="fr" />
    Français
  </label>
</fieldset>
```

---

## 🎭 Motion & Animation

### Reduced Motion

```css
/* Respect user preference */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Provide alternative */
@media (prefers-reduced-motion: reduce) {
  .fade-in {
    animation: none;
    opacity: 1;
  }
}
```

### Safe Animation Practices

```css
/* Avoid flashing */
.notification {
  animation: pulse 2s ease-in-out;
  /* Ensure < 3 flashes per second */
}

/* Provide pause controls */
<button aria-label="Pause animation">
  Pause
</button>
```

---

## 🧪 Testing Checklist

### Automated Testing

**Tools**
- ✅ axe DevTools (Chrome Extension)
- ✅ WAVE (Web Accessibility Evaluation Tool)
- ✅ Lighthouse Accessibility Audit
- ✅ Pa11y (CI/CD integration)

**Command Line**
```bash
# Run Pa11y
npx pa11y http://localhost:3000

# Run axe-core
npx @axe-core/cli http://localhost:3000
```

### Manual Testing

**Keyboard Navigation**
- [ ] Tab through all interactive elements
- [ ] Ensure logical tab order
- [ ] Test all keyboard shortcuts
- [ ] Check focus indicators are visible
- [ ] Test modal/dialog focus trap

**Screen Reader Testing**
- [ ] Test with NVDA (Windows)
- [ ] Test with JAWS (Windows)
- [ ] Test with VoiceOver (macOS/iOS)
- [ ] Test with TalkBack (Android)
- [ ] Verify all content is announced
- [ ] Check heading hierarchy
- [ ] Test form labels and errors

**Color & Contrast**
- [ ] Check all text contrasts
- [ ] Test with grayscale mode
- [ ] Verify no color-only information
- [ ] Test high contrast mode

**Zoom & Reflow**
- [ ] Test 200% zoom (browser)
- [ ] Check 320px mobile width
- [ ] Verify no horizontal scroll
- [ ] Test text resizing

**Mobile**
- [ ] Touch target sizes (44px min)
- [ ] Test with screen reader on mobile
- [ ] Verify gestures work
- [ ] Test orientation changes

---

## 📊 Accessibility Metrics

### Target Scores

**Lighthouse Accessibility**
- Target: 95+ / 100
- Current: 94 / 100

**axe DevTools**
- Critical Issues: 0
- Serious Issues: 0
- Moderate Issues: < 5
- Minor Issues: < 10

**WAVE**
- Errors: 0
- Contrast Errors: 0
- Alerts: Review each

---

## 📚 Resources

### Official Guidelines
- WCAG 2.1: https://www.w3.org/WAI/WCAG21/quickref/
- ARIA Authoring Practices: https://www.w3.org/WAI/ARIA/apg/

### Testing Tools
- axe DevTools: https://www.deque.com/axe/devtools/
- WAVE: https://wave.webaim.org/
- Lighthouse: Built into Chrome DevTools

### Screen Readers
- NVDA: https://www.nvaccess.org/
- JAWS: https://www.freedomscientific.com/products/software/jaws/
- VoiceOver: Built into macOS/iOS

---

## 🎯 Future Enhancements

### Phase 3 Accessibility Goals

1. **Personalization**
   - User-selectable color themes
   - Adjustable font sizes
   - High contrast mode toggle

2. **Enhanced ARIA**
   - More descriptive live regions
   - Better error handling
   - Improved status messages

3. **Advanced Navigation**
   - Breadcrumb trails
   - Table of contents
   - Landmark navigation

4. **Documentation**
   - Accessibility statement
   - User guides for assistive tech
   - Keyboard shortcuts reference

---

**Last Updated**: October 27, 2025  
**Compliance Level**: WCAG 2.1 AA  
**Maintained By**: SAFE-MIT Accessibility Team
