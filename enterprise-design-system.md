# Enterprise Design System

## Context and Goals

The Enterprise design system provides a clean, high-contrast visual foundation for data-driven workflows with intuitive drag-and-drop patterns and structured layouts. This system prioritizes accessibility (WCAG 2.2 AA), keyboard-first interactions, and consistent component behavior across all enterprise applications.

**Design Intent:** Create a professional, accessible interface system that enables users to efficiently manage complex data workflows through clear visual hierarchy and predictable interaction patterns.

---

## Design Tokens and Foundations

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--color-primary` | `#072C2C` | Primary actions, brand elements, active states |
| `--color-secondary` | `#FF5F03` | Secondary actions, highlights, CTAs |
| `--color-success` | `#16A34A` | Success states, confirmations, positive metrics |
| `--color-warning` | `#D97706` | Warning states, cautions, pending actions |
| `--color-danger` | `#DC2626` | Error states, destructive actions, critical alerts |
| `--color-surface` | `#EDEADE` | Background surfaces, cards, panels |
| `--color-text` | `#111827` | Primary text content |

**Contrast Requirements:**
- All text on surface backgrounds must maintain minimum 4.5:1 contrast ratio
- Interactive elements must maintain 3:1 contrast against adjacent colors
- Focus indicators must have 3:1 contrast against both the element and background

### Typography

**Font Families:**
- Primary: `Ubuntu`, sans-serif
- Display: `Oswald`, sans-serif
- Mono: `Ubuntu Mono`, monospace

**Type Scale (Desktop-First):**

| Token | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| `--text-display-lg` | 48px | 56px | 700 | Hero headings, major sections |
| `--text-display-md` | 36px | 44px | 700 | Page titles |
| `--text-heading-lg` | 28px | 36px | 600 | Section headers |
| `--text-heading-md` | 24px | 32px | 600 | Subsection headers |
| `--text-heading-sm` | 20px | 28px | 600 | Card titles, group labels |
| `--text-body-lg` | 18px | 28px | 400 | Lead paragraphs |
| `--text-body-md` | 16px | 24px | 400 | Body content |
| `--text-body-sm` | 14px | 20px | 400 | Secondary text, captions |
| `--text-label` | 12px | 16px | 500 | Form labels, metadata |
| `--text-mono` | 14px | 20px | 400 | Code, technical data |

**Available Weights:** 100, 200, 300, 400, 500, 600, 700, 800, 900

### Spacing Scale

Comfortable density mode with 4px base unit:

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 4px | Tight internal spacing |
| `--space-sm` | 8px | Compact component spacing |
| `--space-md` | 16px | Standard element gaps |
| `--space-lg` | 24px | Section spacing |
| `--space-xl` | 32px | Major section divisions |
| `--space-2xl` | 48px | Page-level spacing |
| `--space-3xl` | 64px | Large layout gaps |

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-none` | 0 | Tables, data grids |
| `--radius-sm` | 4px | Buttons, inputs, badges |
| `--radius-md` | 8px | Cards, modals, drawers |
| `--radius-lg` | 12px | Large containers, panels |
| `--radius-full` | 9999px | Avatars, pills, toggles |

### Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle elevation |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.07)` | Cards, dropdowns |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.1)` | Modals, popovers |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.15)` | Floating panels |

### Motion

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | 150ms | Micro-interactions, hover states |
| `--duration-normal` | 250ms | Standard transitions |
| `--duration-slow` | 400ms | Complex animations, page transitions |
| `--easing-default` | `cubic-bezier(0.4, 0, 0.2, 1)` | Standard easing |

**Motion Guidelines:**
- All motion must be purposeful and support user understanding
- Respect `prefers-reduced-motion` media query
- Avoid decorative animations in data-heavy interfaces

---

## Component-Level Rules

### Buttons

**Anatomy:**
- Container with padding, label/content, optional icon
- Minimum hit area: 44×44px

**Variants:**
- `primary`: Filled with primary color
- `secondary`: Outlined or secondary color
- `tertiary`: Text-only or ghost style
- `danger`: Destructive action styling

**States:**

