import { SectionHeading } from "@/components/shared/SectionHeading";
import { BudgetCategoryCard } from "./BudgetCategoryCard";

/** Mock data for the three budget tiers. */
const BUDGET_CATEGORIES = [
  {
    title: "Luxury Gulets",
    priceRange: "$40,000–100,000/weekly",
    imageSrc: "/mock/images/banner.png",
    href: "#",
  },
  {
    title: "Best Value Gulets",
    priceRange: "$20,000–40,000/weekly",
    imageSrc: "/mock/images/banner.png",
    href: "#",
  },
  {
    title: "Cheapest Gulets",
    priceRange: "$10,000–20,000/weekly",
    imageSrc: "/mock/images/banner.png",
    href: "#",
  },
] as const;

/**
 * Homepage section that presents gulet categories grouped by budget range.
 * Renders a responsive 1→3 column grid of BudgetCategoryCard components.
 */
export function BudgetCategorySection() {
  return (
    <section
      className="mx-auto max-w-7xl px-4"
      style={{ paddingTop: "var(--section-gap)", paddingBottom: "calc(var(--section-gap) + 1rem)" }}
    >
      <SectionHeading
        title="Gulets That Match Your Style & Needs"
        subtitle="Discover the best Gulets in Türkiye, Greece, Croatia that suit your budget!"
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {BUDGET_CATEGORIES.map((category) => (
          <BudgetCategoryCard key={category.title} {...category} />
        ))}
      </div>
    </section>
  );
}
