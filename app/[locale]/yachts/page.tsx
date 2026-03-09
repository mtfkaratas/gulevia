import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/lib/locale";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { YachtCard } from "@/components/home/YachtCard";
import { BudgetCategoryCard } from "@/components/home/BudgetCategoryCard";
import { FeatureSection } from "@/components/home/FeatureSection";
import { CabinFilterSection } from "@/components/home/CabinFilterSection";
import { SearchFilterBar } from "@/components/listing/SearchFilterBar";
import { RouteListSection } from "@/components/listing/RouteListSection";
import { ContactCTASection } from "@/components/listing/ContactCTASection";

type Props = {
  params: Promise<{ locale: string }>;
};

const MOCK_IMAGE = "/mock/images/banner.png";

const MOCK_DESCRIPTION =
  "Halcon Del Mar is the perfect choice for sea lovers wanting to explore the crystal waters of the Mediterranean and Aegean with a dazzlingly beautiful gulet. Setting sail from Marmaris baseport, this elegant yacht, measuring 42 meters in length, has the capacity to accommodate 16 guests in 8 luxury cabins within the High Luxury class.";

const PLACEHOLDER_DESC =
  "Lorem ipsum dolor sit amet consectetur. Commodo lectus mattis sollicitudin fames in purus pretium pellentesque. Lorem ipsum dolor sit amet consectetur.";

const YACHT_NAMES_ROW1 = ["Diva Deniz", "Daima", "Ceylan"];
const YACHT_NAMES_ROW2 = ["Diva Deniz", "Daima", "Ceylan"];

const DESTINATIONS = [
  { title: "Bodrum", description: PLACEHOLDER_DESC },
  { title: "Fethiye", description: PLACEHOLDER_DESC },
  { title: "Marmaris", description: PLACEHOLDER_DESC },
  { title: "Göcek", description: PLACEHOLDER_DESC },
  { title: "Kaş", description: PLACEHOLDER_DESC },
  { title: "Kalkan", description: PLACEHOLDER_DESC },
];

const CRUISE_ROUTES = [
  {
    title: "Bodrum – Gökova Körfezi, Türkiye",
    description:
      "Bodrum'dan başlayan bu rota, Gökova Körfezi'nin büyüleyici koylarında saklı cennetler sunar. Orak Adası, Cleopatra Adası ve Çökertme gibi durakların kristal berraklığında denizler ve tarihi dokular bir arada yaşanır.",
  },
  {
    title: "Göcek – Fethiye Körfezi, Türkiye",
    description:
      "Göcek'ten çıkan guletler, Sarsala, Bedri Rahmi Koyu ve Tersane Adası gibi doğa harikalarına uğrar. Korunakli koyları ve sakin deniziyle hem aileler hem romantik çiftler için ideal bir rota.",
  },
  {
    title: "Marmaris – Hisarönü Körfezi, Türkiye",
    description:
      "Marmaris çıkışlı bu rota, Bozburun, Selimiye ve Orhaniye gibi otantik köyleri keşfetme imkânı sunar. Hem doğa hem huzur arayanlar için muhteşem bir mavi yolculuk rotasıdır.",
  },
  {
    title: "Athens – Cyclades (Mykonos, Santorini), Yunanistan",
    description:
      "Atina'dan başlayan bu yolculuk, Kiklad Adaları'nın yıldızları Mykonos ve Santorini'ye ulaşır. Beyaz badanalı köyler, ünlü plajlar ve efsanevi gün batımları eşliğinde Akdeniz'in zarafeti yaşanır.",
  },
];

/**
 * Yacht listing page — displays gulet charter options for a specific region.
 *
 * Sections: header, why choose, yacht listings with descriptions,
 * popular destinations, yachts by type, cabin filters, search bar,
 * cruise routes, and contact CTA.
 */
export default async function YachtsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* ── Breadcrumb ── */}
      <div className="pt-4">
        <Breadcrumb
          items={[
            { label: "Anasayfa", href: "/" },
            { label: "Turkey Gulet Charter" },
          ]}
        />
      </div>

      {/* ── Header ── */}
      <div className="pb-6">
        <h1
          className="text-2xl font-bold md:text-3xl lg:text-4xl"
          style={{ color: "var(--brand-brown)" }}
        >
          Turkey Gulet Charter
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          4 Cabins, Crewed <span className="font-bold">Deluxe Yacht</span> with
          a Maximum Capacity of 8 People
        </p>

        <p className="mt-6 text-base font-semibold leading-relaxed text-gray-800">
          Discover the freedom of sailing the Turkish Riviera with a private
          gulet charter.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          Whether you&apos;re planning a romantic escape or a family adventure,
          our handpicked fleet of luxury gulets offers an unforgettable cruise
          experience across the Aegean and Mediterranean coasts of Turkey.
        </p>
      </div>

      {/* ── Why Choose ── */}
      <section className="pb-8">
        <h2
          className="mb-4 text-xl font-bold md:text-2xl"
          style={{ color: "var(--brand-brown)" }}
        >
          Why Choose a Gulet Charter in Turkey?
        </h2>
        <ul className="list-disc space-y-1.5 pl-5 text-sm text-gray-700">
          <li>Privacy &amp; exclusivity</li>
          <li>Crew on board (captain, chef, hostess)</li>
          <li>Custom itineraries</li>
          <li>Access to secluded coves &amp; historical sites</li>
        </ul>
      </section>

      {/* ── Luxury Turkey Gulet Charter ── */}
      <section className="pb-8">
        <SectionHeading title="Luxury Turkey Gulet Charter" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {YACHT_NAMES_ROW1.map((name, i) => (
            <YachtCard
              key={`r1-${name}-${i}`}
              imageSrc={MOCK_IMAGE}
              name={name}
              length="32"
              cabins="3"
              guests="4"
              badge="Luxury"
              price="10.000 Euro + Expenses/weekly"
              href="#"
              description={MOCK_DESCRIPTION}
            />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {YACHT_NAMES_ROW2.map((name, i) => (
            <YachtCard
              key={`r2-${name}-${i}`}
              imageSrc={MOCK_IMAGE}
              name={name}
              length="32"
              cabins="3"
              guests="4"
              badge="Luxury"
              price="10.000 Euro + Expenses/weekly"
              href="#"
              description={MOCK_DESCRIPTION}
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
            See All Luxury Gulets
          </button>
        </div>
      </section>

      {/* ── Popular Destinations ── */}
      <section className="pb-8">
        <SectionHeading title="Popular Destinations" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {DESTINATIONS.map((dest) => (
            <BudgetCategoryCard
              key={dest.title}
              imageSrc={MOCK_IMAGE}
              title={dest.title}
              description={dest.description}
              href="#"
              showAction={false}
            />
          ))}
        </div>
      </section>

      {/* ── Yachts Shaped by Type (reused from homepage) ── */}
      <FeatureSection />

      {/* ── Cabin Filter (reused from homepage) ── */}
      <CabinFilterSection />

      {/* ── Search Filter Bar ── */}
      <div className="py-8">
        <SearchFilterBar />
      </div>

      {/* ── Gulet Cruise Routes ── */}
      <div className="py-8">
        <RouteListSection title="Gulet Cruise Turkey" routes={CRUISE_ROUTES} />
      </div>

      {/* ── Still Have a Question? ── */}
      <div className="pb-16 pt-8">
        <ContactCTASection />
      </div>
    </div>
  );
}
