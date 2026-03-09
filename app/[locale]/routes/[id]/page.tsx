import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/lib/locale";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RouteInfoMap } from "@/components/route/RouteInfoMap";
import { HighlightsTopSites } from "@/components/route/HighlightsTopSites";
import { WeatherGrid } from "@/components/route/WeatherGrid";
import { FeatureGrid } from "@/components/yacht/FeatureGrid";
import { ItinerarySection } from "@/components/route/ItinerarySection";
import { RestaurantSection } from "@/components/route/RestaurantSection";
import { RelatedCruises } from "@/components/route/RelatedCruises";
import { YachtCard } from "@/components/home/YachtCard";
import {
  Globe,
  BedDouble,
  Wifi,
  AirVent,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

const MOCK_IMAGE = "/mock/images/banner.png";

const CABIN_FEATURES = [
  { icon: Globe, label: "Capacity in Turkey", value: "10 Guest" as string | boolean },
  { icon: BedDouble, label: "Master Cabin", value: "1" as string | boolean },
  { icon: BedDouble, label: "Triple Cabin", value: false as string | boolean },
  { icon: Wifi, label: "Wi-Fi", value: true as string | boolean },
  { icon: Globe, label: "Capacity in Greece", value: false as string | boolean },
  { icon: BedDouble, label: "Double Cabin", value: "2" as string | boolean },
  { icon: BedDouble, label: "Twin Cabin", value: false as string | boolean },
  { icon: AirVent, label: "Airconditioning", value: true as string | boolean },
];

const YACHT_NAMES = ["Diva Deniz", "Daima", "Ceylan", "Diva Deniz", "Daima", "Ceylan"];

/**
 * Route detail page — renders a single gulet cruise route by id.
 *
 * Sections: breadcrumb, header, route info with map, highlights/sites,
 * weather grid, cabin features, day-by-day itinerary, recommended restaurants,
 * related cruises, and yachts for this route.
 */
export default async function RouteDetailPage({ params }: Props) {
  const { locale, id } = await params;
  setRequestLocale(locale as Locale);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* ── Breadcrumb ── */}
      <div className="pt-4">
        <Breadcrumb
          items={[
            { label: "Gulevia", href: "/" },
            { label: "Turkey", href: "#" },
            { label: "Fethiye", href: "#" },
            { label: "Fethiye Ölüdeniz" },
          ]}
        />
      </div>

      {/* ── Header ── */}
      <div className="pb-6">
        <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          Fethiye, Oludeniz, Gocek, Fethiye
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          CLorem ipsum dolor sit amet consectetur. Quis feugiat tincidunt nam
          urna mollis a.
        </p>
      </div>

      {/* ── Route Info + Map ── */}
      <div className="py-6">
        <RouteInfoMap />
      </div>

      {/* ── Highlights + Top 5 Sites ── */}
      <div className="py-8">
        <HighlightsTopSites />
      </div>

      {/* ── Weather & Sea Temperature ── */}
      <div className="py-8">
        <WeatherGrid />
      </div>

      {/* ── Cabin Features ── */}
      <FeatureGrid
        title="Cabin Features"
        images={[MOCK_IMAGE, MOCK_IMAGE, MOCK_IMAGE, MOCK_IMAGE]}
        features={CABIN_FEATURES}
      />

      {/* ── Day-by-Day Itinerary ── */}
      <div className="py-8">
        <ItinerarySection />
      </div>

      {/* ── Recommended Restaurants ── */}
      <div className="py-8">
        <RestaurantSection />
      </div>

      {/* ── Related Cruises ── */}
      <div className="py-8">
        <RelatedCruises title="Gulet Cruise From Fethiye" />
      </div>

      {/* ── Yachts that can do this route ── */}
      <section className="py-8 pb-16">
        <SectionHeading title="Yachts that can do this route" />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {YACHT_NAMES.map((name, i) => (
            <YachtCard
              key={`yacht-${name}-${i}`}
              imageSrc={MOCK_IMAGE}
              name={name}
              length="32"
              cabins="3"
              guests="4"
              badge="Luxury"
              price="10.000 Euro + Expenses/weekly"
              href="#"
            />
          ))}
        </div>

        <hr className="my-6 border-t border-gray-200" />
        <div className="text-center">
          <button
            type="button"
            className="rounded-full px-6 py-2.5 text-sm font-medium text-white"
            style={{ backgroundColor: "var(--brand-orange)" }}
          >
            See More
          </button>
        </div>
      </section>
    </div>
  );
}
