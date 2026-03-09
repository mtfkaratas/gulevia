"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Destination = {
  name: string;
  yachtCount: number;
};

type Country = {
  label: string;
  destinations: Destination[];
};

/** Mock destination data for all three countries. */
const COUNTRIES: Country[] = [
  {
    label: "Türkiye",
    destinations: [
      { name: "Bodrum", yachtCount: 50 },
      { name: "Fethiye", yachtCount: 50 },
      { name: "Kalkan", yachtCount: 50 },
      { name: "Marmaris", yachtCount: 50 },
    ],
  },
  {
    label: "Greece",
    destinations: [
      { name: "Bodrum", yachtCount: 50 },
      { name: "Fethiye", yachtCount: 50 },
      { name: "Kalkan", yachtCount: 50 },
      { name: "Marmaris", yachtCount: 50 },
    ],
  },
  {
    label: "Croatia",
    destinations: [
      { name: "Bodrum", yachtCount: 50 },
      { name: "Fethiye", yachtCount: 50 },
      { name: "Kalkan", yachtCount: 50 },
      { name: "Marmaris", yachtCount: 50 },
    ],
  },
];

/**
 * Renders a single destination item row inside a country column.
 */
function DestinationItem({ destination }: { destination: Destination }) {
  return (
    <div
      className="flex items-center justify-between bg-white/10 backdrop-blur-sm"
      style={{ borderRadius: "var(--card-radius)", padding: "12px 16px" }}
    >
      <div>
        <span className="text-sm font-bold text-white">{destination.name}</span>
        <p className="text-xs text-white/70">
          +{destination.yachtCount} Yachts For Charter
        </p>
      </div>
      <ArrowRight className="size-4 text-white" />
    </div>
  );
}

/**
 * Renders a country column with heading, orange underline, and destination list.
 */
function CountryColumn({ country }: { country: Country }) {
  return (
    <div>
      <h3 className="mb-6 text-xl font-bold text-white">{country.label}</h3>

      <div className="flex flex-col gap-4">
        {country.destinations.map((dest) => (
          <DestinationItem key={dest.name} destination={dest} />
        ))}
      </div>
    </div>
  );
}

/**
 * Popular Yacht Charter Destinations section.
 * Full-width banner background with dark overlay, country columns in a 3-col grid.
 * On mobile: tab-based navigation to switch between countries.
 * On desktop: all three columns visible side by side.
 */
export function DestinationShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative overflow-hidden">
      <Image
        src="/mock/images/banner.png"
        alt="Yacht charter destinations background"
        fill
        className="object-cover"
        sizes="100vw"
        priority={false}
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl font-bold text-white">
            Popular Yacht Charter Destinations
          </h2>
          <button
            type="button"
            className="hidden border border-white px-5 py-2 text-sm text-white transition-colors hover:bg-white/10 sm:inline-flex"
            style={{ borderRadius: "var(--card-radius)" }}
          >
            Tümünü Gör
          </button>
        </div>

        {/* Mobile tabs */}
        <div className="mt-6 flex gap-2 md:hidden">
          {COUNTRIES.map((country, idx) => (
            <button
              key={country.label}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === idx
                  ? "bg-white text-gray-900"
                  : "border border-white/40 text-white hover:bg-white/10"
              }`}
              style={{ borderRadius: "var(--card-radius)" }}
            >
              {country.label}
            </button>
          ))}
        </div>

        {/* Mobile: single column for active tab */}
        <div className="mt-8 md:hidden">
          <CountryColumn country={COUNTRIES[activeTab]} />
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden grid-cols-3 gap-8 md:grid">
          {COUNTRIES.map((country) => (
            <CountryColumn key={country.label} country={country} />
          ))}
        </div>
      </div>
    </section>
  );
}
