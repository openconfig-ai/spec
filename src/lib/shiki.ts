import { createHighlighter, type Highlighter } from "shiki";

let highlighterPromise: Promise<Highlighter> | null = null;

export async function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ["github-dark-default", "github-light-default"],
      langs: [
        "typescript",
        "javascript",
        "json",
        "yaml",
        "bash",
        "shell",
        "markdown",
        "mdx",
        "toml",
        "css",
        "html",
        "tsx",
        "jsx",
        "python",
        "go",
        "rust",
        "text",
      ],
    });
  }
  return highlighterPromise;
}

export async function highlightCode(
  code: string,
  lang: string,
): Promise<string> {
  const hl = await getHighlighter();

  const normalizedLang =
    lang === "sh" ? "bash" : lang === "plaintext" ? "text" : lang;

  const loadedLangs = hl.getLoadedLanguages();
  const finalLang = loadedLangs.includes(normalizedLang as never)
    ? normalizedLang
    : "text";

  return hl.codeToHtml(code, {
    lang: finalLang,
    themes: {
      dark: "github-dark-default",
      light: "github-light-default",
    },
  });
}
