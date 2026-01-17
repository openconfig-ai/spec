import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FileTreeProps {
  children: ReactNode;
}

export function FileTree({ children }: FileTreeProps) {
  return (
    <div className="my-6 rounded-lg border border-border bg-muted/30 p-4 font-mono text-sm">
      <div className="space-y-0.5">{children}</div>
    </div>
  );
}

interface FileProps {
  name: string;
  comment?: string;
}

export function File({ name, comment }: FileProps) {
  return (
    <div className="flex items-center gap-2 py-0.5 pl-4">
      <FileIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
      <span className="text-foreground">{name}</span>
      {comment && (
        <span className="text-muted-foreground">
          {"# "}
          {comment}
        </span>
      )}
    </div>
  );
}

interface FolderProps {
  name: string;
  children?: ReactNode;
  defaultOpen?: boolean;
  comment?: string;
}

export function Folder({ name, children, comment }: FolderProps) {
  return (
    <div className="py-0.5">
      <div className="flex items-center gap-2 pl-4">
        <FolderIcon className="h-4 w-4 shrink-0 text-accent" />
        <span className="font-medium text-foreground">{name}/</span>
        {comment && (
          <span className="text-muted-foreground">
            {"# "}
            {comment}
          </span>
        )}
      </div>
      {children && (
        <div className="ml-4 border-l border-border pl-2">{children}</div>
      )}
    </div>
  );
}

function FileIcon({ className }: { className?: string }) {
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
    </svg>
  );
}

function FolderIcon({ className }: { className?: string }) {
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
      <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
    </svg>
  );
}

FileTree.File = File;
FileTree.Folder = Folder;
