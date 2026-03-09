import { SectionHeading } from "@/components/shared/SectionHeading";
import { FeatureCard } from "./FeatureCard";

const PLACEHOLDER_DESC =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

/** Mock data for the yacht-type feature grid. */
const FEATURE_ITEMS = [
  { title: "Aile - Small", description: PLACEHOLDER_DESC, imageSrc: "/mock/images/banner.png", href: "#" },
  { title: "Large Group", description: PLACEHOLDER_DESC, imageSrc: "/mock/images/banner.png", href: "#" },
  { title: "Balayı", description: PLACEHOLDER_DESC, imageSrc: "/mock/images/banner.png", href: "#" },
  { title: "Modern and New Interiors", description: PLACEHOLDER_DESC, imageSrc: "/mock/images/banner.png", href: "#" },
  { title: "Includes Jacuzzi", description: PLACEHOLDER_DESC, imageSrc: "/mock/images/banner.png", href: "#" },
  { title: "Includes Flybridge", description: PLACEHOLDER_DESC, imageSrc: "/mock/images/banner.png", href: "#" },
  { title: "Includes Water Sports", description: PLACEHOLDER_DESC, imageSrc: "/mock/images/banner.png", href: "#" },
  { title: "Calm Bays", description: PLACEHOLDER_DESC, imageSrc: "/mock/images/banner.png", href: "#" },
] as const;

/**
 * Homepage section that showcases yacht categories by type/feature.
 * Renders two rows of 4 cards in a responsive grid.
 */
export function FeatureSection() {
  return (
    <section
      className="mx-auto max-w-7xl px-4"
      style={{ paddingBlock: "var(--section-gap)" }}
    >
      <SectionHeading title="Yachts Shaped by Type" />

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {FEATURE_ITEMS.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
