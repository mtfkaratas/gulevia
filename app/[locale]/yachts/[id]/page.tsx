import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/lib/locale";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { YachtGallery } from "@/components/yacht/YachtGallery";
import { YachtSpecGrid } from "@/components/yacht/YachtSpecGrid";
import { FeatureGrid } from "@/components/yacht/FeatureGrid";
import { PriceTable } from "@/components/yacht/PriceTable";
import { CharterRates } from "@/components/yacht/CharterRates";
import { InquiryForm } from "@/components/yacht/InquiryForm";
import { RelatedYachts } from "@/components/yacht/RelatedYachts";
import {
  Pencil,
  BedDouble,
  Users,
  Trophy,
  UserCheck,
  Globe,
  Ship,
  Wifi,
  AirVent,
  Waves,
  Bike,
  Anchor,
  Sailboat,
  PersonStanding,
  Banana,
  Dumbbell,
  FishSymbol,
  Wind,
  JoystickIcon,
} from "lucide-react";

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

const MOCK_IMAGE = "/mock/images/banner.png";

/**
 * Yacht detail page — renders a single yacht by id.
 *
 * URL examples: /yachts/123 (us), /tr/yatlar/123, /de/yachten/123.
 * Sections: breadcrumb, header, gallery, description, specs, cabin features,
 * entertainment, price tables, charter rates, inquiry form, related yachts.
 */
