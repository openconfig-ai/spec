import type { Metadata } from "next";
import Link from "next/link";
import { Callout } from "@/components/mdx/callout";
import { Code } from "@/components/mdx/code";
import { File, FileTree, Folder } from "@/components/mdx/file-tree";

export const metadata: Metadata = {
  title: "Skills Specification",
  description: "Define reusable AI agent capabilities and knowledge modules.",
};

export default function SkillsSpecPage() {
  return (
    <article className="prose">
      <h1>Skills Specification</h1>

      <p>
        Skills are reusable modules that extend an AI agent's capabilities. They
        contain instructions, scripts, and resources that agents can discover
        and use on demand.
      </p>

      <h2>Directory Structure</h2>

      <p>
        Each skill is a directory containing at minimum a <code>SKILL.md</code>{" "}
        file:
      </p>

      <FileTree>
        <Folder name=".ai">
          <Folder name="skills">
            <Folder name="skill-name">
              <File name="SKILL.md" comment="Required" />
              <Folder name="scripts" comment="Optional executables" />
              <Folder name="references" comment="Optional documentation" />
              <Folder name="assets" comment="Optional resources" />
            </Folder>
          </Folder>
        </Folder>
      </FileTree>

      <h2>SKILL.md Format</h2>

      <p>
        The <code>SKILL.md</code> file must contain YAML frontmatter followed by
        Markdown content:
      </p>

      <Code language="yaml" filename="SKILL.md">
        {`---
name: code-review
description: Reviews code for quality, security, and best practices. Use when asked to review code or check for issues.
---

# Code Review

When reviewing code, analyze for:

1. **Security** - Check for vulnerabilities
2. **Performance** - Identify bottlenecks
3. **Style** - Verify coding conventions

Provide specific, actionable feedback with examples.`}
      </Code>

      <h2>Frontmatter Fields</h2>

      <h3>Required Fields</h3>

      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>name</code>
            </td>
            <td>string</td>
            <td>
              Unique identifier. Max 64 chars. Lowercase, numbers, hyphens only.
            </td>
          </tr>
          <tr>
            <td>
              <code>description</code>
            </td>
            <td>string</td>
            <td>What the skill does and when to use it. Max 1024 chars.</td>
          </tr>
        </tbody>
      </table>

      <h3>Optional Fields</h3>

      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>license</code>
            </td>
            <td>string</td>
            <td>License name or reference to bundled license file.</td>
          </tr>
        </tbody>
      </table>

      <h3>Name Constraints</h3>

      <p>
        The <code>name</code> field must:
      </p>

      <ul>
        <li>Be 1-64 characters</li>
        <li>
          Contain only lowercase letters, numbers, and hyphens (<code>a-z</code>
          , <code>0-9</code>, <code>-</code>)
        </li>
        <li>Not start or end with a hyphen</li>
        <li>Not contain consecutive hyphens</li>
        <li>Match the parent directory name</li>
      </ul>

      <Code language="yaml">
        {`# Valid names
name: code-review
name: data-analysis
name: pdf-processing

# Invalid names
name: Code-Review     # uppercase
name: -code-review    # starts with hyphen
name: code--review    # consecutive hyphens`}
      </Code>

      <h2>Body Content</h2>

      <p>The Markdown body contains instructions for the agent. Include:</p>

      <ul>
        <li>Step-by-step procedures</li>
        <li>Examples of inputs and outputs</li>
        <li>Common edge cases</li>
        <li>References to files in the skill directory</li>
      </ul>

      <Callout type="tip" title="Keep It Focused">
        <p>
          Keep your main <code>SKILL.md</code> under 500 lines. Move detailed
          reference material to the <code>references/</code> directory.
        </p>
      </Callout>

      <h2>Optional Directories</h2>

      <h3>scripts/</h3>

      <p>
        Contains executable code that agents can run. Scripts should be
        self-contained and handle errors gracefully.
      </p>

      <Code language="python" filename="scripts/extract.py">
        {`#!/usr/bin/env python3
"""Extract text from a PDF file."""

import sys
import json

def extract_text(path):
    # Implementation here
    pass

if __name__ == "__main__":
    result = extract_text(sys.argv[1])
    print(json.dumps(result))`}
      </Code>

      <h3>references/</h3>

      <p>Contains additional documentation that agents load on demand:</p>

      <ul>
        <li>
          <code>REFERENCE.md</code> — Detailed technical reference
        </li>
        <li>
          Domain-specific files (<code>security.md</code>,{" "}
          <code>performance.md</code>)
        </li>
      </ul>

      <h3>assets/</h3>

      <p>Contains static resources:</p>

      <ul>
        <li>Templates (document templates, config templates)</li>
        <li>Images (diagrams, examples)</li>
        <li>Data files (lookup tables, schemas)</li>
      </ul>

      <h2>Progressive Disclosure</h2>

      <p>Skills load progressively to optimize context usage:</p>

      <ol>
        <li>
          <strong>Metadata</strong> (~100 tokens) — <code>name</code> and{" "}
          <code>description</code> loaded at startup
        </li>
        <li>
          <strong>Instructions</strong> (&lt;5000 tokens recommended) — Full{" "}
          <code>SKILL.md</code> body loaded when activated
        </li>
        <li>
          <strong>Resources</strong> (as needed) — Files in{" "}
          <code>scripts/</code>, <code>references/</code>, <code>assets/</code>
        </li>
      </ol>

      <h2>Complete Example</h2>

      <Code language="yaml" filename=".ai/skills/pdf-processing/SKILL.md">
        {`---
name: pdf-processing
description: Extract text and tables from PDF files, fill forms, merge documents. Use when working with PDF documents or forms.
license: MIT
---

# PDF Processing

This skill helps you work with PDF documents.

## Capabilities

- Extract text from PDFs
- Extract tables as structured data
- Fill PDF forms
- Merge multiple PDFs

## Usage

To extract text from a PDF:

\`\`\`bash
python scripts/extract.py input.pdf
\`\`\`

See [references/FORMS.md](references/FORMS.md) for form-filling instructions.`}
      </Code>

      <h2>Next Steps</h2>

      <ul>
        <li>
          <Link href="/docs/spec/agents">Agents Specification</Link>
        </li>
        <li>
          <Link href="/docs/spec/commands">Commands Specification</Link>
        </li>
        <li>
          <Link href="/docs/spec/memory">Memory Specification</Link>
        </li>
      </ul>
    </article>
  );
}
