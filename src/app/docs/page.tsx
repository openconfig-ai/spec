import type { Metadata } from "next";
import Link from "next/link";
import { Callout } from "@/components/mdx/callout";
import { Code } from "@/components/mdx/code";
import { File, FileTree, Folder } from "@/components/mdx/file-tree";

export const metadata: Metadata = {
  title: "Introduction",
  description:
    "OpenConfig.ai is a unified specification for AI agent configurations.",
};

export default function DocsPage() {
  return (
    <article className="prose">
      <h1>Introduction</h1>

      <p>
        <strong>OpenConfig.ai</strong> is a proposal for a unified specification
        for AI agent configurations. It defines a standard <code>.ai/</code>{" "}
        directory structure that works across different AI coding tools.
      </p>

      <Callout type="info" title="Draft Specification">
        <p>
          This specification is currently in draft status (v0.1). We welcome
          feedback and contributions from the community.
        </p>
      </Callout>

      <h2>The Problem</h2>

      <p>
        Today, AI coding assistants use different configuration formats and
        locations:
      </p>

      <ul>
        <li>
          <strong>Claude Code</strong> uses <code>.claude/</code> for agents,
          commands, and skills
        </li>
        <li>
          <strong>Cursor</strong> uses <code>.cursor/</code> and{" "}
          <code>.cursorrules</code>
        </li>
        <li>
          <strong>VS Code Copilot</strong> uses <code>.github/copilot/</code>
        </li>
        <li>
          <strong>AGENTS.md</strong> is used by 60k+ repos but has no formal
          spec
        </li>
      </ul>

      <p>
        This fragmentation means developers must maintain multiple configuration
        files for the same purpose, and knowledge cannot be easily shared across
        tools.
      </p>

      <h2>The Solution</h2>

      <p>
        OpenConfig.ai proposes a single <code>.ai/</code> directory as the
        standard location for all AI agent configurations:
      </p>

      <FileTree>
        <Folder name="my-project">
          <File name="AGENTS.md" comment="Project context" />
          <Folder name=".ai">
            <Folder name="skills" comment="Reusable capabilities">
              <Folder name="code-review">
                <File name="SKILL.md" />
              </Folder>
            </Folder>
            <Folder name="agents" comment="Specialized assistants">
              <File name="debugger.md" />
            </Folder>
            <Folder name="commands" comment="Slash commands">
              <File name="commit.md" />
            </Folder>
          </Folder>
        </Folder>
      </FileTree>

      <h2>Core Principles</h2>

      <h3>1. Portable</h3>
      <p>
        Configurations should work across any AI coding tool that supports the
        spec. Write once, use everywhere.
      </p>

      <h3>2. Flexible</h3>
      <p>
        A minimal core specification that tools can build upon. The same
        configurations work across different AI coding tools.
      </p>

      <h3>3. Simple</h3>
      <p>
        All configurations use Markdown files with YAML frontmatter. No build
        steps, no proprietary formats.
      </p>

      <h2>Components</h2>

      <p>The specification defines four core components:</p>

      <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
        <ComponentCard
          href="/docs/spec/skills"
          title="Skills"
          description="Reusable capabilities and knowledge modules that extend agent abilities."
        />
        <ComponentCard
          href="/docs/spec/agents"
          title="Agents"
          description="Specialized AI assistants with custom prompts and tool access."
        />
        <ComponentCard
          href="/docs/spec/commands"
          title="Commands"
          description="Slash commands for frequently used prompts and workflows."
        />
        <ComponentCard
          href="/docs/spec/memory"
          title="Memory"
          description="Project-level context that persists across agent sessions."
        />
      </div>

      <h2>Quick Example</h2>

      <p>Here's a simple skill that helps agents review code:</p>

      <Code language="yaml" filename=".ai/skills/code-review/SKILL.md">
        {`---
name: code-review
description: Reviews code for quality, security, and best practices.
---

# Code Review

When reviewing code, analyze for:

1. **Security** - Check for vulnerabilities
2. **Performance** - Identify bottlenecks
3. **Style** - Verify coding conventions
4. **Logic** - Find potential bugs

Provide specific, actionable feedback with examples.`}
      </Code>

      <h2>Next Steps</h2>

      <ul>
        <li>
          <Link href="/docs/getting-started">Quick Start</Link> — Set up your
          first <code>.ai/</code> directory
        </li>
        <li>
          <Link href="/docs/directory-structure">Directory Structure</Link> —
          Full specification details
        </li>
        <li>
          <Link href="/docs/spec/skills">Skills Specification</Link> — Deep dive
          into skills
        </li>
      </ul>
    </article>
  );
}

function ComponentCard({
  href,
  title,
  description,
}: {
  href: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-lg border border-border p-5 transition-colors hover:border-accent hover:bg-muted/50"
    >
      <h3 className="mb-2 font-semibold text-foreground group-hover:text-accent">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </Link>
  );
}
