import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CalloutType = "info" | "warning" | "tip" | "danger";

interface CalloutProps {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}

const calloutStyles: Record<
  CalloutType,
  { border: string; bg: string; icon: ReactNode }
> = {
  info: {
    border: "border-l-blue-500",
    bg: "bg-blue-500/5",
    icon: <InfoIcon className="h-5 w-5 text-blue-500" />,
  },
  warning: {
    border: "border-l-amber-500",
    bg: "bg-amber-500/5",
    icon: <WarningIcon className="h-5 w-5 text-amber-500" />,
  },
  tip: {
    border: "border-l-emerald-500",
    bg: "bg-emerald-500/5",
    icon: <TipIcon className="h-5 w-5 text-emerald-500" />,
  },
  danger: {
    border: "border-l-red-500",
    bg: "bg-red-500/5",
    icon: <DangerIcon className="h-5 w-5 text-red-500" />,
  },
};

export function Callout({ type = "info", title, children }: CalloutProps) {
  const styles = calloutStyles[type];

  return (
    <div
      className={cn(
        "my-6 rounded-r-lg border-l-4 p-4",
        styles.border,
        styles.bg,
      )}
    >
      <div className="flex gap-3">
        <div className="shrink-0 pt-0.5">{styles.icon}</div>
        <div className="min-w-0">
          {title && (
            <p className="mb-1 font-semibold text-foreground">{title}</p>
          )}
          <div className="text-sm text-muted-foreground [&>p]:mb-2 [&>p:last-child]:mb-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function WarningIcon({ className }: { className?: string }) {
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
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  );
}

function TipIcon({ className }: { className?: string }) {
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
      <path d="M12 2v1" />
      <path d="M12 21v1" />
      <path d="m4.93 4.93.7.7" />
      <path d="m18.36 18.36.7.7" />
      <path d="M2 12h1" />
      <path d="M21 12h1" />
      <path d="m4.93 19.07.7-.7" />
      <path d="m18.36 5.64.7-.7" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}

function DangerIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6" />
      <path d="m9 9 6 6" />
    </svg>
  );
}
