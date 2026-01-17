import type { Metadata } from "next";
import Link from "next/link";
import { Callout } from "@/components/mdx/callout";
import { Code } from "@/components/mdx/code";
import { File, FileTree, Folder } from "@/components/mdx/file-tree";

export const metadata: Metadata = {
  title: "Quick Start",
  description: "Get started with OpenConfig.ai in under 5 minutes.",
};

export default function GettingStartedPage() {
  return (
    <article className="prose">
      <h1>Quick Start</h1>

      <p>
        Set up your first <code>.ai/</code> directory in under 5 minutes.
      </p>

      <h2>1. Create the Directory</h2>

      <p>
        Create a <code>.ai</code> directory at the root of your project:
      </p>

      <Code language="bash">
        {`mkdir -p .ai/skills .ai/agents .ai/commands`}
      </Code>

      <h2>2. Add Project Context</h2>

      <p>
        Create an <code>AGENTS.md</code> file at the project root with context
        about your project:
      </p>

      <Code language="markdown" filename="AGENTS.md">
        {`# Project Context

## Tech Stack
- Framework: Next.js 16
- Language: TypeScript
- Styling: Tailwind CSS
- Database: PostgreSQL with Prisma

## Conventions
- Use functional components with hooks
- Follow the App Router patterns
- Write tests for all utilities

## Commands
- \`npm run dev\` - Start development server
- \`npm run test\` - Run tests
- \`npm run build\` - Production build`}
      </Code>

      <h2>3. Create Your First Skill</h2>

      <p>Skills are reusable capabilities. Create a code review skill:</p>

      <Code language="yaml" filename=".ai/skills/code-review/SKILL.md">
        {`---
name: code-review
description: Reviews code for quality, security, and best practices.
---

# Code Review Skill

When reviewing code, check for:

## Security
- Input validation
- SQL injection risks
- XSS vulnerabilities
- Exposed secrets

## Quality
- Clear naming
- DRY principles
- Error handling
- Test coverage

## Performance
- N+1 queries
- Unnecessary re-renders
- Memory leaks

Provide specific suggestions with code examples.`}
      </Code>

      <h2>4. Add a Command</h2>

      <p>Commands are quick prompts you invoke with a slash:</p>

      <Code language="yaml" filename=".ai/commands/review.md">
        {`---
description: Review recent code changes
---

Review the recent changes in this project:

1. Run \`git diff HEAD~1\` to see changes
2. Analyze each modified file
3. Check for issues using the code-review skill
4. Provide a summary with actionable feedback`}
      </Code>

      <h2>5. Create a Specialized Agent</h2>

      <p>Agents are assistants with specific roles and capabilities:</p>

      <Code language="yaml" filename=".ai/agents/debugger.md">
        {`---
name: debugger
description: Expert at finding and fixing bugs
---

You are a debugging specialist. When invoked:

1. Gather context about the bug
2. Form hypotheses about the cause
3. Add strategic logging if needed
4. Identify the root cause
5. Propose a minimal fix
6. Verify the solution works

Focus on fixing the underlying issue, not symptoms.`}
      </Code>

      <h2>Final Structure</h2>

      <p>Your project should now look like this:</p>

      <FileTree>
        <Folder name="your-project">
          <File name="AGENTS.md" />
          <Folder name=".ai">
            <Folder name="skills">
              <Folder name="code-review">
                <File name="SKILL.md" />
              </Folder>
            </Folder>
            <Folder name="agents">
              <File name="debugger.md" />
            </Folder>
            <Folder name="commands">
              <File name="review.md" />
            </Folder>
          </Folder>
          <File name="package.json" />
          <File name="..." />
        </Folder>
      </FileTree>

      <Callout type="tip" title="Version Control">
        <p>
          Commit your <code>.ai/</code> directory to version control. Your team
          can share and improve these configurations together.
        </p>
      </Callout>

      <h2>Next Steps</h2>

      <ul>
        <li>
          <Link href="/docs/directory-structure">Directory Structure</Link> —
          Full specification
        </li>
        <li>
          <Link href="/docs/spec/skills">Skills</Link> — Deep dive into skills
        </li>
        <li>
          <Link href="/docs/spec/agents">Agents</Link> — Creating specialized
          agents
        </li>
        <li>
          <Link href="/docs/spec/commands">Commands</Link> — Slash commands for
          common tasks
        </li>
      </ul>
    </article>
  );
}
