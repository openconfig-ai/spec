import type { Metadata } from "next";
import Link from "next/link";
import { Callout } from "@/components/mdx/callout";
import { Code } from "@/components/mdx/code";

export const metadata: Metadata = {
  title: "Commands Specification",
  description: "Define slash commands for frequently used prompts.",
};

export default function CommandsSpecPage() {
  return (
    <article className="prose">
      <h1>Commands Specification</h1>

      <p>
        Commands are slash commands for frequently used prompts and workflows.
        They provide a quick way to invoke common tasks with{" "}
        <code>/command-name</code>.
      </p>

      <h2>File Location</h2>

      <p>
        Commands are defined as Markdown files in the <code>.ai/commands/</code>{" "}
        directory:
      </p>

      <Code language="text">
        {`.ai/
└── commands/
    ├── review.md
    ├── commit.md
    └── test.md`}
      </Code>

      <h2>File Format</h2>

      <p>
        Each command file contains optional YAML frontmatter followed by the
        prompt:
      </p>

      <Code language="yaml" filename=".ai/commands/review.md">
        {`---
description: Review recent code changes
---

Review the recent changes in this project:

1. Run \`git diff HEAD~1\` to see what changed
2. Analyze each modified file for issues
3. Check for security vulnerabilities
4. Verify code style consistency
5. Provide a summary with actionable feedback`}
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
              <code>description</code>
            </td>
            <td>string</td>
            <td>No</td>
            <td>Brief description shown in command list.</td>
          </tr>
        </tbody>
      </table>

      <Callout type="info" title="Minimal Frontmatter">
        <p>
          Commands can work with no frontmatter at all. The file content becomes
          the prompt.
        </p>
      </Callout>

      <h2>Arguments</h2>

      <h3>All Arguments with $ARGUMENTS</h3>

      <p>
        Use <code>$ARGUMENTS</code> to capture all arguments passed to the
        command:
      </p>

      <Code language="yaml" filename=".ai/commands/fix-issue.md">
        {`---
description: Fix a GitHub issue
---

Fix issue #$ARGUMENTS following our coding standards.
Read the issue description first, then implement the fix.`}
      </Code>

      <p>Usage:</p>

      <Code language="text">
        {`/fix-issue 123
# $ARGUMENTS becomes: "123"`}
      </Code>

      <h3>Positional Arguments</h3>

      <p>
        Access specific arguments with <code>$1</code>, <code>$2</code>, etc.:
      </p>

      <Code language="yaml" filename=".ai/commands/review-pr.md">
        {`---
description: Review a pull request
---

Review PR #$1 with priority $2.

Focus on:
- Security vulnerabilities
- Performance implications
- Code style compliance`}
      </Code>

      <p>Usage:</p>

      <Code language="text">
        {`/review-pr 456 high
# $1 = "456", $2 = "high"`}
      </Code>

      <h2>Bash Command Execution</h2>

      <p>
        Execute bash commands before the prompt runs using the <code>!</code>{" "}
        prefix:
      </p>

      <Code language="yaml" filename=".ai/commands/commit.md">
        {`---
description: Create a git commit
---

## Context

- Current status: !\`git status\`
- Current diff: !\`git diff HEAD\`
- Current branch: !\`git branch --show-current\`
- Recent commits: !\`git log --oneline -5\`

## Task

Based on the changes above, create a meaningful commit message
and commit the changes.`}
      </Code>

      <h2>File References</h2>

      <p>
        Include file contents in commands using the <code>@</code> prefix:
      </p>

      <Code language="yaml" filename=".ai/commands/explain.md">
        {`---
description: Explain a file
---

Explain the following file in detail:

@$1

Cover:
- Purpose and functionality
- Key functions and their roles
- Dependencies and imports
- Potential improvements`}
      </Code>

      <h2>Namespacing</h2>

      <p>
        Use subdirectories to group related commands. The subdirectory name
        appears in the command description:
      </p>

      <Code language="text">
        {`.ai/
└── commands/
    ├── frontend/
    │   ├── component.md    # /component (frontend)
    │   └── test.md         # /test (frontend)
    └── backend/
        ├── migrate.md      # /migrate (backend)
        └── test.md         # /test (backend)`}
      </Code>

      <h2>Examples</h2>

      <h3>Simple Command</h3>

      <Code language="yaml" filename=".ai/commands/explain.md">
        {`---
description: Explain the current file
---

Explain the code in the current file. Cover:
- What it does
- How it works
- Key functions and their purposes`}
      </Code>

      <h3>Command Without Frontmatter</h3>

      <Code language="markdown" filename=".ai/commands/hello.md">
        {`Say hello and introduce yourself briefly.`}
      </Code>

      <h3>Command with Context</h3>

      <Code language="yaml" filename=".ai/commands/refactor.md">
        {`---
description: Refactor code for better readability
---

Refactor the following code for better readability:

@$1

Guidelines:
- Improve variable names
- Extract helper functions
- Add comments for complex logic
- Keep the same behavior`}
      </Code>

      <h2>Next Steps</h2>

      <ul>
        <li>
          <Link href="/docs/spec/memory">Memory Specification</Link>
        </li>
        <li>
          <Link href="/docs/spec/agents">Agents Specification</Link>
        </li>
        <li>
          <Link href="/docs/spec/skills">Skills Specification</Link>
        </li>
      </ul>
    </article>
  );
}
