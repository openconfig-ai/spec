import type { Metadata } from "next";
import Link from "next/link";
import { Code } from "@/components/mdx/code";

export const metadata: Metadata = {
  title: "Agents Specification",
  description:
    "Define specialized AI assistants with custom prompts and tools.",
};

export default function AgentsSpecPage() {
  return (
    <article className="prose">
      <h1>Agents Specification</h1>

      <p>
        Agents are specialized AI assistants that handle specific types of
        tasks. Each agent has its own system prompt defined in a Markdown file.
      </p>

      <h2>File Location</h2>

      <p>
        Agents are defined as Markdown files in the <code>.ai/agents/</code>{" "}
        directory:
      </p>

      <Code language="text">
        {`.ai/
└── agents/
    ├── debugger.md
    ├── reviewer.md
    └── docs-writer.md`}
      </Code>

      <h2>File Format</h2>

      <p>
        Each agent file contains YAML frontmatter followed by a system prompt:
      </p>

      <Code language="yaml" filename=".ai/agents/debugger.md">
        {`---
name: debugger
description: Expert at finding and fixing bugs. Use when encountering errors or unexpected behavior.
---

You are a debugging specialist. When invoked:

1. Gather context about the bug (error message, stack trace)
2. Form hypotheses about the cause
3. Add strategic logging if needed
4. Identify the root cause
5. Propose a minimal fix
6. Verify the solution works

Focus on fixing the underlying issue, not just the symptoms.`}
      </Code>

      <h2>Frontmatter Fields</h2>

      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>name</code>
            </td>
            <td>string</td>
            <td>Yes</td>
            <td>Unique identifier. Lowercase letters and hyphens.</td>
          </tr>
          <tr>
            <td>
              <code>description</code>
            </td>
            <td>string</td>
            <td>Yes</td>
            <td>When to use this agent. Used for automatic delegation.</td>
          </tr>
        </tbody>
      </table>

      <h2>Examples</h2>

      <h3>Code Reviewer</h3>

      <p>An agent that reviews code:</p>

      <Code language="yaml" filename=".ai/agents/reviewer.md">
        {`---
name: reviewer
description: Expert code reviewer. Use after writing or modifying code.
---

You are a senior code reviewer. When invoked:

1. Run \`git diff\` to see recent changes
2. Analyze each modified file
3. Check for security, performance, and style issues
4. Provide prioritized feedback

Organize feedback by priority:
- **Critical** — Must fix before merge
- **Warning** — Should fix
- **Suggestion** — Consider improving`}
      </Code>

      <h3>Documentation Writer</h3>

      <p>An agent specialized in writing documentation:</p>

      <Code language="yaml" filename=".ai/agents/docs-writer.md">
        {`---
name: docs-writer
description: Technical writer for documentation. Use when creating or updating docs.
---

You are a technical documentation specialist. When writing docs:

1. Understand the target audience
2. Use clear, concise language
3. Include code examples
4. Add diagrams where helpful
5. Follow the project's documentation style guide`}
      </Code>

      <h3>Data Scientist</h3>

      <p>A domain-specific agent for data analysis:</p>

      <Code language="yaml" filename=".ai/agents/data-scientist.md">
        {`---
name: data-scientist
description: Data analysis expert for SQL queries and BigQuery operations.
---

You are a data scientist specializing in SQL and BigQuery.

When analyzing data:
1. Understand the analysis requirements
2. Write efficient SQL queries
3. Use BigQuery CLI (bq) when appropriate
4. Summarize findings clearly
5. Suggest actionable insights

Always ensure queries are cost-effective.`}
      </Code>

      <h2>Next Steps</h2>

      <ul>
        <li>
          <Link href="/docs/spec/commands">Commands Specification</Link>
        </li>
        <li>
          <Link href="/docs/spec/skills">Skills Specification</Link>
        </li>
        <li>
          <Link href="/docs/spec/memory">Memory Specification</Link>
        </li>
      </ul>
    </article>
  );
}
