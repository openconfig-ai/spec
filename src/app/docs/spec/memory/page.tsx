import type { Metadata } from "next";
import Link from "next/link";
import { Callout } from "@/components/mdx/callout";
import { Code } from "@/components/mdx/code";
import { File, FileTree, Folder } from "@/components/mdx/file-tree";

export const metadata: Metadata = {
  title: "Memory Specification",
  description: "Define project-level context that persists across sessions.",
};

export default function MemorySpecPage() {
  return (
    <article className="prose">
      <h1>Memory Specification</h1>

      <p>
        Memory provides project-level context that persists across agent
        sessions. It uses the familiar <code>AGENTS.md</code> format already
        adopted by 60k+ repositories.
      </p>

      <h2>File Location</h2>

      <p>
        <code>AGENTS.md</code> lives at the root of your project, alongside{" "}
        <code>.ai/</code>:
      </p>

      <Code language="text">
        {`my-project/
├── .ai/
│   ├── skills/
│   ├── agents/
│   └── commands/
├── AGENTS.md        # Project context
└── package.json`}
      </Code>

      <h2>File Format</h2>

      <p>
        <code>AGENTS.md</code> is a plain Markdown file with project context.
        Frontmatter is optional:
      </p>

      <Code language="markdown" filename="AGENTS.md">
        {`# Project Context

## Overview
A Next.js application for managing customer subscriptions.

## Tech Stack
- Framework: Next.js 16 (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS
- Database: PostgreSQL with Prisma
- Auth: NextAuth.js

## Architecture
- \`src/app/\` - Route handlers and pages
- \`src/components/\` - Reusable React components
- \`src/lib/\` - Utilities and helpers
- \`src/server/\` - Server-side code and API

## Conventions
- Use Server Components by default
- Add 'use client' only when needed
- Follow existing naming patterns
- Write tests for utilities

## Commands
- \`npm run dev\` - Start development server
- \`npm run test\` - Run tests
- \`npm run build\` - Production build
- \`npm run db:push\` - Push schema changes

## Notes
- Stripe webhooks require ngrok in development
- Run migrations before starting the server`}
      </Code>

      <h2>Recommended Sections</h2>

      <table>
        <thead>
          <tr>
            <th>Section</th>
            <th>Purpose</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Overview</td>
            <td>Brief project description</td>
          </tr>
          <tr>
            <td>Tech Stack</td>
            <td>Languages, frameworks, and tools</td>
          </tr>
          <tr>
            <td>Architecture</td>
            <td>Directory structure and organization</td>
          </tr>
          <tr>
            <td>Conventions</td>
            <td>Coding standards and patterns</td>
          </tr>
          <tr>
            <td>Commands</td>
            <td>Common CLI commands</td>
          </tr>
          <tr>
            <td>Notes</td>
            <td>Important gotchas and tips</td>
          </tr>
        </tbody>
      </table>

      <h2>Optional Frontmatter</h2>

      <p>You can add frontmatter for additional metadata:</p>

      <Code language="yaml">
        {`---
version: "1.0"
last-updated: 2026-01-17
---

# Project Context
...`}
      </Code>

      <h2>Nested Memory</h2>

      <p>
        For monorepos, create nested <code>AGENTS.md</code> files. The closest
        file to the current working directory takes precedence:
      </p>

      <FileTree>
        <Folder name="monorepo">
          <File name="AGENTS.md" comment="Root context" />
          <Folder name=".ai" />
          <Folder name="packages">
            <Folder name="web">
              <File name="AGENTS.md" comment="Web-specific" />
              <Folder name=".ai" />
            </Folder>
            <Folder name="api">
              <File name="AGENTS.md" comment="API-specific" />
              <Folder name=".ai" />
            </Folder>
          </Folder>
        </Folder>
      </FileTree>

      <Callout type="info" title="Resolution Order">
        <p>
          When working in <code>packages/web/</code>, agents see the
          web-specific <code>AGENTS.md</code>. When working at the root, agents
          see the root <code>AGENTS.md</code>.
        </p>
      </Callout>

      <h2>Best Practices</h2>

      <h3>Keep It Focused</h3>

      <p>
        Include information that helps agents work effectively. Avoid
        duplicating content from README.md:
      </p>

      <ul>
        <li>
          <strong>Do:</strong> Include build commands, conventions, gotchas
        </li>
        <li>
          <strong>Don't:</strong> Include marketing copy, installation
          instructions for users
        </li>
      </ul>

      <h3>Update Regularly</h3>

      <p>
        Keep memory current as your project evolves. Outdated information can
        mislead agents.
      </p>

      <h3>Be Specific</h3>

      <p>Vague guidance is less useful than specific instructions:</p>

      <Code language="markdown">
        {`# Good
Use \`npm run test:unit\` for unit tests, \`npm run test:e2e\` for E2E tests.
Run E2E tests with \`--headed\` flag when debugging.

# Less helpful
Run tests before committing.`}
      </Code>

      <h2>Already Using AGENTS.md?</h2>

      <p>
        If you already have an <code>AGENTS.md</code> file, you're all set. Just
        add a <code>.ai/</code> directory alongside it for skills, agents, and
        commands:
      </p>

      <Code language="bash">
        {`# Create .ai directory for other components
mkdir -p .ai/skills .ai/agents .ai/commands

# Your existing AGENTS.md stays where it is`}
      </Code>

      <h2>Complete Example</h2>

      <Code language="markdown" filename="AGENTS.md">
        {`# E-commerce Platform

## Overview
Multi-tenant e-commerce platform with Stripe integration.

## Tech Stack
- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **Backend**: Next.js API routes, tRPC
- **Database**: PostgreSQL, Prisma ORM
- **Payments**: Stripe
- **Auth**: Clerk

## Architecture

\`\`\`
src/
├── app/                 # Next.js App Router
│   ├── (auth)/          # Auth-required routes
│   ├── (marketing)/     # Public pages
│   └── api/             # API routes
├── components/          # React components
│   ├── ui/              # Primitives (Button, Input)
│   └── features/        # Feature components
├── lib/                 # Utilities
├── server/              # Server code
│   ├── db/              # Database client
│   └── trpc/            # tRPC routers
└── types/               # TypeScript types
\`\`\`

## Conventions
- Use Server Components for data fetching
- Use 'use client' only for interactivity
- Name files in kebab-case
- Export components as default
- Use Zod for validation

## Commands
- \`npm run dev\` - Development server (port 3000)
- \`npm run build\` - Production build
- \`npm run test\` - Run Vitest tests
- \`npm run db:push\` - Push Prisma schema
- \`npm run db:studio\` - Open Prisma Studio

## Environment
Required variables in \`.env.local\`:
- \`DATABASE_URL\` - PostgreSQL connection
- \`STRIPE_SECRET_KEY\` - Stripe API key
- \`CLERK_SECRET_KEY\` - Clerk API key

## Notes
- Stripe webhooks need ngrok: \`ngrok http 3000\`
- Clear Prisma cache if schema changes: \`npx prisma generate\`
- Run \`npm run db:seed\` for test data`}
      </Code>

      <h2>Next Steps</h2>

      <ul>
        <li>
          <Link href="/docs/spec/skills">Skills Specification</Link>
        </li>
        <li>
          <Link href="/docs/spec/agents">Agents Specification</Link>
        </li>
        <li>
          <Link href="/docs/spec/commands">Commands Specification</Link>
        </li>
      </ul>
    </article>
  );
}
