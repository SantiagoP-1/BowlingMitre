"use client";

import { useEffect, useRef } from "react";
import { menu } from "@/data/menu";
import { useActiveSection } from "@/lib/useActiveSection";

const CATEGORY_IDS = menu.map((c) => c.id);

export function CategoryNav() {
  const activeId = useActiveSection(CATEGORY_IDS, CATEGORY_IDS[0]);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const activeLink = listRef.current?.querySelector<HTMLAnchorElement>(
      `a[href="#${activeId}"]`
    );
    activeLink?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [activeId]);

  return (
    <nav className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/90">
      <div className="mx-auto max-w-5xl px-4">
        <ul
          ref={listRef}
          className="scrollbar-none flex gap-7 overflow-x-auto whitespace-nowrap py-3.5 text-[13.5px] tracking-wide"
        >
          {menu.map((category) => (
            <li key={category.id}>
              <a
                href={`#${category.id}`}
                className={`inline-block border-b-2 pb-0.5 transition-colors duration-150 ${
                  activeId === category.id
                    ? "border-brand-red text-brand-red font-medium"
                    : "border-transparent text-ink-muted hover:text-ink"
                }`}
              >
                {category.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
