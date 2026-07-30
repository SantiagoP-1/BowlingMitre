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
    <div className="scrollbar-none -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
      {categories.map((category) => {
        const isActive = category.slug === activeSlug;
        return (
          <button
            key={category.slug}
            type="button"
            onClick={() => onSelect(category.slug)}
            aria-pressed={isActive}
            className={`shrink-0 cursor-pointer rounded-full border px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors ${
              isActive
                ? "border-brand-red bg-brand-red/10 text-paper"
                : "border-line text-ink-dim hover:border-brand-teal hover:text-brand-teal"
            }`}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}
