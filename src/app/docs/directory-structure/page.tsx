import type { Metadata } from "next";
import Link from "next/link";
import { Callout } from "@/components/mdx/callout";
import { Code } from "@/components/mdx/code";
import { File, FileTree, Folder } from "@/components/mdx/file-tree";

export const metadata: Metadata = {
  title: "Directory Structure",
  description: "The complete .ai/ directory structure specification.",
};

export default function DirectoryStructurePage() {
  return (
    <article className="prose">
      <h1>Directory Structure</h1>

      <p>
        The <code>.ai/</code> directory is the root location for all AI agent
        configurations in a project.
      </p>

      <h2>Overview</h2>

      <FileTree>
        <Folder name="my-project">
          <File name="AGENTS.md" comment="Project context" />
          <Folder name=".ai">
            <Folder name="skills" comment="Reusable capabilities">
              <Folder name="skill-name">
                <File name="SKILL.md" comment="Required" />
                <Folder name="scripts" comment="Optional" />
                <Folder name="references" comment="Optional" />
                <Folder name="assets" comment="Optional" />
              </Folder>
            </Folder>
            <Folder name="agents" comment="Specialized assistants">
              <File name="agent-name.md" />
            </Folder>
            <Folder name="commands" comment="Slash commands">
              <File name="command-name.md" />
            </Folder>
          </Folder>
        </Folder>
      </FileTree>

      <h2>Location</h2>

      <p>
        The <code>.ai/</code> directory and <code>AGENTS.md</code> should be
        placed at the root of your project, alongside files like{" "}
        <code>package.json</code> or <code>pyproject.toml</code>.
      </p>

      <Code language="text">
        {`my-project/
├── AGENTS.md         # Project context
├── .ai/              # AI configurations
├── .git/
├── src/
├── package.json
└── README.md`}
      </Code>

      <h2>Components</h2>

      <h3>skills/</h3>

      <p>
        Contains reusable capabilities that agents can discover and use. Each
        skill is a directory with a <code>SKILL.md</code> file.
      </p>

      <table>
        <thead>
          <tr>
            <th>Path</th>
            <th>Required</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>SKILL.md</code>
            </td>
            <td>Yes</td>
            <td>Skill definition with frontmatter and instructions</td>
          </tr>
          <tr>
            <td>
              <code>scripts/</code>
            </td>
            <td>No</td>
            <td>Executable scripts the skill can use</td>
          </tr>
          <tr>
            <td>
              <code>references/</code>
            </td>
            <td>No</td>
            <td>Additional documentation loaded on demand</td>
          </tr>
          <tr>
            <td>
              <code>assets/</code>
            </td>
            <td>No</td>
            <td>Static resources (templates, images, data files)</td>
          </tr>
        </tbody>
      </table>

      <p>
        See the <Link href="/docs/spec/skills">Skills Specification</Link> for
        details.
      </p>

      <h3>agents/</h3>

      <p>
        Contains specialized AI assistants. Each agent is defined in a single
        Markdown file with YAML frontmatter.
      </p>

      <Code language="yaml" filename=".ai/agents/debugger.md">
        {`---
name: debugger
description: Expert at finding and fixing bugs
---

You are a debugging specialist...`}
      </Code>

      <p>
        See the <Link href="/docs/spec/agents">Agents Specification</Link> for
        details.
      </p>

      <h3>commands/</h3>

      <p>
        Contains slash commands for frequently used prompts. Each command is a
        Markdown file.
      </p>

      <Code language="yaml" filename=".ai/commands/review.md">
        {`---
description: Review code changes
---

Review the recent changes and provide feedback...`}
      </Code>

      <p>
        See the <Link href="/docs/spec/commands">Commands Specification</Link>{" "}
        for details.
      </p>

      <h3>AGENTS.md</h3>

      <p>
        Project-level context that persists across agent sessions. This file
        lives at the project root, not inside <code>.ai/</code>.
      </p>

      <Code language="markdown" filename="AGENTS.md">
        {`# Project Context

## Overview
Brief description of the project.

## Tech Stack
- Language: TypeScript
- Framework: Next.js

## Conventions
- Use functional components
- Follow existing patterns`}
      </Code>

      <p>
        See the <Link href="/docs/spec/memory">Memory Specification</Link> for
        details.
      </p>

      <h2>Nested Configurations</h2>

      <p>
        For monorepos or large projects, you can create nested{" "}
        <code>AGENTS.md</code> files and <code>.ai/</code> directories. The
        closest configuration to the current working file takes precedence.
      </p>

      <FileTree>
        <Folder name="monorepo">
          <File name="AGENTS.md" comment="Root config" />
          <Folder name=".ai" />
          <Folder name="packages">
            <Folder name="web">
              <File name="AGENTS.md" comment="Package-specific" />
              <Folder name=".ai" />
            </Folder>
            <Folder name="api">
              <File name="AGENTS.md" comment="Package-specific" />
              <Folder name=".ai" />
            </Folder>
          </Folder>
        </Folder>
      </FileTree>

      <Callout type="info" title="Resolution Order">
        <p>
          When resolving configurations, tools should search from the current
          file's directory upward until finding a <code>.ai/</code> directory.
        </p>
      </Callout>

      <h2>User-Level Configurations</h2>

      <p>
        Personal configurations that apply across all projects can be stored in:
      </p>

      <Code language="text">
        {`~/
├── AGENTS.md         # Personal context
└── .ai/
    ├── skills/
    ├── agents/
    └── commands/`}
      </Code>

      <p>Project-level configurations take precedence over user-level ones.</p>

      <h2>Priority Order</h2>

      <p>When multiple configurations exist, they resolve in this order:</p>

      <ol>
        <li>
          <strong>Closest project</strong> — <code>.ai/</code> nearest to the
          current file
        </li>
        <li>
          <strong>Parent directories</strong> — Walking up the directory tree
        </li>
        <li>
          <strong>User-level</strong> — <code>~/.ai/</code>
        </li>
      </ol>

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
        <li>
          <Link href="/docs/spec/memory">Memory Specification</Link>
        </li>
      </ul>
    </article>
  );
}
