import type { Metadata } from "next";
import Link from "next/link";
import { Callout } from "@/components/mdx/callout";

export const metadata: Metadata = {
  title: "Tool Support",
  description: "AI coding tools that support the OpenConfig.ai specification.",
};

export default function ToolsPage() {
  return (
    <article className="prose">
      <h1>Tool Support</h1>

      <p>
        OpenConfig.ai is designed to work across AI coding tools. This page
        tracks current and planned support.
      </p>

      <Callout type="info" title="Draft Specification">
        <p>
          OpenConfig.ai is currently a proposal. Tool support will be updated as
          vendors adopt the specification.
        </p>
      </Callout>

      <h2>Adoption Status</h2>

      <div className="not-prose my-8">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 pr-4 text-left font-semibold">Tool</th>
                <th className="px-4 py-3 text-center font-semibold">Skills</th>
                <th className="px-4 py-3 text-center font-semibold">Agents</th>
                <th className="px-4 py-3 text-center font-semibold">
                  Commands
                </th>
                <th className="px-4 py-3 text-center font-semibold">Memory</th>
              </tr>
            </thead>
            <tbody>
              <ToolRow
                name="Claude Code"
                vendor="Anthropic"
                skills="partial"
                agents="partial"
                commands="partial"
                memory="partial"
                note="Uses .claude/ directory"
              />
              <ToolRow
                name="Cursor"
                vendor="Cursor"
                skills="planned"
                agents="planned"
                commands="planned"
                memory="partial"
                note="Uses .cursorrules"
              />
              <ToolRow
                name="VS Code Copilot"
                vendor="Microsoft"
                skills="planned"
                agents="planned"
                commands="planned"
                memory="planned"
                note="Uses .github/copilot/"
              />
              <ToolRow
                name="OpenAI Codex"
                vendor="OpenAI"
                skills="partial"
                agents="planned"
                commands="planned"
                memory="partial"
                note="Uses AGENTS.md"
              />
              <ToolRow
                name="Gemini CLI"
                vendor="Google"
                skills="planned"
                agents="planned"
                commands="planned"
                memory="partial"
                note="Uses .gemini/"
              />
              <ToolRow
                name="Windsurf"
                vendor="Codeium"
                skills="planned"
                agents="planned"
                commands="planned"
                memory="planned"
              />
              <ToolRow
                name="Aider"
                vendor="Aider"
                skills="planned"
                agents="planned"
                commands="planned"
                memory="partial"
                note="Reads AGENTS.md"
              />
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Full support
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-500" />
            Partial (similar format)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-stone-400" />
            Planned
          </span>
        </div>
      </div>

      <h2>Current Landscape</h2>

      <p>Today, most AI coding tools use their own configuration formats:</p>

      <table>
        <thead>
          <tr>
            <th>Tool</th>
            <th>Current Location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Claude Code</td>
            <td>
              <code>.claude/</code>
            </td>
          </tr>
          <tr>
            <td>Cursor</td>
            <td>
              <code>.cursor/</code>, <code>.cursorrules</code>
            </td>
          </tr>
          <tr>
            <td>VS Code Copilot</td>
            <td>
              <code>.github/copilot/</code>
            </td>
          </tr>
          <tr>
            <td>OpenAI Codex</td>
            <td>
              <code>AGENTS.md</code>
            </td>
          </tr>
          <tr>
            <td>Gemini CLI</td>
            <td>
              <code>.gemini/</code>
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        OpenConfig.ai proposes <code>.ai/</code> as a unified location that all
        tools can adopt.
      </p>

      <h2>Migration Path</h2>

      <p>Tools can adopt OpenConfig.ai incrementally:</p>

      <ol>
        <li>
          <strong>Phase 1:</strong> Read <code>AGENTS.md</code> alongside
          existing formats
        </li>
        <li>
          <strong>Phase 2:</strong> Support <code>.ai/skills/</code> and{" "}
          <code>.ai/commands/</code>
        </li>
        <li>
          <strong>Phase 3:</strong> Support <code>.ai/agents/</code> with full
          spec compliance
        </li>
        <li>
          <strong>Phase 4:</strong> Use <code>.ai/</code> as the primary
          location
        </li>
      </ol>

      <h2>For Tool Authors</h2>

      <p>
        If you're building an AI coding tool and want to support OpenConfig.ai:
      </p>

      <ol>
        <li>
          Read the{" "}
          <Link href="/docs/directory-structure">Directory Structure</Link>{" "}
          specification
        </li>
        <li>
          Implement support for <code>AGENTS.md</code> first (easiest)
        </li>
        <li>Add support for skills, commands, and agents as needed</li>
      </ol>

      <Callout type="tip" title="Questions?">
        <p>
          Open an issue on GitHub if you have questions about implementing
          OpenConfig.ai support in your tool.
        </p>
      </Callout>

      <h2>Related Standards</h2>

      <p>OpenConfig.ai builds on existing standards:</p>

      <ul>
        <li>
          <a
            href="https://agentskills.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agent Skills
          </a>{" "}
          — The SKILL.md format specification
        </li>
        <li>
          <a href="https://agents.md" target="_blank" rel="noopener noreferrer">
            AGENTS.md
          </a>{" "}
          — Project context for AI agents
        </li>
        <li>YAML frontmatter — Standard metadata format for Markdown files</li>
      </ul>

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
      </ul>
    </article>
  );
}

type SupportLevel = "full" | "partial" | "planned";

function ToolRow({
  name,
  vendor,
  skills,
  agents,
  commands,
  memory,
  note,
}: {
  name: string;
  vendor: string;
  skills: SupportLevel;
  agents: SupportLevel;
  commands: SupportLevel;
  memory: SupportLevel;
  note?: string;
}) {
  return (
    <tr className="border-b border-border">
      <td className="py-3 pr-4">
        <div className="font-medium">{name}</div>
        <div className="text-xs text-muted-foreground">{vendor}</div>
        {note && (
          <div className="mt-1 text-xs text-muted-foreground">{note}</div>
        )}
      </td>
      <td className="px-4 py-3 text-center">
        <StatusBadge level={skills} />
      </td>
      <td className="px-4 py-3 text-center">
        <StatusBadge level={agents} />
      </td>
      <td className="px-4 py-3 text-center">
        <StatusBadge level={commands} />
      </td>
      <td className="px-4 py-3 text-center">
        <StatusBadge level={memory} />
      </td>
    </tr>
  );
}

function StatusBadge({ level }: { level: SupportLevel }) {
  const styles = {
    full: "bg-emerald-500",
    partial: "bg-amber-500",
    planned: "bg-stone-400",
  };

  return (
    <span
      className={`inline-block h-2.5 w-2.5 rounded-full ${styles[level]}`}
      title={level}
    />
  );
}
