"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { type NavItem, navigation } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-16 h-[calc(100vh-4rem)] w-[var(--docs-sidebar-width)] shrink-0 overflow-y-auto border-r border-sidebar-border bg-sidebar-bg py-8 pr-4">
      <nav className="space-y-8">
        {navigation.map((section) => (
          <div key={section.title}>
            {section.href ? (
              <Link
                href={section.href}
                className={cn(
                  "block text-sm font-medium transition-colors",
                  pathname === section.href
                    ? "text-sidebar-active"
                    : "text-foreground hover:text-sidebar-active",
                )}
              >
                {section.title}
              </Link>
            ) : (
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {section.title}
              </h4>
            )}
            {section.items && (
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <SidebarItem
                    key={item.href}
                    item={item}
                    pathname={pathname}
                  />
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}

function SidebarItem({ item, pathname }: { item: NavItem; pathname: string }) {
  const isActive = pathname === item.href;

  return (
    <li>
      <Link
        href={item.href || "#"}
        className={cn(
          "block rounded-md px-3 py-2 text-sm transition-all",
          isActive
            ? "bg-muted font-medium text-sidebar-active"
            : "text-muted-foreground hover:bg-muted hover:text-foreground",
        )}
      >
        <span className="flex items-center gap-2">
          {item.title}
          {item.badge && (
            <span
              className={cn(
                "rounded-full px-1.5 py-0.5 text-[10px] font-medium uppercase",
                item.badge === "new" && "bg-accent/20 text-accent",
                item.badge === "draft" &&
                  "bg-muted-foreground/20 text-muted-foreground",
                item.badge === "experimental" &&
                  "bg-amber-500/20 text-amber-600",
              )}
            >
              {item.badge}
            </span>
          )}
        </span>
      </Link>
    </li>
  );
}

export function MobileSidebar() {
  return (
    <div className="fixed bottom-4 left-4 z-50 lg:hidden">
      <button
        type="button"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg"
        aria-label="Open navigation"
      >
        <MenuIcon className="h-5 w-5" />
      </button>
    </div>
  );
}

function MenuIcon({ className }: { className?: string }) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