| State | Background | Text | Border | Notes |
|-------|------------|------|--------|-------|
| default | `--color-primary` | white | transparent | Default appearance |
| hover | darken(primary, 10%) | white | transparent | 150ms transition |
| focus-visible | primary | white | 2px solid secondary | 2px offset from edge |
| active | darken(primary, 15%) | white | transparent | Slight scale down (0.98) |
| disabled | `--color-surface` | gray-400 | transparent | opacity: 0.5, pointer-events: none |
| loading | primary | transparent | transparent | Show spinner, disable clicks |

**Spacing:**
- Padding: `--space-sm` `--space-md` (sm), `--space-md` `--space-lg` (md), `--space-lg` `--space-xl` (lg)
- Icon gap: `--space-sm`

**Responsive Behavior:**
- Full width on mobile (< 640px) for primary CTAs
- Stack vertically in groups on narrow screens

**Accessibility:**
- Must have accessible name (text or aria-label)
- Loading state must announce to screen readers
- Disabled buttons should explain why (tooltip or aria-describedby)

---

### Inputs (Text, Email, Password, etc.)

**Anatomy:**
- Label (required)
- Input field
- Helper text (optional)
- Error message (conditional)

**States:**

| State | Border | Background | Notes |
|-------|--------|------------|-------|
| default | gray-300 | white | Standard appearance |
| hover | gray-400 | white | Subtle border darkening |
| focus | primary (2px) | white | Remove default outline |
| error | danger | white | Show error message below |
| disabled | gray-200 | gray-50 | No interaction, reduced opacity |
| readonly | transparent | gray-50 | Non-editable but focusable |

**Typography:**
- Label: `--text-label`, weight 500
- Input text: `--text-body-md`
- Helper/error: `--text-body-sm`

**Spacing:**
- Label to input: `--space-xs`
- Input to helper/error: `--space-xs`
- Vertical padding: `--space-sm`
- Horizontal padding: `--space-md`

**Required Features:**
- Clear button for text inputs with content (X icon)
- Show/hide toggle for password fields
- Autocomplete attributes for form fields

**Accessibility:**
- Every input must have associated label (for/id or aria-labelledby)
- Error messages must be linked via aria-describedby
- Required fields indicated visually AND programmatically (aria-required)
- Minimum touch target: 44px height

---

### Forms

**Layout Patterns:**
- Single column for mobile, two-column max for desktop
- Group related fields with fieldset/legend
- Align labels consistently (top-aligned recommended)

**Validation:**
- Real-time validation on blur for individual fields
- Submit triggers full form validation
- Inline errors appear immediately below field
- Success states shown after submission

**Spacing:**
- Between fields: `--space-md`
- Between field groups: `--space-xl`
- Form actions: `--space-lg` top margin

**Accessibility:**
- Use fieldset/legend for grouped controls
- aria-invalid="true" on invalid fields
- aria-live="polite" for dynamic error summaries
- Keyboard navigation follows visual order

---

### Selects / Comboboxes

**Anatomy:**
- Label
- Trigger button (shows selected value)
- Dropdown menu
- Options list

**Behavior:**
- Click/tap opens dropdown
- Type-ahead filtering for combobox variant
- Arrow keys navigate options when open
- Enter/Space selects focused option
- Escape closes without selection

**States:** Same as inputs plus:
- Open: Menu visible, arrow rotated 180°
- Multi-select: Shows chips for selected items

**Accessibility:**
- Custom select must use listbox pattern (role="listbox")
- Option role for each item
- aria-selected for current selection
- aria-expanded on trigger

---

### Checkboxes / Radios / Switches

**Checkboxes:**
- Square container (20×20px)
- Checkmark icon when selected
- Supports indeterminate state
- Label clickable (extends hit area)

**Radios:**
- Circular container (20×20px)
- Filled dot when selected
- Mutually exclusive within group
- Label clickable

**Switches:**
- Track: 44×24px
- Thumb: 20×20px circle
- Left = off, Right = on
- Smooth slide animation (150ms)

**Spacing:**
- Control to label: `--space-sm`
- Between items in group: `--space-md`

