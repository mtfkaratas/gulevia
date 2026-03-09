"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { YachtCard } from "./YachtCard";

/** Tab definition for destination filtering. */
const TABS = ["Türkiye", "Greece", "Croatia"] as const;

/** Mock yacht data rendered inside the scrollable carousel. */
const MOCK_YACHTS = [
  {
    name: "Diva Deniz",
    imageSrc: "/mock/images/banner.png",
    length: "32",
    cabins: "3",
    guests: "4",
    price: "10.000 Euro + Expenses/weekly",
    badge: "Luxury",
    href: "#",
  },
  {
    name: "Daima",
    imageSrc: "/mock/images/banner.png",
    length: "32",
    cabins: "3",
    guests: "4",
    price: "10.000 Euro + Expenses/weekly",
    badge: "Luxury",
    href: "#",
  },
  {
    name: "Ceylan",
    imageSrc: "/mock/images/banner.png",
    length: "32",
    cabins: "3",
    guests: "4",
    price: "10.000 Euro + Expenses/weekly",
    badge: "Luxury",
    href: "#",
  },
] as const;

/**
 * Popular yachts section with destination tabs and a horizontally scrollable
 * card carousel. Includes left/right navigation arrows and a "See All" CTA.
 */
export function PopularYachtsSection() {
  const [activeTab, setActiveTab] = useState<string>(TABS[0]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.6;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="mx-auto max-w-7xl px-4"
      style={{ paddingBlock: "var(--section-gap)" }}
    >
      <SectionHeading title="Popular Yachts" />

      {/* Destination tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {TABS.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 text-sm font-medium transition-colors ${
                isActive ? "text-white" : ""
              }`}
              style={{
                borderRadius: "var(--card-radius)",
                ...(isActive
                  ? { backgroundColor: "var(--brand-brown)" }
                  : { backgroundColor: "#FCF8F4", color: "var(--brand-brown)" }),
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Carousel wrapper */}
      <div className="relative">
        <button
          type="button"
          aria-label="Scroll left"
          onClick={() => scroll("left")}
          className="absolute -left-3 top-1/2 z-10 -translate-y-1/2 bg-white p-2 shadow-md transition-colors hover:bg-gray-50"
          style={{ borderRadius: "var(--card-radius)" }}
        >
          <ChevronLeft className="h-5 w-5 text-gray-700" />
        </button>

        <div
          ref={scrollRef}
          className="flex snap-x gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {MOCK_YACHTS.map((yacht) => (
            <YachtCard key={yacht.name} {...yacht} />
          ))}
        </div>

        <button
          type="button"
          aria-label="Scroll right"
          onClick={() => scroll("right")}
          className="absolute -right-3 top-1/2 z-10 -translate-y-1/2 bg-white p-2 shadow-md transition-colors hover:bg-gray-50"
          style={{ borderRadius: "var(--card-radius)" }}
        >
          <ChevronRight className="h-5 w-5 text-gray-700" />
        </button>
      </div>

      {/* See All CTA — brown button with brown divider lines */}
      <div className="mt-8 flex items-center gap-4">
        <div className="flex-1 h-px" style={{ backgroundColor: "var(--brand-brown)" }} />
        <a
          href="#"
          className="inline-block px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{
            backgroundColor: "var(--brand-brown)",
            borderRadius: "var(--card-radius)",
          }}
        >
          See All Turkey Gulets
        </a>
        <div className="flex-1 h-px" style={{ backgroundColor: "var(--brand-brown)" }} />
      </div>
    </section>
  );
}
