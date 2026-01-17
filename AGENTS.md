# OpenConfig.ai

**Generated:** 2026-01-17 | **Commit:** afe6cfd | **Branch:** main

## Skills

**USE PROACTIVELY**: Load `vercel-react-best-practices` skill when writing or reviewing React/Next.js code in this project. The skill contains 45 performance rules across 8 categories - apply them during code generation and refactoring.

## Overview

Next.js 16 documentation site for OpenConfig.ai specification. Static site (SSG), zero API routes, server-first architecture. React Compiler enabled - no manual memoization needed.

## Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16.1.3, React 19.2 |
| Compiler | React Compiler (auto-memoization) |
| Styling | Tailwind v4 (CSS-based config) |
| Linting | Biome (not ESLint) |
| Highlighting | Shiki (server-side) |
| Fonts | Geist Sans/Mono |

## Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Design tokens, Tailwind imports
│   └── docs/               # Documentation section
│       ├── layout.tsx      # Docs layout (sidebar, header)
│       └── [routes]/       # Doc pages (getting-started, spec/*)
├── components/
│   ├── docs/               # Doc-specific (sidebar, header)
│   └── mdx/                # MDX components (Callout, Code, FileTree)
└── lib/
    ├── utils.ts            # cn() for class merging
    ├── navigation.ts       # Sidebar nav config
    └── shiki.ts            # Syntax highlighter (singleton)
```

## Where to Look

| Task | Location |
|------|----------|
| Add new doc page | `src/app/docs/[section]/page.tsx` |
| Modify sidebar | `src/lib/navigation.ts` |
| Add MDX component | `src/components/mdx/` |
| Change design tokens | `src/app/globals.css` |
| Edit metadata | `src/app/layout.tsx` (root) or page's `metadata` export |

## Code Map

| Symbol | Location | Role |
|--------|----------|------|
| `RootLayout` | `src/app/layout.tsx` | Root HTML, fonts, metadata |
| `DocsLayout` | `src/app/docs/layout.tsx` | Sidebar, header wrapper |
| `Sidebar` | `src/components/docs/sidebar.tsx` | Navigation (client) |
| `Code` | `src/components/mdx/code.tsx` | Async syntax highlighting |
| `CodeBlock` | `src/components/mdx/code-block.tsx` | Copy button (client) |
| `Callout` | `src/components/mdx/callout.tsx` | Info/warning/tip boxes |
| `FileTree` | `src/components/mdx/file-tree.tsx` | Directory visualization |
| `cn()` | `src/lib/utils.ts` | Class name merging |
| `highlightCode()` | `src/lib/shiki.ts` | Server-side highlighting |
| `navigation` | `src/lib/navigation.ts` | Sidebar structure |

## Conventions

### Server/Client Components
- **Default server**: All pages, layouts, most components
- **Only 2 client**: `sidebar.tsx` (usePathname), `code-block.tsx` (useState)
- Add `"use client"` only when hooks needed

### Import Patterns
```typescript
import { cn } from "@/lib/utils";          // Always use @/ alias
import { Callout } from "@/components/mdx/callout";
import type { Metadata } from "next";      // Type-only imports
```

### Component Props
```typescript
{ className?: string }  // Standard for all icon/styling components
{ children: ReactNode } // Standard for wrapper components
```

### Icon Components
- Define inline as SVG functions (no icon library)
- Always include `aria-hidden="true"`
- Accept `className` prop

### Page Structure
```typescript
export const metadata: Metadata = { title: "...", description: "..." };
export default function PageName() { ... }
```

### Styling
- Tailwind only (no CSS modules)
- Use semantic tokens: `text-foreground`, `bg-muted`, `border-border`
- Warm stone palette, amber accent (not typical AI cyan)

## Anti-Patterns

- **DO NOT** use `memo()`, `useMemo()`, `useCallback()` for optimization - React Compiler handles this
- **DO NOT** import from barrel files - import directly (e.g., `@/components/mdx/callout` not `@/components/mdx`)
- **DO NOT** add `"use client"` unless the component uses React hooks
- **DO NOT** use ESLint/Prettier - project uses Biome

## Design System

### Colors (CSS Variables)
```css
--background / --foreground     /* Main content */
--muted / --muted-foreground    /* Secondary content */
--accent / --accent-foreground  /* Amber highlights */
--border                        /* Borders, dividers */
--sidebar-bg / --sidebar-active /* Navigation */
```

### Layout Tokens
```css
--docs-sidebar-width: 260px
--docs-content-max-width: 720px
```

## Commands

```bash
bun dev        # Start dev server
bun build      # Production build
bun start      # Serve production
bun lint       # Biome check
bun format     # Biome format
```

## Testing

No test infrastructure configured. When adding tests, consider Vitest for unit tests, Playwright for E2E.

## Notes

- React Compiler is experimental but enabled - monitor for issues
- Tailwind v4 uses CSS-based config (no tailwind.config.js)
- Shiki highlighter uses singleton pattern for performance
- Navigation utilities `findNavItem()` and `findAdjacentItems()` exist but unused - for future prev/next links