**Accessibility:**
- Native input hidden but focusable
- Custom visuals synced with input state
- aria-checked for checkboxes/radios
- aria-pressed or role="switch" for toggles

---

### Cards

**Anatomy:**
- Container with background, border, shadow
- Header (optional): title, actions
- Content area
- Footer (optional): actions, metadata

**Variants:**
- Elevated (shadow)
- Outlined (border only)
- Flat (background only)

**Spacing:**
- Internal padding: `--space-lg`
- Header to content: `--space-md`
- Content to footer: `--space-md`

**Interactive Cards:**
- Hover: Elevate shadow, cursor pointer
- Focus: Visible focus ring
- Selected: Primary border or background tint

**Responsive:**
- Stack vertically on mobile
- Grid layout on desktop (auto-fit, minmax)

---

### Tables

**Anatomy:**
- Table header (thead)
- Table body (tbody)
- Rows with cells
- Optional: footer, caption

**Density:**
- Comfortable: Row height 56px
- Compact: Row height 48px (data-dense only)

**Features:**
- Sortable columns (click header)
- Resizable columns (drag handle)
- Selectable rows (checkbox first column)
- Sticky header on scroll
- Horizontal scroll for overflow

**Spacing:**
- Cell padding: `--space-md`
- Header/body divider: 2px border

**Accessibility:**
- scope attributes on th elements
- aria-sort for sortable columns
- Caption or aria-label for table purpose
- Row selection announced to screen readers

---

### Data Grids

**Enhanced Table Features:**
- Virtualized rendering for large datasets
- Column pinning (left/right)
- Column hiding/showing
- Filtering per column
- Grouping and aggregation
- Inline editing
- Pagination or infinite scroll

**Performance:**
- Render only visible rows (+ buffer)
- Debounce resize events
- Memoize cell components

---

### Charts

**Supported Types:**
- Bar/Column charts
- Line charts
- Area charts
- Pie/Donut charts
- Scatter plots
- Heat maps

**Requirements:**
- High contrast colors (colorblind-safe palette)
- Data labels or tooltips
- Axis labels with units
- Legend with clear labels
- Responsive sizing

**Accessibility:**
- SVG with proper roles
- aria-label describing chart type and data summary
- Data table alternative available
- Keyboard navigable data points

---

### Badges / Chips

**Variants:**
- Solid (filled background)
- Outline (border only)
- Soft (tinted background)

**Sizes:**
- Sm: 20px height, 12px text
- Md: 24px height, 14px text
- Lg: 28px height, 16px text

**Colors:**
- Neutral, primary, success, warning, danger

**Removable Chips:**
- X icon on right
- 20×20px hit area for remove button

---

### Modals

**Anatomy:**
- Overlay/backdrop (semi-transparent)
- Dialog container
- Header (title + close button)
- Content
- Footer (actions)

**Sizes:**
- Sm: 400px max-width
- Md: 600px max-width
- Lg: 800px max-width
- Xl: 1000px max-width
- Full: 100% viewport

**Behavior:**
- Trap focus within modal
- Close on Escape key
- Close on overlay click (configurable)
- Prevent body scroll when open
- Return focus to trigger on close

**Accessibility:**
- role="dialog", aria-modal="true"
- aria-labelledby pointing to title
- Initial focus on first interactive element or close button
- Announce modal opening to screen readers

---

### Navigation (Sidebars, Top Bars)

**Sidebar:**
- Fixed or collapsible
- Width: 240px (expanded), 64px (collapsed)
- Sections with headers
- Active state indicator (left border or background)

**Top Bar:**
- Height: 64px
- Logo left, actions right
- Sticky on scroll (optional)
- Breadcrumbs below (optional)

**Navigation Items:**
- Icon + label (sidebar)
- Text or icon (top bar)
- Hover and focus states required
- Current page clearly indicated

**Accessibility:**
- nav element with aria-label
- Current page: aria-current="page"
- Collapsible sections: aria-expanded
- Skip link to main content

---

### Tabs

**Anatomy:**
- Tab list container
- Tab buttons
- Tab panels

