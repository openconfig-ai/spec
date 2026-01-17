import { highlightCode } from "@/lib/shiki";
import { CodeBlock } from "./code-block";

interface CodeProps {
  children: string;
  language?: string;
  filename?: string;
}

export async function Code({
  children,
  language = "text",
  filename,
}: CodeProps) {
  const code = children.trim();
  const highlightedHtml = await highlightCode(code, language);

  return (
    <CodeBlock
      code={code}
      language={language}
      filename={filename}
      highlightedHtml={highlightedHtml}
    />
  );
}
