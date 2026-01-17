"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  highlightedHtml: string;
}

export function CodeBlock({
  code,
  language,
  filename,
  highlightedHtml,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative my-6">
      {(filename || language) && (
        <div className="flex items-center justify-between rounded-t-lg border border-b-0 border-code-border bg-muted px-4 py-2">
          <span className="font-mono text-xs text-muted-foreground">
            {filename || language}
          </span>
        </div>
      )}
      <div className="relative">
        <div
          className={cn(
            "overflow-x-auto [&>pre]:my-0 [&>pre]:rounded-none",
            filename || language
              ? "[&>pre]:rounded-b-lg [&>pre]:rounded-t-none"
              : "[&>pre]:rounded-lg",
          )}
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Shiki output is safe
          dangerouslySetInnerHTML={{ __html: highlightedHtml }}
        />
        <button
          type="button"
          onClick={copyToClipboard}
          className={cn(
            "absolute right-3 top-3 rounded-md border border-code-border bg-code-bg px-2 py-1.5",
            "text-xs text-muted-foreground transition-all",
            "opacity-0 group-hover:opacity-100",
            "hover:bg-muted hover:text-foreground",
            "focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-accent",
          )}
          aria-label={copied ? "Copied!" : "Copy code"}
        >
          {copied ? (
            <span className="flex items-center gap-1">
              <CheckIcon className="h-3.5 w-3.5" />
              Copied
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <CopyIcon className="h-3.5 w-3.5" />
              Copy
            </span>
          )}
        </button>
      </div>
    </div>
  );
}

function CopyIcon({ className }: { className?: string }) {
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
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