**Behavior:**
- Click tab activates panel
- Arrow keys navigate tabs
- Home/End for first/last tab
- Automatic activation (no Enter needed)

**Spacing:**
- Between tabs: `--space-lg` gap or divider
- Tab padding: `--space-md` `--space-lg`
- Tab panel padding: `--space-lg`

**Accessibility:**
- role="tablist", role="tab", role="tabpanel"
- aria-selected on active tab
- aria-controls linking tab to panel
- Only active panel in tab order

---

### Alerts / Toasts

**Alert Variants:**
- Info (blue/primary)
- Success (green)
- Warning (amber)
- Error (red)

**Anatomy:**
- Icon (leading)
- Title (optional)
- Message
- Dismiss button (optional)
- Actions (optional)

**Toast Behavior:**
- Auto-dismiss after 5 seconds (non-critical)
- Persist until dismissed (errors)
- Stack vertically, newest at top
- Max 3 visible, queue others

**Placement:**
- Alerts: Inline in content flow
- Toasts: Top-right or bottom-right corner

**Accessibility:**
- role="alert" for assertive announcements
- role="status" for polite announcements
- aria-live region for dynamic updates
- Dismiss button with clear label

---

### Pagination

**Elements:**
- Previous button
- Page numbers
- Next button
- Optional: Jump to page, items per page

**Behavior:**
- Current page highlighted
- Ellipsis for skipped ranges
- Disabled state at boundaries

**Spacing:**
- Button size: 40×40px minimum
- Gap between buttons: `--space-xs`

**Accessibility:**
- aria-current="page" on current page
- aria-label on prev/next buttons
- Navigate with keyboard
- Announce page changes

---

### Progress Indicators

**Linear Progress:**
- Horizontal bar
- Determinate (known progress)
- Indeterminate (unknown duration)

**Circular Progress:**
- Ring with animated stroke
- Percentage in center (optional)

**Sizing:**
- Sm: 4px height (inline)
- Md: 8px height (standard)
- Lg: 12px height (prominent)

**Accessibility:**
- role="progressbar"
- aria-valuenow, aria-valuemin, aria-valuemax
- aria-label describing what's loading
- Indeterminate: aria-indeterminate="true"

---

### Skeletons

**Purpose:**
- Show content structure during load
- Reduce perceived wait time
- Prevent layout shift

**Patterns:**
- Match final content layout
- Animated shimmer effect
- Vary widths for natural appearance

**Accessibility:**
- aria-busy="true" on loading container
- Hide from screen readers until loaded
- Announce when content ready

---

### Search

**Components:**
- Search input
- Search button/icon
- Results dropdown (optional)
- Advanced filters (optional)

**Behavior:**
- Debounce input (300ms)
- Show recent searches
- Highlight matches in results
- Clear button when has content

**Keyboard:**
- Down arrow opens results
- Up/Down navigate results
- Enter selects or searches
- Escape closes results

**Accessibility:**
- role="search" on container
- aria-expanded on results
- aria-activedescendant for focused result
- Announce result count

---

### Empty States

**Elements:**
- Illustration or icon
- Title explaining emptiness
- Description with context
- Call-to-action button

**Tone:**
- Helpful, not apologetic
- Guide user to next step
- Friendly but professional

**Examples:**
- "No results found" → Suggest filters
- "No items yet" → CTA to create
- "No notifications" → Explain when they appear

---

## Accessibility Requirements

### WCAG 2.2 AA Compliance

**Perceivable:**
- All non-text content has alt text or equivalent
- Color never used as sole means of conveying information
- Minimum contrast ratio 4.5:1 for text, 3:1 for UI components
- Content reflowable at 400% zoom without loss

**Operable:**
- All functionality keyboard accessible
- No keyboard traps
- Skip links provided
- Focus order logical and meaningful
- Focus visible and clear
- No timing requirements (or extendable)
- Seizure-safe (no flashing > 3Hz)

**Understandable:**
- Language declared
- Consistent navigation patterns
- Predictable behavior
- Input errors identified and described
- Labels and instructions provided

