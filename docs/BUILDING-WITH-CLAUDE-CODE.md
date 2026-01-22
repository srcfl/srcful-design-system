# Building a Design System with Claude Code

**Internal Guide for Designers**

This document explains how we built the Sourceful Design System (https://design.sourceful.energy) in 2 days using Claude Code, and how you can replicate this workflow.

---

## What We Built

| Metric | Count |
|--------|-------|
| Time to production | 2 days |
| Git commits | 78 |
| UI components | 45 |
| Documentation pages | 62 |
| npm package versions | 22 |
| Custom domain components | 6 (Energy Flow, Sites Map, AI Chat, EMS Schedule, etc.) |

The result: A fully documented, published npm package (`@sourceful-energy/ui`) with interactive documentation, dark mode, and domain-specific components for energy applications.

---

## The Workflow

### 1. Start with a Foundation, Not a Blank Page

We didn't start from zero. We used:
- **Next.js** as the framework
- **shadcn/ui** as the component foundation
- **Tailwind CSS** for styling

Claude Code can scaffold these quickly:
```bash
npx create-next-app@latest my-design-system
npx shadcn@latest init
```

Then we customized heavily - colors, typography, variants, and domain-specific components.

---

## Why shadcn/ui is the Perfect Foundation

**Full credit where it's due**: [shadcn/ui](https://ui.shadcn.com) by [@shadcn](https://twitter.com/shadcn) is the backbone of this design system, and it's genuinely excellent.

### What Makes It Special

**1. You own the code**

Unlike traditional component libraries where you `npm install` and hope the API fits your needs, shadcn/ui copies the component source into your project. You can read it, modify it, and learn from it. This is essential for customization.

**2. Built on the right primitives**

shadcn/ui uses [Radix UI](https://radix-ui.com) for accessibility primitives. This means keyboard navigation, focus management, ARIA attributes, and screen reader support are handled correctly out of the box. We didn't have to solve these hard problems ourselves.

**3. Tailwind-native styling**

Components are styled with Tailwind CSS using the `class-variance-authority` pattern. This made it trivial to add our brand tokens and custom variants while maintaining consistency.

**4. Claude Code understands it**

Because shadcn/ui is widely used and well-documented, Claude has deep knowledge of its patterns. When we asked for new variants or modifications, Claude knew exactly how to structure them consistently.

### What We Built On Top

| shadcn/ui gave us | We added |
|-------------------|----------|
| Button, Card, Input, Dialog, etc. | Energy-specific variants (`variant="energy"`) |
| Dark mode support | DesignSystemProvider with accessibility modes |
| TypeScript types | Domain components (PixelGrid, EnergyFlow) |
| Accessible primitives | Brand tokens (Sourceful green/yellow) |
| Consistent API patterns | npm package distribution |

### The shadcn/ui + Claude Code Combination

This pairing works remarkably well because:

1. **Claude can read the source**: Since components are in your codebase, Claude can reference exactly how they work when building new features or fixing issues.

2. **Patterns are consistent**: shadcn/ui establishes clear patterns (CVA for variants, Radix for primitives, Tailwind for styling). Claude follows these patterns automatically.

3. **Incremental adoption**: You can start with one component, customize it, then add more. Claude helps at each step.

4. **Community knowledge**: Claude has been trained on countless projects using shadcn/ui, so it knows common customizations and gotchas.

If you're starting a design system in 2025+, shadcn/ui is the obvious foundation. We wouldn't have shipped in 2 days without it.

### The Full Stack of Giants

We built this design system standing on the shoulders of several exceptional open source projects and platforms:

**[Tailwind CSS](https://tailwindcss.com)** by Adam Wathan and team

Tailwind fundamentally changed how we think about styling. The utility-first approach means:
- No context switching between CSS files and components
- Design tokens are enforced through the config
- Dark mode is a single `dark:` prefix away
- Claude can reason about styles directly in the markup

The constraint of "use only what's in the config" actually helps Claude generate consistent code. No invented class names, no one-off styles.

**[Vercel](https://vercel.com)** and **[Next.js](https://nextjs.org)**

Next.js gave us the app router, server components, and a documentation-ready structure out of the box. Vercel gave us:
- Instant preview deployments for every commit
- Production hosting with zero configuration
- Analytics to see what components people actually look at

The dx of `git push` → live preview URL in 30 seconds cannot be overstated. When iterating with Claude Code, we could share live links immediately.

**[Radix UI](https://radix-ui.com)**

The unstyled primitives that power shadcn/ui. Radix handles the genuinely hard parts of UI:
- Focus management and trapping
- Keyboard navigation
- ARIA attributes and roles
- Animation enter/exit states

We didn't have to think about whether our Dialog traps focus correctly. It does, because Radix does it correctly.

**[Lucide Icons](https://lucide.dev)**

A beautifully consistent icon set with 1500+ icons, all as React components:
- Tree-shakeable (only bundle what you use)
- Consistent 24px grid and 2px stroke
- TypeScript support
- Active community adding icons regularly

Every icon in our design system comes from Lucide. Having a single, comprehensive icon library means Claude can suggest appropriate icons without us maintaining a custom set.

**The interconnected ecosystem**

These tools were designed to work together:
- shadcn/ui assumes Tailwind and Radix
- Next.js has first-class Tailwind support
- Vercel optimizes Next.js deployments
- Claude understands all of them deeply

This interoperability is what enabled a 2-day design system. We weren't fighting tools, we were composing them.

---

### 2. Work in Rapid Iterations

The commit history tells the story. Here's a typical 30-minute session:

```
16:52 Add 9 new ShadCN components with documentation
16:55 Fix border animation to match srcful-builder
17:01 Add border travel animation to Energy Flow nodes
17:08 Make AI Chat theme-aware and fix container heights
17:15 Fix AI Chat input: expandable textarea, aligned send button
```

**The pattern:**
1. Ask Claude to build something
2. See it in the browser (dev server running)
3. Give feedback ("the input should expand", "match the animation from X")
4. Claude fixes immediately
5. Repeat

This is faster than Figma → handoff → development because there's no translation layer.

### 3. Describe What You Want, Not How to Build It

Examples of prompts that worked well:

**Domain-specific components:**
> "Build an energy flow visualization showing solar panels, battery, grid, and home. Use animated borders that travel around each node to show energy flowing."

**Referencing existing work:**
> "Make the border animation match what we have on srcful-builder" (Claude reads the other codebase)

**Iterative refinement:**
> "The cards feel too tight, add more breathing room"
> "Dark mode contrast is off on the code blocks"
> "The sidebar scroll is janky, add smooth scrolling but keep native scroll in modals"

### 4. Keep the Dev Server Running

Always have `npm run dev` running. Claude Code can see errors in real-time:
- TypeScript errors appear immediately
- Hydration errors get caught and fixed
- You see visual changes instantly

When something breaks, Claude sees the error output and fixes it in the next response.

---

## The CLAUDE.md Approach

This is the key technique that makes everything work smoothly.

### What is CLAUDE.md?

A markdown file in your repo root that gives Claude persistent context about your project. Claude reads this automatically at the start of every session.

### What Goes in CLAUDE.md?

Our CLAUDE.md is 655 lines and includes:

```markdown
# Quick Reference for AI Assistants
- All component imports
- Design tokens (colors, spacing, typography)
- Usage examples for every component

# Patterns
- How to handle dark mode
- Layout conventions
- Animation classes available

# File Structure
- Where things live in the codebase

# Development Commands
- How to run, build, publish
```

### Why This Matters

Without CLAUDE.md:
- Claude might use wrong color values
- Components get built inconsistently
- You repeat the same context every session

With CLAUDE.md:
- Claude knows your exact tokens (`sourceful-green-500`, not `green-500`)
- New components match existing patterns automatically
- Every session starts with full project context

### Keep It Updated

As you add components, update CLAUDE.md. We added sections like:
- New component usage examples
- Publishing checklist
- Integration guide for consuming projects

This documentation serves double duty: helps AI assistants AND helps human developers.

---

## Step-by-Step: Replicating This Workflow

### Prerequisites

1. **Claude Code CLI** installed and authenticated
2. **Node.js** 18+
3. **Git** configured
4. Basic familiarity with React/Next.js (you don't need to be an expert)

### Phase 1: Foundation (30 minutes)

```bash
# Create Next.js project
npx create-next-app@latest my-design-system --typescript --tailwind --eslint --app

cd my-design-system

# Initialize shadcn/ui
npx shadcn@latest init

# Start dev server in background
npm run dev &

# Start Claude Code
claude
```

Then tell Claude:
> "I'm building a design system for [your company]. Set up the project structure with a docs site, component library, and prepare for npm publishing. Use shadcn/ui as the foundation."

### Phase 2: Design Tokens (1 hour)

Share your brand guidelines with Claude:
> "Our brand colors are: Primary green #22c55e, accent yellow #facc15, etc. Our font is Satoshi. Update the Tailwind config and CSS variables to use these tokens."

If you have a Figma file:
> "Here are screenshots of our Figma design tokens: [paste or describe]. Implement these as CSS custom properties and Tailwind extensions."

### Phase 3: Core Components (2-3 hours)

Add shadcn components and customize them:
```bash
npx shadcn@latest add button card input dialog
```

Then customize:
> "Add our brand variants to the Button component: 'energy' (yellow), 'success' (green), 'warning' (orange). Make sure they work in both light and dark mode."

### Phase 4: Documentation (2-3 hours)

> "Create documentation pages for each component. Include: description, usage examples, props table, and interactive preview. Follow the structure of the Button docs page."

Claude will create consistent docs pages based on the pattern.

### Phase 5: Domain Components (variable)

This is where you add value beyond generic UI:
> "Build a [your domain] component that shows [specific functionality]. Reference how [existing thing] works for the interaction pattern."

For us: Energy Flow diagrams, Sites Map, EMS Schedule visualizations.

### Phase 6: Publish (30 minutes)

> "Set up npm publishing with GitHub Actions. Package name should be @your-org/ui. Include all components and the CSS."

---

## Tips for Designers

### You Don't Need to Know the Code

You can direct Claude entirely through outcomes:
- "Make this feel more spacious"
- "The hierarchy is wrong, the title should be more prominent"
- "This animation is too fast"
- "Match the style of [reference]"

Claude translates design intent into code.

### Screenshots Are Powerful

Take a screenshot of something you like (from Dribbble, another site, your Figma):
> "Make our cards look more like this [screenshot]"

Claude can interpret visual references.

### Name Your Tokens Semantically

Don't say "make it #22c55e". Say "use our primary green" or "use the energy color".

This builds a vocabulary that carries through the whole project.

### Commit Often

We made 78 commits in 2 days. Small commits mean:
- Easy to undo mistakes
- Clear history of decisions
- Claude can reference what changed

### Run the Dev Server

Always. The immediate feedback loop is what makes this fast.

---

## Future Possibilities: Figma Integration

We built this code-first, but there's opportunity to connect Figma more directly.

### Figma MCP Integration

Claude Code supports MCP (Model Context Protocol) servers, including one for Figma. This enables:

**1. Design Token Extraction**
```
"Read the Figma file [URL] and extract all color styles, text styles,
and spacing values. Generate a Tailwind config and CSS variables that match."
```

Claude can pull your Figma tokens and generate code that matches exactly.

**2. Component Translation**
```
"Look at the Button component in our Figma file. Create a React component
that matches the variants, states, and styling shown there."
```

This doesn't generate pixel-perfect code, but it gets you 80% there with the right structure and tokens.

### Figma → Code Sync Workflow

A manual but powerful workflow:

**When Figma changes:**

1. Designer updates component in Figma
2. Designer notes what changed (e.g., "updated button border radius, added new 'ghost' variant")
3. Run Claude Code:
   ```
   "Our Figma button component was updated: border radius is now 8px
   instead of 6px, and there's a new 'ghost' variant with transparent
   background and border on hover. Update our Button component to match."
   ```
4. Claude makes the changes
5. Review in browser, adjust, commit

**Reverse sync (code → Figma):**

When code evolves faster than Figma (like this project):
1. Export component documentation
2. Use Claude to generate a spec:
   ```
   "Generate a component spec document for our Button that a designer
   could use to update Figma. Include all variants, colors, spacing,
   and states."
   ```
3. Designer updates Figma manually (or use Figma plugins)

### Setting Up Figma MCP

1. Install the Figma MCP server (see Claude Code docs)
2. Add your Figma access token
3. Claude can now read Figma files directly

Example prompt after setup:
```
"Connect to our Figma design system file and audit our code components
against the Figma designs. List any inconsistencies in colors, spacing,
or typography."
```

---

## Effective Prompting Patterns

The way you ask Claude for things significantly affects the quality and speed of results.

### Be Specific About Context

**Vague (slower):**
> "Add a new button variant"

**Specific (faster):**
> "Add a 'ghost' variant to the Button component. It should have transparent background, no border by default, but show a subtle border on hover. Use the existing pattern from the 'outline' variant as reference."

### Reference Existing Patterns

Claude works best when you point it to existing code:

> "Create a Toggle component. Follow the same pattern as our Switch component for the API, but make it look like a segmented control with 2-3 options."

> "The new Card variant should use the same shadow treatment as our Dialog component."

### Describe Visual Intent, Not Implementation

**Implementation-focused (limiting):**
> "Add `box-shadow: 0 4px 6px rgba(0,0,0,0.1)` to the card"

**Intent-focused (better results):**
> "The cards feel flat. Add subtle depth to make them feel elevated from the background. Should work in both light and dark mode."

Claude will choose appropriate implementation and handle edge cases.

### Batch Related Changes

Instead of:
> "Add padding to the card" (wait) "Now fix the header spacing" (wait) "Now adjust the footer"

Do this:
> "The Card component needs spacing adjustments: more padding inside the content area, consistent spacing between header/content/footer sections, and the footer should align with the content edges. Look at how spacing works in Dialog for reference."

### Use Comparisons

> "The loading skeleton animation is too fast and distracting. Make it more like Stripe's loading states - subtle and calming."

> "Our form inputs feel cramped compared to Linear's UI. Add more breathing room."

---

## Session Management

### Starting a Session

Always start with context about what you're doing:

> "I'm continuing work on the design system. Today I want to focus on form components. Run the dev server and let's start with improving the Select component."

Claude will:
1. Read your CLAUDE.md
2. Start the dev server
3. Understand the current state

### Long Sessions

For sessions over 30 minutes:

1. **Checkpoint periodically**: "Let's commit what we have so far"
2. **Summarize progress**: "What have we changed in this session?"
3. **Reset context if needed**: "Let's focus fresh on just the Table component"

### Ending a Session

> "Let's wrap up. Commit all changes with a summary, make sure the build passes, and list anything we should pick up next time."

### Multi-Session Projects

Use a simple tracking approach:

> "Create a TODO.md with what we need to finish for the form components milestone"

Next session:
> "Check TODO.md and let's continue where we left off"

---

## Debugging with Claude

### When Something Breaks

Don't try to explain the bug. Show it:

> "The Dialog isn't closing when I click outside. The dev server console shows this error: [paste error]"

> "Dark mode is broken on the Badge component. It looks fine in light mode. Here's a screenshot: [screenshot]"

### When You Don't Know What's Wrong

> "Something's off with the sidebar layout but I can't pinpoint it. Compare it to how it looked in commit abc123."

> "The animation feels wrong. Can you check what animation classes are being applied and whether they match our design tokens?"

### Systematic Debugging

Ask Claude to investigate:

> "The Table component is slow with 100+ rows. Profile what's causing the performance issue and suggest fixes."

> "Users report the focus states aren't visible enough. Audit all our form components for WCAG 2.4.7 focus visible compliance."

---

## Component Quality Checklist

When building a new component, ensure Claude covers:

### Functionality
- [ ] Works with keyboard navigation
- [ ] Supports all intended variants
- [ ] Handles edge cases (empty states, long text, etc.)
- [ ] Works in controlled and uncontrolled modes (for form components)

### Visual
- [ ] Light mode appearance
- [ ] Dark mode appearance
- [ ] Hover, focus, active, disabled states
- [ ] Responsive behavior
- [ ] Animation/transitions feel right

### Accessibility
- [ ] Proper ARIA attributes
- [ ] Screen reader announcements
- [ ] Focus management
- [ ] Color contrast meets WCAG AA
- [ ] Works without motion (respects prefers-reduced-motion)

### Documentation
- [ ] Usage example in docs
- [ ] All props documented
- [ ] Interactive preview
- [ ] Common patterns shown

### Integration
- [ ] Exported from package
- [ ] Added to CLAUDE.md
- [ ] TypeScript types are correct

Example prompt to ensure quality:

> "Review the new Combobox component against our standard checklist: keyboard nav, both color modes, accessibility, all states. Fix anything missing."

---

## Advanced CLAUDE.md Techniques

### Layered Context

Structure CLAUDE.md from most-used to reference:

```markdown
# Quick Reference (top - read every time)
- Component imports
- Color tokens
- Common patterns

# Component Details (middle - reference as needed)
- Full API for each component
- Usage examples

# Project Structure (bottom - occasional reference)
- File locations
- Build setup
- Publishing
```

### Include "Do" and "Don't" Sections

```markdown
## Do
- Use `text-foreground` for primary text
- Use `gap-4` for standard spacing between elements
- Import icons from lucide-react

## Don't
- Don't use raw hex colors (use tokens)
- Don't add new dependencies without discussion
- Don't create new CSS files (use Tailwind)
```

### Document Your Decisions

```markdown
## Design Decisions

### Why We Use CSS Variables Over Tailwind's `dark:` Prefix
We define colors as CSS custom properties that change based on `.dark` class.
This allows runtime theme switching and easier token management.

### Why Radix UI for Primitives
Handles accessibility, keyboard nav, and focus management correctly.
We style with Tailwind, don't fight the primitives.
```

### Keep a Changelog Section

```markdown
## Recent Changes
- 2026-01-20: Added DesignSystemProvider for accessibility modes
- 2026-01-18: New SimpleTabs component
- 2026-01-15: Button 'energy' variant updated
```

This helps Claude understand what's current.

---

## Testing Your Components

### Visual Testing

> "Start the dev server and open the Button documentation page. Take a screenshot of each variant in both light and dark mode."

### Interactive Testing

> "Test the Dialog component: open it, try to close with Escape, click outside, tab through focusable elements, close with the X button. Report any issues."

### Automated Testing

> "Add tests for the Select component covering: rendering, opening/closing, keyboard navigation, selecting an option, and controlled mode."

### Cross-Browser Testing

> "Build the production bundle and check if there are any CSS features that won't work in Safari 15."

---

## Publishing Workflow

### Before Publishing

```
"Run through the publishing checklist:
1. Run the test suite
2. Build production bundle
3. Check for TypeScript errors
4. Verify exports are correct
5. Test importing in a fresh project"
```

### Version Bumping

- **Patch** (0.1.1 → 0.1.2): Bug fixes, no API changes
- **Minor** (0.1.2 → 0.2.0): New components, new variants, backwards-compatible
- **Major** (0.2.0 → 1.0.0): Breaking changes (removed props, renamed components)

> "We added new color mode accessibility features but didn't break anything. What version bump is appropriate?" (Minor)

### Post-Publish Verification

> "The package was published. Install it in a fresh Vite project and verify Button, Card, and Dialog work correctly with the new CSS."

---

## Working with Non-Designers

### For Developers Joining the Project

Share the CLAUDE.md and point them to this document. Key things to communicate:

1. **Use the design tokens**: Don't hardcode colors or spacing
2. **Check existing components**: Before building something new, check if it exists
3. **Follow the patterns**: Look at how similar components are structured
4. **Update CLAUDE.md**: When you add components, update the quick reference

### Design Reviews via Code

Instead of Figma comments:

> "Review the new Dropdown component. Focus on: spacing consistency with other components, dark mode appearance, and whether the animation timing feels right."

Claude can provide structured feedback on implementation.

---

## Common Pitfalls

### Pitfall: Over-Engineering Early

**Symptom**: Building complex variants and features before the basics work.

**Solution**: Start simple. Get one variant working perfectly, then add complexity.

> "Let's start with just the default Button. Once that's solid, we'll add variants."

### Pitfall: Inconsistent Tokens

**Symptom**: Some components use `green-500`, others use `primary`, others use `sourceful-green-500`.

**Solution**: Audit and standardize early.

> "Audit all components for color usage. Replace any raw color values with our semantic tokens."

### Pitfall: Forgetting Dark Mode

**Symptom**: Components look great in light mode, broken in dark.

**Solution**: Test both modes continuously.

> "Always show me both light and dark mode when previewing changes."

### Pitfall: Skipping Accessibility

**Symptom**: Components work with mouse but not keyboard, no ARIA attributes.

**Solution**: Include accessibility in initial requirements.

> "Build the Tab component. It needs to be fully keyboard navigable with arrow keys and meet WCAG 2.1 AA."

### Pitfall: Documentation Debt

**Symptom**: Components work but nobody knows how to use them.

**Solution**: Document as you build.

> "After we finish this component, create its documentation page before moving on."

---

## What This Approach Changes

### For Designers

- **Ship faster**: Ideas become real in hours, not weeks
- **Stay in control**: Direct the implementation through design language
- **Learn by doing**: See how your decisions translate to code
- **Iterate freely**: Changes are cheap, experimentation is easy

### For Design Systems

- **Living documentation**: Docs are always current because they're generated alongside components
- **Single source of truth**: The code IS the design system
- **Faster adoption**: Teams can `npm install` immediately

### For Teams

- **Reduced handoff friction**: Designer and code evolve together
- **Faster feedback loops**: See real implementation immediately
- **Better communication**: Shared vocabulary in CLAUDE.md

---

## Framework-Specific Setup

### Next.js (App Router)

This is our primary setup. The design system documentation site uses this.

```bash
npx create-next-app@latest my-design-system --typescript --tailwind --eslint --app
cd my-design-system
npx shadcn@latest init
```

Then tell Claude:
> "Set up this Next.js project as a design system. Add next-themes for dark mode, configure the ThemeProvider, and prepare the project structure for component documentation."

### Vite + React

The npm package works in Vite without Next.js dependencies.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install @sourceful-energy/ui
```

Then tell Claude:
> "Set up this Vite project to use @sourceful-energy/ui. Handle dark mode manually since we don't have next-themes. Show me how to toggle the dark class on html."

Key difference: You manage dark mode yourself (toggle `.dark` class on `<html>`).

### Existing Projects

When adding the design system to an existing codebase:

> "I want to integrate @sourceful-energy/ui into this existing React project. Audit the current setup, identify any conflicts with our CSS, and create an integration plan that doesn't break existing functionality."

---

## Real Session Examples

### Example 1: Building the PixelGrid Component

**Session goal**: Create an animated brand element showing a 3x3 grid of pixels with various patterns.

**Opening prompt**:
> "I want to create a PixelGrid component for our brand. It's a 3x3 grid where pixels can animate on/off in different patterns. Think of it as a tiny LED display. Start with a basic version that can show a single pattern."

**Iteration prompts**:
> "Add more patterns: corners only, plus shape, diagonal lines"

> "The animation feels mechanical. Make the timing more organic - stagger the pixels slightly"

> "Add a 'color' prop so we can use this with different brand colors, not just green"

> "Create a PixelGridShowcase component that displays all patterns grouped by category"

**Result**: 31 patterns, 3 sizes, 3 speeds, multiple color themes, with showcase component.

### Example 2: Debugging Dark Mode Issues

**Problem**: Cards looked washed out in dark mode.

**Prompt**:
> "The Card component looks faded in dark mode. The background doesn't have enough contrast with the page background. Compare how Dialog handles this and apply the same approach."

**Claude investigated**:
- Found Dialog uses `bg-card` with subtle border
- Card was using `bg-background` (same as page)
- Fixed by using `bg-card` and adding subtle border in dark mode

### Example 3: Adding Accessibility Features

**Session goal**: Add comprehensive accessibility modes.

**Opening prompt**:
> "I want to add accessibility features to the design system: dyslexia-friendly font option, color blind modes, increased text spacing, and enhanced focus indicators. Create a DesignSystemProvider that manages these settings and persists them to localStorage."

**Follow-up prompts**:
> "Add hooks so consuming apps can easily build settings UI: useFontMode, useColorMode, useSpacingMode, useFocusMode"

> "The focus mode should add a thicker, more visible focus ring. Test it on Button, Input, and Select."

> "Document all of this in CLAUDE.md with usage examples"

**Result**: Full accessibility system with 4 modes, 5 hooks, localStorage persistence, and documentation.

### Example 4: Creating Documentation Pages

**Prompt**:
> "Create a documentation page for the new SimpleTabs component. Follow the exact pattern from the Button documentation page: overview section, interactive preview, usage examples for each variant, props table, and accessibility notes."

Claude read the Button docs page, understood the structure, and replicated it for SimpleTabs.

---

## Getting Started

1. Clone this repo as a reference: https://github.com/srcfl/srcful-design-system.git
2. Read through our CLAUDE.md to see the pattern (655 lines of context)
3. Start small: try building one component from scratch with Claude Code
4. Build your own CLAUDE.md as you go - it compounds over time
5. Keep the dev server running - the immediate feedback loop is everything

### First Session Template

Copy this to start your first session:

```
I'm starting a new design system project. My company is [NAME] and our brand colors are:
- Primary: [HEX]
- Secondary: [HEX]
- Accent: [HEX]

We use [FONT] for our typography.

Let's start by:
1. Setting up the project with Next.js and shadcn/ui
2. Configuring our brand tokens
3. Building one component (Button) with our styling
4. Creating a basic documentation page

Run the dev server so I can see changes immediately.
```

Questions? Reach out to @0xCoops on X.

---

*Last updated: January 2026*
*Built with Claude Code (Opus 4.5)*
