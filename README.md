# OpenConfig.ai

A unified specification for AI agent configurations. Define skills, agents, commands, and project context in a standardized `.ai/` directory that works across AI coding tools.

## The Problem

AI coding assistants use different configuration formats:

- **Claude Code** uses `.claude/`
- **Cursor** uses `.cursor/` and `.cursorrules`
- **VS Code Copilot** uses `.github/copilot/`
- **Gemini CLI** uses `.gemini/`

This fragmentation means maintaining multiple configs for the same purpose.

## The Solution

OpenConfig.ai proposes a single `.ai/` directory as the standard:

```
my-project/
├── AGENTS.md              # Project context
└── .ai/
    ├── skills/            # Reusable capabilities
    │   └── code-review/
    │       └── SKILL.md
    ├── agents/            # Specialized assistants
    │   └── debugger.md
    └── commands/          # Slash commands
        └── review.md
```

## Specification

### AGENTS.md

Project-level context at the repository root. Plain Markdown describing your tech stack, conventions, and commands.

### Skills

Reusable capabilities in `.ai/skills/<name>/SKILL.md`:

```yaml
---
name: code-review
description: Reviews code for quality and security issues.
---

# Code Review

When reviewing code, check for...
```

**Fields:** `name` (required), `description` (required), `license` (optional)

### Agents

Specialized assistants in `.ai/agents/<name>.md`:

```yaml
---
name: debugger
description: Expert at finding and fixing bugs.
---

You are a debugging specialist...
```

**Fields:** `name` (required), `description` (required)

### Commands

Slash commands in `.ai/commands/<name>.md`:

```yaml
---
description: Review recent code changes
---

Review the changes and provide feedback...
```

**Fields:** `description` (optional)

## Documentation

Visit [openconfig.ai](https://openconfig.ai) for the full specification.

## Development

```bash
bun install
bun run dev
```

## Contributing

Contributions are welcome. Please open an issue to discuss changes before submitting a PR.

## License

MIT
