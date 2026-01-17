import type { ReactNode } from "react";
import { DocsHeader } from "@/components/docs/header";
import { Sidebar } from "@/components/docs/sidebar";

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <DocsHeader />
      <div className="flex">
        <Sidebar />
        <main className="min-w-0 flex-1 px-8 py-12 lg:px-12">
          <div className="mx-auto max-w-[var(--docs-content-max-width)]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
