type Category = { slug: string; name: string };

export function CategoryTabs({
  categories,
  activeSlug,
  onSelect,
}: {
  categories: Category[];
  activeSlug: string;
  onSelect: (slug: string) => void;
}) {
  return (
    <div className="scrollbar-none -mx-5 flex gap-6 overflow-x-auto border-b border-line-soft px-5 sm:mx-0 sm:flex-wrap sm:px-0">
      {categories.map((category) => {
        const isActive = category.slug === activeSlug;
        return (
          <button
            key={category.slug}
            type="button"
            onClick={() => onSelect(category.slug)}
            aria-pressed={isActive}
            className={`shrink-0 cursor-pointer whitespace-nowrap border-b-2 py-3 text-sm transition-colors ${
              isActive
                ? "border-brand-amber text-paper"
                : "border-transparent text-ink-dim hover:text-paper"
            }`}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
