import { Landmark, ChefHat, Coffee } from "lucide-react";

/**
 * Single restaurant item for the section.
 */
export type RestaurantItem = {
  /** Restaurant name. */
  name: string;
  /** Lucide icon component to display. */
  icon: React.ComponentType<{ className?: string }>;
};

/**
 * Props for the RestaurantSection component.
 */
export type RestaurantSectionProps = {
  /** Optional list of restaurants to display. */
  restaurants?: RestaurantItem[];
};

const DEFAULT_RESTAURANTS: RestaurantItem[] = [
  { name: "Angora Restaurant", icon: Landmark },
  { name: "Pepediz Steakhouse", icon: ChefHat },
  { name: "Ikay's Eat & Drink", icon: Coffee },
];

/**
 * Renders a section showcasing recommended restaurants with icons and names.
 */
export function RestaurantSection({
  restaurants = DEFAULT_RESTAURANTS,
}: RestaurantSectionProps) {
  return (
    <section>
      <h2
        className="text-lg font-bold text-center mb-6 italic"
        style={{ color: "var(--brand-brown)" }}
      >
        Recommended Restaurants
      </h2>
      <div className="flex items-center justify-center gap-8 md:gap-16">
        {restaurants.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="flex flex-col items-center gap-2"
          >
            <div className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center">
              <Icon className="size-5 text-gray-600" aria-hidden />
            </div>
            <span className="text-xs text-center font-medium">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
