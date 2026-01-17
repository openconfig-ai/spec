export type NavItem = {
  title: string;
  href?: string;
  items?: NavItem[];
  badge?: "new" | "draft" | "experimental";
};

export const navigation: NavItem[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Quick Start", href: "/docs/getting-started" },
      { title: "Directory Structure", href: "/docs/directory-structure" },
    ],
  },
  {
    title: "Specification",
    items: [
      { title: "Skills", href: "/docs/spec/skills" },
      { title: "Agents", href: "/docs/spec/agents" },
      { title: "Commands", href: "/docs/spec/commands" },
      { title: "Memory", href: "/docs/spec/memory" },
    ],
  },
  {
    title: "Resources",
    items: [{ title: "Tool Support", href: "/docs/tools" }],
  },
];

export function flattenNavigation(nav: NavItem[]): NavItem[] {
  return nav.flatMap((item) => {
    if (item.items) {
      return flattenNavigation(item.items);
    }
    return item.href ? [item] : [];
  });
}

export function findNavItem(href: string): NavItem | undefined {
  const flat = flattenNavigation(navigation);
  return flat.find((item) => item.href === href);
}

export function findAdjacentItems(href: string): {
  prev: NavItem | undefined;
  next: NavItem | undefined;
} {
  const flat = flattenNavigation(navigation);
  const index = flat.findIndex((item) => item.href === href);

  return {
    prev: index > 0 ? flat[index - 1] : undefined,
    next: index < flat.length - 1 ? flat[index + 1] : undefined,
  };
}
