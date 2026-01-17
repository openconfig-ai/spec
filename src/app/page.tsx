import Link from "next/link";
import { Code } from "@/components/mdx/code";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
            <span className="font-semibold tracking-tight">OpenConfig.ai</span>
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/docs"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Documentation
            </Link>
            <Link
              href="/docs/spec/skills"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Specification
            </Link>
            <a
              href="https://github.com/openconfig-ai/spec"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              RFC Draft v0.1
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight lg:text-5xl">
              One directory.
              <br />
              <span className="text-accent">Every AI agent.</span>
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground lg:text-xl">
              OpenConfig.ai proposes a unified <code>.ai/</code> directory
              structure for AI agent configurations. Define skills, agents,
              commands, and memory in a standardized format that works across
              tools.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Read the Spec
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/docs/getting-started"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
              >
                Quick Start
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Preview */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-4 text-2xl font-semibold tracking-tight">
                A familiar structure
              </h2>
              <p className="mb-6 text-muted-foreground">
                The <code>.ai/</code> directory follows conventions established
                by tools like Claude Code, Cursor, and VS Code. One location for
                all your agent configurations.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    <strong>skills/</strong> — Reusable capabilities and
                    knowledge modules
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    <strong>agents/</strong> — Specialized AI assistants with
                    custom prompts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    <strong>commands/</strong> — Slash commands for common tasks
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <span>
                    <strong>AGENTS.md</strong> — Project context for all agents
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <Code language="text" filename="project/">
                {`my-project/
├── AGENTS.md
└── .ai/
    ├── skills/
    │   └── code-review/
    │       └── SKILL.md
    ├── agents/
    │   └── debugger.md
    └── commands/
        └── commit.md`}
              </Code>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <h2 className="mb-12 text-center text-2xl font-semibold tracking-tight">
            Why OpenConfig.ai?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <PortableIcon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mb-2 font-semibold">Portable</h3>
              <p className="text-sm text-muted-foreground">
                Write once, use everywhere. Your configurations work across
                Claude Code, Cursor, VS Code, and more.
              </p>
            </div>
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <ExtensibleIcon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mb-2 font-semibold">Flexible</h3>
              <p className="text-sm text-muted-foreground">
                A minimal core specification that tools can build upon without
                breaking compatibility.
              </p>
            </div>
            <div>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                <SimpleIcon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mb-2 font-semibold">Simple</h3>
              <p className="text-sm text-muted-foreground">
                Markdown files with YAML frontmatter. No complex build steps or
                proprietary formats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-semibold tracking-tight">
              Ready to standardize?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Read the specification or contribute to the standard.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                Read Documentation
              </Link>
              <a
                href="https://github.com/openconfig-ai/spec"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              OpenConfig.ai is an open specification proposal.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/openconfig-ai/spec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                GitHub
              </a>
              <Link
                href="/docs"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Logo() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 10 L26 10 L32 16 L58 16 L58 54 L6 54 Z"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <text
        x="32"
        y="40"
        fontFamily="system-ui, sans-serif"
        fontSize="16"
        textAnchor="middle"
        fill="var(--accent)"
        fontWeight="bold"
      >
        .ai
      </text>
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function PortableIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
      <path d="m2 12 20 0" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ExtensibleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 3v18" />
      <rect width="6" height="6" x="3" y="9" rx="1" />
      <rect width="6" height="6" x="15" y="9" rx="1" />
    </svg>
  );
}

function SimpleIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  );
}
