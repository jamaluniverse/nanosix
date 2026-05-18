# 📝 Documentation Log - website-nanosix

This log tracks the development progress, structural changes, and stylistic refinements made to the **nanosix** website.

---

## 📅 May 18, 2026

### **Golden Ratio Scale & Dynamic Responsive Polish**
- **Unified Golden Ratio Tokens**: Architected a strict, fluid mathematical Golden Ratio scale (1.618 multiplier) using CSS variables in `:root` (`--text-xs` through `--text-2xl`, `--space-xs` through `--space-xl`) driven by dynamic `clamp()` formulas.
- **Typography Scale Overhaul**: Applied the Golden Scale dynamically across all major layout components including the Hero eyebrow/headline, section headings, body text, about section labels, tickers, research cards, and footer links/headings.
- **Obsolete Media Query Cleanup**: Stripped out over 100 lines of legacy, hardcoded static media queries for `font-size` across tablet and mobile viewports, allowing fluid `clamp()` math to handle clean native scaling instead.
- **Hero Layout Harmony**: Custom-tailored the Hero Headline size (`clamp(2.618rem, 5vw + 1rem, 4.8rem)`) and bottom margin (`clamp(3rem, 5vw, 4.5rem)`) to prevent giant font sizes and squashed buttons on viewports between 1000px and 1400px.
- **CTA Button Refinement**: Scaled down `.btn-primary` typography and padding using fluid proportions to prevent oversized, bloated button wrappers, keeping them crisp and clickable.
- **About Description Tuning**: Adjusted `.about-left-col p` to `--text-base` with balanced line-height to guarantee the intro wraps beautifully to 2 lines on desktop/tablet and 3-4 lines on mobile.
- **Adaptive Product Cards**: Refactored description cards on desktop/tablet to use explicit dynamic height (`clamp(320px, 45vh, 420px)`) so all scrolling product cards remain exactly uniform, with proportional logos (`clamp(45px, 4.5vw, 65px)`) and adaptive font sizes.
- **Research Section Columnation**: Fixed space-inefficiency issues on small viewports by hardcoding a strict 2-column grid (`repeat(2, 1fr)`) for mobile and 3-column grid (`repeat(3, 1fr)`) for tablet in the stylesheet. Swapped rigid heights for fluid `min-height: auto` and tighter card paddings to make items act like compact, neat tags.

## 📅 May 12, 2026

### **B2B High-Fidelity Pivot (Barrier Group Style)**
- **Design System Overhaul**: Transitioned from rounded "startup" aesthetics to a sharp, structured industrial B2B layout. Enforced 0px to 4px border-radius across all components.
- **Hero Optimization**: Significantly reduced headline font size to improve readability and visual balance over the video background. Refined eyebrow text visibility and updated the CTA to a compact industrial style.
- **About & Vision**: Compressed section vertical space and implemented a grid-based information architecture for faster content consumption.
- **Values Ticker**: Replaced static value cards with a clean, high-end horizontal scrolling ticker strip to symbolize "Infinite Innovation."
- **Product Sticky Scroll 2.0**: Re-engineered sticky cards to use a sharp 1/3-width white block for descriptions, ensuring a professional data-focused presentation for enterprise clients.
- **Research Table**: Migrated the research/pipeline section from a card grid to a structured data table with inner lines, prioritizing information density and professional clarity.
- **People Section Refinement**: Removed decorative frames from team photos. Added official names and roles for Muhammad Fajar Putranto (CEO) and Fahmi Syarifuddin (Technical Lead).
- **Enterprise Footer**: Replaced the video-based footer with a clean, 4-column dark grid layout for high-trust industrial credibility.


## 📅 March 4, 2026

### **Header Animation & Styling Refresh**
- **Header Scrolled State**: Implemented a "pop-up scale" animation for the right pill (Action Buttons) in the header.
- **Dynamic Exit/Entry**: Configured the right pill to disappear when the header reaches the footer and reappear when scrolling back up.
- **Layout Expansion**: Ensured the navigation and logo pill expand to fill the void when the right pill is hidden.
- **Code Refactoring**: Consolidated inline styles into `style.css` and cleaned up `script.js`.
- **Smooth Auto-Scroll**: Implemented a fluid autoscroll effect for navigation links with a precise offset for the sticky header.
- **Responsive Header Layout**: Fixed a layout issue where the right pill was cropped on screens under 1136px by making the left pill flexible and introducing a specialized media query for navigation spacing.
- **Tablet Optimization (825px Breakpoint)**: Implemented a custom `tab` breakpoint in `tailwind.config` set to 825px. Updated the header to switch to the mobile menu and hide action buttons at this threshold to prevent the navigation from touching the logo.
- **Mobile Responsive Navigation**: Developed a full-screen mobile menu overlay for screens under 825px. The menu includes large navigation links and simplified, non-animated contact buttons (Call/Email) for better mobile UX.
- **Dynamic Logo Pill**: Adjusted the `#left-pill` to shrink and follow the logo's width exactly on mobile devices, ensuring a balanced header layout.
- **Mobile Spacing Refinement**: Reduced vertical spacing for the About, Vision, and Values sections on mobile to 1/3 of the desktop height (from `py-24` to `py-8`) for a more compact and mobile-friendly experience.
- **Horizontal Sticky Scroll (Mobile < 1025px)**: Reimagined the Features section for mobile and tablet devices. When users scroll vertically, the product cards now glide horizontally to the left, maintaining the "sticky" background transition effect while optimizing for horizontal screen real estate.
- **Enhanced Responsive Breakpoints**: Introduced a explicit `desktop` breakpoint at 1025px to switch between vertical (desktop) and horizontal (mobile) product presentations seamlessly.

### **Research Section Refinement**
- **Aesthetics**: Lightened the sage green background for better visual balance.
- **Typography**: Updated headings to uppercase with reduced size for a modern look.
- **Readability**: Relaxed paragraph line height and reduced font weight for better flow.
- **Tag Design**: Updated research tags with 'Sofia Sans', darker backgrounds, and subtle borders.

---

## 📅 March 3, 2026

### **Feature Cards Composition**
- **Content Strategy**: Implemented 8 performance-focused product cards for the N6 enhancement.
- **Layout Centering**: Wrapped feature cards in fullscreen containers (`min-h-screen`) to ensure perfect vertical centering during sticky scroll.
- **Branding**: Integrated product logos from the `element/product-logo` directory.

---

## 📅 March 2, 2026

### **Header Interactions (Phase 2)**
- **Transition Effects**: Replaced abrupt `display: block/none` switches with smooth sliding animations for the Call and Email panels.
- **Micro-animations**: Added icon slide-out effects and synchronized pill transition timing.
- **State Management**: Refactored panel visibility to be managed via CSS classes for cleaner JS logic.

### **Initial Header Styling (Phase 1)**
- **Liquid Glass Effect**: Implemented a transparent "liquid glass" aesthetic for the header.
- **Structural Overhaul**: Grouped elements into logical Logo+Nav and Action Button containers.
- **Rounded Aesthetics**: Applied signature rounded corners to the header components.

---

## 🚀 Future Roadmap
- [ ] Mobile responsive optimizations for the feature cards section.
- [ ] Optimization of heavy image assets in the `element/` directory.
- [ ] Performance audit for scroll-based animations.
