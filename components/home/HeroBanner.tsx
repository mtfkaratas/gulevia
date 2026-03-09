"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { HeroSearchForm } from "./HeroSearchForm";

/** Mock slide data — will be replaced with real CMS content. */
const SLIDES = [
  {
    id: 1,
    image: "/mock/images/banner.png",
    subtitle: "Gulevia Offers Luxury Yacht Charter in Turkey",
    title: "Turkey Yacht Charters",
  },
];

/**
 * Hero banner carousel inside a container (not full-width).
 * The search form sits at the bottom of the banner, inside it.
 */
export function HeroBanner() {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = SLIDES[activeIndex];

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 pt-6">
      <div
        className="relative w-full overflow-hidden"
        style={{ borderRadius: "var(--card-radius)" }}
      >
        <div className="relative w-full h-[340px] md:h-[460px]">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

          {/* Title + navigation arrows grouped together */}
          <div className="absolute bottom-28 md:bottom-24 left-8 md:left-14 z-10 max-w-xl">
            <p className="text-sm text-white/90 mb-1">{slide.subtitle}</p>
            <h1 className="text-2xl md:text-4xl font-bold text-white">
              {slide.title}
            </h1>
            <div className="mt-3 flex items-center gap-2">
              <button
                type="button"
                onClick={goToPrev}
                aria-label="Previous slide"
                className="flex items-center justify-center size-8 bg-white/80 hover:bg-white text-gray-800 shadow transition-colors cursor-pointer"
                style={{ borderRadius: "var(--card-radius)" }}
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={goToNext}
                aria-label="Next slide"
                className="flex items-center justify-center size-8 bg-white/80 hover:bg-white text-gray-800 shadow transition-colors cursor-pointer"
                style={{ borderRadius: "var(--card-radius)" }}
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-4 left-8 right-8 md:bottom-6 md:left-14 md:right-14 z-10">
            <HeroSearchForm />
          </div>
        </div>
      </div>
    </section>
  );
}