**Robust:**
- Valid HTML
- Complete ARIA where needed
- Name, role, value for custom widgets
- Status messages announced

### Testable Acceptance Criteria

1. **Keyboard Navigation:**
   - [ ] Tab through all interactive elements
   - [ ] No element requires mouse-only interaction
   - [ ] Focus visible on every focusable element
   - [ ] Focus order matches visual order

2. **Screen Reader:**
   - [ ] All images have alt text (or aria-hidden if decorative)
   - [ ] Form fields have accessible names
   - [ ] Dynamic changes announced (aria-live)
   - [ ] Custom widgets expose correct roles/states

3. **Visual:**
   - [ ] Contrast ratios meet 4.5:1 minimum
   - [ ] Focus indicators visible at all zoom levels
   - [ ] Hit areas minimum 44×44px
   - [ ] No information conveyed by color alone

4. **Cognitive:**
   - [ ] Clear, concise labels
   - [ ] Error messages explain how to fix
   - [ ] Consistent patterns throughout
   - [ ] Time limits can be extended or disabled

---

## Content and Tone Standards

### Writing Principles

**Tone:** Confident, helpful, friendly, professional

**Guidelines:**
- Use active voice
- Be concise but clear
- Avoid jargon unless domain-standard
- Address user directly ("you")
- Front-load important information

### Label Standards

**Buttons:**
- Use verbs for actions: "Save", "Delete", "Export"
- Be specific: "Save Changes" not "Submit"
- Keep under 3 words when possible

**Form Fields:**
- Use noun phrases: "Email address", "Start date"
- Match user's mental model
- Placeholder ≠ label (use both appropriately)

**Errors:**
- Explain what went wrong
- Explain how to fix it
- Avoid blame: "Password must be 8+ characters" not "You entered an invalid password"

**Empty States:**
- Acknowledge the situation
- Provide context
- Offer clear next step

### Examples

**Good:**
- "No projects yet. Create your first project to get started."
- "Connection failed. Check your network and try again."
- "Password must include 8+ characters, one number, and one symbol."

**Avoid:**
- "Error 404: Resource not found"
- "Invalid input detected"
- "You don't have any items here"

---

## Anti-Patterns and Prohibited Implementations

### Visual Anti-Patterns

❌ **Low Contrast Text**
```css
/* Don't: Gray text on light background */
color: #999999;
background: #ffffff;

/* Do: Ensure 4.5:1 minimum */
color: #4B5563;
background: #ffffff;
```

❌ **Inconsistent Spacing**
```css
/* Don't: Arbitrary pixel values */
padding: 13px;
margin: 7px;

/* Do: Use spacing tokens */
padding: var(--space-md);
margin: var(--space-sm);
```

❌ **Decorative Motion Without Purpose**
```css
/* Don't: Continuous spinning, bouncing */
animation: spin 2s infinite;

/* Do: Purposeful motion only */
transition: transform 150ms ease; /* On hover/focus */
```

### Interaction Anti-Patterns

❌ **Ambiguous Labels**
```html
<!-- Don't -->
<button>Click here</button>
<a>Read more</a>

<!-- Do -->
<button>Download Report</button>
<a>Read privacy policy</a>
```

❌ **Mixing Visual Metaphors**
```html
<!-- Don't: Flat icons with skeuomorphic buttons -->
<!-- Do: Consistent visual language throughout -->
```

❌ **Inaccessible Hit Areas**
```css
/* Don't: Tiny clickable regions */
.icon { width: 16px; height: 16px; }

/* Do: Extend hit area */
.icon-button {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### Structural Anti-Patterns

❌ **Div Soup Instead of Semantic HTML**
```html
<!-- Don't -->
<div class="nav">
  <div class="nav-item">...</div>
</div>

<!-- Do -->
<nav aria-label="Main navigation">
  <ul>
    <li><a href="...">...</a></li>
  </ul>
</nav>
```

❌ **Focus Management Issues**
- Opening modal without trapping focus
- Not returning focus after closing dialog
- Removing focus outline globally (`outline: none`)

❌ **Color-Only Information**
```html
<!-- Don't: Red text alone indicates error -->
<span style="color: red">Required</span>