export default async function YachtDetailPage({ params }: Props) {
  const { locale, id } = await params;
  setRequestLocale(locale as Locale);

  const specs = [
    { icon: Pencil, label: "Meter", value: "23" },
    { icon: BedDouble, label: "Cabins", value: "3" },
    { icon: Users, label: "Guest", value: "6" },
    { icon: Trophy, label: "Year Built", value: "2017" },
    { icon: UserCheck, label: "Crew", value: "4" },
  ];

  const cabinFeatures = [
    { icon: Globe, label: "Capacity in Turkey", value: "10 Guest" as string | boolean },
    { icon: BedDouble, label: "Master Cabin", value: "1" as string | boolean },
    { icon: BedDouble, label: "Triple Cabin", value: false as string | boolean },
    { icon: Wifi, label: "Wi-Fi", value: true as string | boolean },
    { icon: Globe, label: "Capacity in Greece", value: false as string | boolean },
    { icon: BedDouble, label: "Double Cabin", value: "2" as string | boolean },
    { icon: BedDouble, label: "Twin Cabin", value: false as string | boolean },
    { icon: AirVent, label: "Airconditioning", value: true as string | boolean },
  ];

  const entertainmentFeatures = [
    { icon: Waves, label: "Jetski", value: true as string | boolean },
    { icon: Sailboat, label: "Wakeboard", value: true as string | boolean },
    { icon: Anchor, label: "Ringo", value: true as string | boolean },
    { icon: Banana, label: "Banana", value: true as string | boolean },
    { icon: Waves, label: "Snorkels", value: true as string | boolean },
    { icon: Bike, label: "Waterski", value: true as string | boolean },
    { icon: PersonStanding, label: "Paddle Board", value: true as string | boolean },
    { icon: FishSymbol, label: "Fishing Equipment", value: true as string | boolean },
    { icon: Sailboat, label: "Canoe", value: true as string | boolean },
    { icon: Wind, label: "Windsurf", value: true as string | boolean },
    { icon: JoystickIcon, label: "Jacuzzi", value: true as string | boolean },
    { icon: Ship, label: "Flybridge", value: true as string | boolean },
  ];

  const priceMonths = [
    { name: "May", price: "$ 40.000", note: "" },
    { name: "June", price: "$ 40.000", note: "" },
    { name: "July", price: "$ 40.000", note: "" },
    { name: "August", price: "$ 40.000", note: "" },
    { name: "September", price: "$ 40.000", note: "" },
    { name: "October", price: "$ 40.000", note: "" },
  ];

  const charterIncludes = [
    "Fuel for cruising up to 4 hours per day.",
    "Hire of the yacht and its equipment, captain and crew.",
    "Bed linen, towels, beach towels and their laundry, cleaning of gulet.",
    "Gas for cooking, fresh water.",
    "Meals preparation and service.",
    "Welcome cocktail.",
    "Turkish harbour expenses.",
  ];

  const charterExcludes = [
    "All meals and food supplies.",
    "Local wines, spirits, water and soft drinks.",
    "Land tours / Scuba diving / Special excursions.",
    "Water sport equipment and extra fuel expenses.",
    "Passengers cancellation and personal travel insurance.",
    "Airport Transfers (Can be arranged at an additional cost).",
    "VAT 20%.",
    "Turkish transit log.",
    "Crew Gratuity (5-10% of charter fee).",
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* ── Breadcrumb ── */}
      <div className="pt-4">
        <Breadcrumb
          items={[
            { label: "Anasayfa", href: "/" },
            { label: "Yat Atalante" },
          ]}
        />
      </div>

      {/* ── Header ── */}
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
            Yat Atalante
          </h1>
          <p className="mt-1 text-sm text-gray-600">
            4 Cabins, Crewed{" "}
            <span className="font-bold">Deluxe Yacht</span> with a Maximum
            Capacity of 8 People
          </p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            className="rounded-full border px-4 py-2 text-xs font-medium transition-colors hover:opacity-80"
            style={{ borderColor: "var(--brand-orange)", color: "var(--brand-orange)" }}
          >
            Send Request
          </button>
          <button
            type="button"
            className="rounded-full border px-4 py-2 text-xs font-medium transition-colors hover:opacity-80"
            style={{ borderColor: "var(--brand-orange)", color: "var(--brand-orange)" }}
          >
            Tüm Fotoğrafları Gör
          </button>
        </div>
      </div>

      {/* ── Gallery ── */}
      <div className="mt-6">
        <YachtGallery />
      </div>

      {/* ── Description ── */}
      <div className="mt-8">
        <p className="text-base font-semibold leading-relaxed text-gray-800">
          This stylish gulet offers services to blue voyage enthusiasts,
          departing from Fethiye harbor and navigating through the stunning
          coves of Göcek.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-gray-600">
          The modern Deluxe gulet Angelo 2 is a luxuriously stylish white
          35-meter gulet that was refitted in 2015 and unusually can carry up
          to 14 guests for larger families or groups. With her modern deck
          structure from the outside, she resembles a luxury motor yacht, but
          the wooden interior is designed very distinctively with comfortable
          and spacious seating, ideal for entertaining, stretching across the
          whole width of the saloon and lit by wide windows ensuring ample
          natural light.
        </p>
      </div>

      {/* ── Spec Grid ── */}
      <div className="mt-8">
        <YachtSpecGrid specs={specs} bookHref="#inquiry" />
      </div>

      {/* ── Cabin Features ── */}
      <FeatureGrid
        title="Cabin Features"
        images={[MOCK_IMAGE, MOCK_IMAGE, MOCK_IMAGE, MOCK_IMAGE]}
        features={cabinFeatures}
      />

      {/* ── Entertainment & Toys ── */}
      <FeatureGrid
        title="Entertaiment & Toys"
        images={[MOCK_IMAGE, MOCK_IMAGE, MOCK_IMAGE, MOCK_IMAGE]}
        features={entertainmentFeatures}
      />

      {/* ── Price Information (VAT + Expenses) ── */}
      <PriceTable
        title="Price Information"
        months={priceMonths}
        type="expenses"
        footnote={
          "%20 VAT is not included\n%30 APA (Expenses) is not included\nContact us for the best deals."
        }
      />

      {/* ── Price Information (All-inclusive) ── */}
      <PriceTable
        title="Price Information"
        months={priceMonths}
        type="all-inclusive"
        footnote={
          "Limited-time offer: Our rates are all-inclusive!\nIncluded: Yacht rental, Meals - PREMIUM MENU for 6 guests (worth 3500 euro), Soft Drinks, Fuel, Port fees, VAT, Airport transfers, 4 Crew yachts"
        }
      />

      {/* ── Charter Rates ── */}
      <div className="py-8">
        <CharterRates includes={charterIncludes} excludes={charterExcludes} />
      </div>

      {/* ── Inquiry Form ── */}
      <div id="inquiry" className="py-8">
        <InquiryForm />
      </div>

      {/* ── Related Yachts ── */}
      <div className="pb-16">
        <RelatedYachts title="Related Bodrum Gulets" />
      </div>
    </div>
  );
}
