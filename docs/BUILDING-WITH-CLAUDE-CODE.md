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

## Getting Started

1. Clone this repo as a reference https://github.com/srcfl/srcful-design-system.git
2. Read through our CLAUDE.md to see the pattern
3. Try building one component from scratch with Claude Code
4. Build your own CLAUDE.md as you go

Questions? Reach out to @0xCoops on X.

---

*Last updated: January 2026*
*Built with Claude Code (Opus 4.5)*
