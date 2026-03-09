import { CabinFilterCard } from "./CabinFilterCard";

/** Mock filter options for cabin/guest quick-filter cards. */
const CABIN_FILTERS = [
  { cabins: "2-4", guests: "4-8" },
  { cabins: "5-6", guests: "10-12" },
  { cabins: "7-8", guests: "14-16" },
  { cabins: "9+", guests: "18+" },
] as const;

/**
 * Grid section that renders CabinFilterCards for quick cabin/guest filtering.
 * Responsive 2→4 column layout.
 */
export function CabinFilterSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {CABIN_FILTERS.map((filter) => (
          <CabinFilterCard
            key={filter.cabins}
            cabins={filter.cabins}
            guests={filter.guests}
            available="50"
            href="#"
          />
        ))}
      </div>
    </section>
  );
}
