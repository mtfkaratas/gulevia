import { SectionHeading } from "@/components/shared/SectionHeading";
import { CruiseRouteCard } from "./CruiseRouteCard";

export type RelatedCruisesProps = {
  /** Section title. Defaults to "Gulet Cruise From Fethiye". */
  title?: string;
};

/** Mock cruise data for the grid. */
const MOCK_ROUTES = [
  {
    imageSrc: "/mock/images/banner.png",
    title: "Marmaris to Fethiye Blue",
    from: "Fethiye",
    days: "7 Days",
    href: "#",
  },
  {
    imageSrc: "/mock/images/banner.png",
    title: "Marmaris to Fethiye Blue",
    from: "Fethiye",
    days: "7 Days",
    href: "#",
  },
  {
    imageSrc: "/mock/images/banner.png",
    title: "Marmaris to Fethiye Blue",
    from: "Fethiye",
    days: "7 Days",
    href: "#",
  },
  {
    imageSrc: "/mock/images/banner.png",
    title: "Marmaris to Fethiye Blue",
    from: "Fethiye",
    days: "7 Days",
    href: "#",
  },
  {
    imageSrc: "/mock/images/banner.png",
    title: "Marmaris to Fethiye Blue",
    from: "Fethiye",
    days: "7 Days",
    href: "#",
  },
  {
    imageSrc: "/mock/images/banner.png",
    title: "Marmaris to Fethiye Blue",
    from: "Fethiye",
    days: "7 Days",
    href: "#",
  },
] as const;

/**
 * Section displaying related gulet cruise routes in a 3-column grid.
 * Uses SectionHeading for the title and CruiseRouteCard for each route.
 */
export function RelatedCruises({ title = "Gulet Cruise From Fethiye" }: RelatedCruisesProps) {
  return (
    <section>
      <SectionHeading title={title} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {MOCK_ROUTES.map((route, index) => (
          <CruiseRouteCard
            key={index}
            imageSrc={route.imageSrc}
            title={route.title}
            from={route.from}
            days={route.days}
            href={route.href}
          />
        ))}
      </div>
    </section>
  );
}