<!-- Do: Add icon or text indicator -->
<span class="error-indicator">
  <IconError /> Required
</span>
```

---

## QA Checklist

### Code Review Checklist

#### Tokens & Foundations
- [ ] Colors use semantic tokens, not hardcoded values
- [ ] Spacing uses scale tokens (--space-*)
- [ ] Typography uses type scale tokens
- [ ] Border radius and shadows use tokens

#### Components
- [ ] All required states implemented (default, hover, focus, active, disabled)
- [ ] Focus-visible styles present and visible
- [ ] Loading states show appropriate feedback
- [ ] Error states clearly communicate issues
- [ ] Responsive behavior tested at breakpoints

#### Accessibility
- [ ] Semantic HTML elements used appropriately
- [ ] ARIA attributes correctly applied
- [ ] Keyboard navigation works end-to-end
- [ ] Screen reader testing completed
- [ ] Color contrast meets 4.5:1 minimum
- [ ] Focus indicators visible and clear
- [ ] Hit areas minimum 44×44px
- [ ] Form labels properly associated
- [ ] Error messages linked to inputs

#### Content
- [ ] Labels are clear and action-oriented
- [ ] Error messages explain resolution
- [ ] No placeholder-only labels
- [ ] Alt text provided for meaningful images
- [ ] Decorative images marked aria-hidden

#### Performance
- [ ] No unnecessary re-renders
- [ ] Large lists virtualized or paginated
- [ ] Images optimized and lazy-loaded
- [ ] Animations respect prefers-reduced-motion

#### Cross-Browser
- [ ] Tested in Chrome, Firefox, Safari, Edge
- [ ] Mobile responsive verified
- [ ] Touch interactions work correctly

### Pre-Merge Verification

1. Run automated accessibility audit (axe, Lighthouse)
2. Manual keyboard navigation test
3. Screen reader spot-check (NVDA or VoiceOver)
4. Visual regression test if applicable
5. Confirm no console errors or warnings

---

## Migration Guidance

### From Inconsistent UI

**Step 1: Audit Existing Components**
- Inventory all button styles, input patterns, etc.
- Identify contrast violations
- Document accessibility gaps

**Step 2: Prioritize by Impact**
- Fix critical accessibility issues first
- Update high-traffic pages
- Address customer-reported problems

**Step 3: Incremental Adoption**
- Wrap legacy components with token adapters
- Create codemods for common patterns
- Update one component family at a time

**Step 4: Deprecation Strategy**
- Mark old components as deprecated
- Provide migration examples
- Set sunset timeline (e.g., 6 months)

### Common Migration Scenarios

**Hardcoded Colors → Tokens:**
```css
/* Before */
.button { background: #007bff; }

/* After */
.button { background: var(--color-primary); }
```

**Pixel Spacing → Scale:**
```css
/* Before */
.card { padding: 16px; margin: 12px; }

/* After */
.card { padding: var(--space-md); margin: var(--space-sm); }
```

**Div-Based Layout → Semantic:**
```html
<!-- Before -->
<div class="header">...</div>
<div class="nav">...</div>

<!-- After -->
<header>...</header>
<nav aria-label="...">...</nav>
```

---

## Implementation Resources

### Getting Started

1. Install design token package
2. Import base styles in app entry point
3. Apply CSS reset/normalization
4. Configure theme provider (if using CSS-in-JS)

### File Structure

```
design-system/
├── tokens/
│   ├── colors.css
│   ├── typography.css
│   ├── spacing.css
│   └── index.css
├── components/
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.styles.ts
│   │   └── Button.test.tsx
│   └── ...
├── hooks/
├── utils/
└── index.ts
```

### Versioning

- Follow semantic versioning (MAJOR.MINOR.PATCH)
- Breaking changes = MAJOR bump
- New features = MINOR bump
- Bug fixes = PATCH bump

### Support

- Documentation: [internal docs site]
- Component stories: Storybook
- Issue tracking: [project board]
- Office hours: Weekly design-engineering sync
