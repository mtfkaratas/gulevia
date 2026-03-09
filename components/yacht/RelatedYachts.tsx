import { SectionHeading } from "@/components/shared/SectionHeading";
import { YachtCard } from "@/components/home/YachtCard";
import { BudgetCategoryCard } from "@/components/home/BudgetCategoryCard";

type RelatedYachtsProps = {
  /** Section heading text. */
  title?: string;
};

const YACHT_NAMES = ["Daima", "Ceylan", "Diva Deniz", "Daima"];

/**
 * Related yachts grid section displayed at the bottom of yacht detail pages.
 *
 * Layout: 3-column grid on desktop, 2-column on mobile.
 * First cell is a "More Cheapest Gulets" promotional card,
 * last cell is a "More Luxury Gulets" promotional card,
 * and middle cells are standard yacht listing cards.
 */
export function RelatedYachts({
  title = "Related Bodrum Gulets",
}: RelatedYachtsProps) {
  return (
    <section>
      <SectionHeading title={title} />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
        <BudgetCategoryCard
          title="More Cheapest Gulets"
          priceRange="$ 40.000 - 100.000 /weekly"
          imageSrc="/mock/images/banner.png"
          href="#"
        />

        {YACHT_NAMES.map((name, i) => (
          <YachtCard
            key={`${name}-${i}`}
            imageSrc="/mock/images/banner.png"
            name={name}
            length="32"
            cabins="3"
            guests="4"
            badge="Luxury"
            price="10.000 Euro + Expenses/weekly"
            href="#"
          />
        ))}

        <BudgetCategoryCard
          title="More Luxury Gulets"
          priceRange="$ 40.000 - 100.000 /weekly"
          imageSrc="/mock/images/banner.png"
          href="#"
        />
      </div>
    </section>
  );
}
