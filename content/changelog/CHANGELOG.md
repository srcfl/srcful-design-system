# Changelog

All notable changes to the Sourceful Design System (`@sourceful-energy/ui`) are documented here.

This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [0.1.32] - 2026-01-12

### Changed
- **docs**: Replace Loader2 spinners with branded PixelGrid animations in loading states
- **docs**: Update Button loading examples to use PixelGrid component
- **docs**: Update Badge loading examples to use PixelGrid alongside badges
- **component**: Update FeedbackDialog to use PixelGrid for loading states
- **component**: Update RoadmapContent voting button to use PixelGrid animation


## [0.1.31] - 2026-01-12

### Added
- **docs**: Add "Using with Vite" documentation page for non-Next.js setups
- **docs**: Add Dashboard pattern page (stat cards, hero metrics, device lists)
- **docs**: Add Data Tables pattern page (row actions, toolbars, selectable rows)
- **docs**: Add Settings pattern page (sections, cards, tabs, danger zones)
- **docs**: Add Empty & Loading States pattern page (skeletons, spinners, errors)

### Changed
- **package**: Move docs-only dependencies to devDependencies for lighter installs
- **package**: Remove Next.js as transitive dependency - now fully Vite-compatible

### Fixed
- **component**: Fix HTML nesting error on themes page (p cannot contain div)


## [0.1.30] - 2026-01-12

### Added
- **component**: Add 4x4 and 6x6 grid dimensions to PixelGrid component
- **component**: Add static (non-animated) mode to PixelGrid with `animated` prop
- **component**: Add 21 new patterns for 4x4 grids (square-inner, square-outer, cross-full, cross-spin, etc.)
- **component**: Add 22 new patterns for 6x6 grids (ripple, spiral, checkerboard, diamond, wave, etc.)
- **component**: Add PixelGridDimensionComparison showcase component
- **docs**: Add dimension selector and animated toggle to PixelGrid documentation page


## [0.1.27] - 2026-01-12

### Added
- **component**: Add accessibility modes and elevated theme

### Changed
- **docs**: Add themes and accessibility documentation
- **docs**: Update changelog for v0.1.28
- **docs**: Add playbook reference for strategic context

### Fixed
- **component**: Add Pixel Grid to docs sidebar navigation


## [0.1.29] - 2026-01-12

### Added
- **docs**: Add Visual Themes documentation page explaining base vs elevated themes
- **docs**: Add Accessibility documentation page with EU compliance (EAA) and WCAG status
- **token**: Add semantic colors (success, warning, info, energy) to Tailwind config

### Fixed
- **component**: Fix Alert dark mode with proper dark backgrounds and colored borders
- **component**: Fix Badge color blind mode support using semantic color tokens
- **component**: Fix docs sidebar item spacing to prevent hover backgrounds touching

## [0.1.28] - 2026-01-12

### Added
- **component**: Add AccessibilityProvider for managing theme and accessibility modes
- **component**: Add AccessibilitySettings panel for toggling accessibility features
- **feature**: Add elevated theme with gradient border lighting effects
- **feature**: Add dyslexic-friendly font mode using Lexend font
- **feature**: Add color blind palettes (deuteranopia, protanopia, tritanopia, achromatopsia)
- **feature**: Add enhanced focus indicators mode
- **feature**: Add text spacing adjustments mode

### Changed
- **component**: Update ComponentPreview to use SimpleTabs
- **component**: Update dashboard badges to use soft variants
- **component**: Improve elevated styling for cards, buttons, badges, tabs, inputs
- **component**: Add green gradient borders for primary buttons and badges in elevated mode




## [0.1.26] - 2026-01-09

### Changed
- **docs**: Add PixelGrid component page to docs site


## [0.1.25] - 2026-01-09

### Added
- **component**: Add PixelGrid animated component


## [0.1.24] - 2026-01-08

### Added
- **component**: Add expandable AI prompt to homepage with copy button
- **component**: Add community feedback system with GitHub OAuth

### Changed
- **docs**: Add changelog entry and Claude Code guide
- **docs**: Add comprehensive AI integration guide for using design system

### Fixed
- **component**: Improve AI prompt box UX and styling


## [0.1.23] - 2026-01-07

### Fixed
- **component**: Fix TypeScript error in ems-dashboard Reorder.Group


## [0.1.22] - 2026-01-07

### Added
- **component**: Add expandable AI prompt to homepage with copy button
- **component**: Add community feedback system with GitHub OAuth

### Changed
- **docs**: Add troubleshooting for missing responsive utilities
- **docs**: Add comprehensive AI integration guide for using design system

### Fixed
- **component**: Improve AI prompt box UX and styling


## [0.1.21] - 2026-01-06

### Added
- **component**: Financial Summary component for savings dashboard

### Fixed
- **component**: EnergyFlow positioning improvements

### Changed
- **component**: Improved mobile navigation and layout

## [0.1.20] - 2026-01-05

### Fixed
- **component**: AI chat scroll behavior
- **component**: Weather card hydration error

## [0.1.19] - 2026-01-05

### Added
- **component**: LenisProvider exported from design system

### Fixed
- **component**: AI chat scroll issue

## [0.1.18] - 2026-01-05

### Fixed
- **component**: Sidebar scroll with Lenis smooth scrolling

## [0.1.17] - 2026-01-05

### Changed
- **component**: Redesigned map controls
- **component**: Redesigned energy flow controls

## [0.1.16] - 2026-01-05

### Added
- **component**: Responsive mobile support
- **component**: Smooth scrolling integration
- **docs**: Animated icons for home page cards

### Fixed
- **docs**: Divider widths on home page
- **component**: Icon animation triggers on card hover

## [0.1.15] - 2026-01-05

### Added
- **component**: EMS Schedule component
- **component**: Electricity Price component
- **component**: Weather Card component
- **docs**: Claude Code setup guide
- **docs**: Project template documentation
- **docs**: Command palette search (Cmd+K)

### Changed
- **docs**: Improved documentation content and navigation
- **docs**: Enhanced hero section with dotted background
- **docs**: Theme-aware code block styling

### Fixed
- **component**: Code block contrast in dark mode
- **component**: Energy Flow dark mode styling
