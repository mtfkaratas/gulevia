"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronLeft, ChevronRight, Sailboat } from "lucide-react";

/** Single day entry in the itinerary. */
interface DayEntry {
  day: string;
  stops: string;
  miles: string;
  hours: string;
}

const DAYS: DayEntry[] = [
  { day: "Day 1", stops: "Fethiye — Boncuklu Bay — Paspatur", miles: "Miles 30", hours: "Hour 3:00" },
  { day: "Day 2", stops: "Butterfly Valley — Blue Lagoon — St Nicholas Island", miles: "Miles 30", hours: "Hour 3:00" },
  { day: "Day 3", stops: "Aga Limani Bay — Cleopatra's Bath", miles: "Miles 30", hours: "Hour 3:00" },
  { day: "Day 4", stops: "Sarsala Bay — Bedri Rahmi Bay", miles: "Miles 30", hours: "Hour 3:00" },
  { day: "Day 5", stops: "Merdivenli Bay — Domuz Island", miles: "Miles 30", hours: "Hour 3:00" },
  { day: "Day 6", stops: "Zeytinli Island — Gocek — Yassica Islands", miles: "Miles 30", hours: "Hour 3:00" },
];

const FINISH: DayEntry = {
  day: "Finish",
  stops: "Kizil Island — Help Beach — Samanlik Bay",
  miles: "Miles 30",
  hours: "Hour 3:00",
};

const STOP_DESCRIPTION =
  "Fethiye is the address of sun, sand, and surf, with a seemingly endless array of turquoise bays and exquisite beaches. Visitors can explore local history by searching out the ruins of ancient Telmessos which are scattered around town or simply glance towards the local rockface to view striking Lycian rock tombs. The downtown Paspatur area is the town's hub of nightlife and will not disappoint with its many colorful bars.";

/** Carousel dot indicators with navigation chevrons. */
function CarouselDots({ total, active }: { total: number; active: number }) {
  return (
    <div className="flex items-center gap-2 mt-2">
      <ChevronLeft className="size-4 text-gray-400 cursor-pointer" />
      <div className="flex items-center gap-1">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${i === active ? "bg-gray-600" : "bg-gray-300"}`}
          />
        ))}
      </div>
      <ChevronRight className="size-4 text-gray-400 cursor-pointer" />
    </div>
  );
}

/** Expanded content shown when Day 1 (or any day) is open. */
function DayContent() {
  return (
    <div className="py-6 border-b border-gray-200 space-y-8">
      {/* Stop 1 — image left, text right */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-[280px] shrink-0">
          <Image
            src="/mock/images/banner.png"
            alt="Fethiye"
            width={280}
            height={210}
            className="aspect-4/3 w-full md:w-[280px] rounded-lg object-cover"
          />
          <CarouselDots total={3} active={0} />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-lg mb-2">⚓ Fethiye</h4>
          <p className="text-sm text-gray-600 leading-relaxed">{STOP_DESCRIPTION}</p>
        </div>
      </div>

      {/* Activity banner */}
      <div
        className="flex items-center gap-4 border border-gray-200 p-3 mt-4"
        style={{ borderRadius: "var(--card-radius)" }}
      >
        <div className="flex flex-col items-center shrink-0">
          <span className="text-lg font-bold">€65</span>
          <span className="text-xs text-gray-500">per person</span>
        </div>
        <Image
          src="/mock/images/banner.png"
          alt="Oludeniz Paragliding"
          width={60}
          height={60}
          className="size-[60px] rounded object-cover shrink-0"
        />
        <div className="flex-1 min-w-0">
          <span className="text-xs text-gray-400">Add on Tour</span>
          <p className="text-sm font-bold truncate">Oludeniz Paragliding</p>
          <p className="text-xs text-gray-500 truncate">
            Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
          </p>
        </div>
        <Sailboat className="size-12 text-gray-200 shrink-0 hidden sm:block" />
      </div>

      {/* Stop 2 — text left, image right (reversed) */}
      <div className="flex flex-col md:flex-row-reverse gap-6">
        <div className="w-full md:w-[280px] shrink-0">
          <Image
            src="/mock/images/banner.png"
            alt="Fethiye - Marmaris"
            width={280}
            height={210}
            className="aspect-4/3 w-full md:w-[280px] rounded-lg object-cover"
          />
          <CarouselDots total={3} active={0} />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-lg mb-2">⚓ Fethiye - Marmaris</h4>
          <p className="text-sm text-gray-600 leading-relaxed">{STOP_DESCRIPTION}</p>
        </div>
      </div>
    </div>
  );
}

/**
 * Expandable day-by-day itinerary section.
 * Renders each day as a collapsible row; Day 1 is expanded by default.
 */
export function ItinerarySection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const allEntries = [...DAYS, FINISH];

  return (
    <section>
      {allEntries.map((entry, index) => {
        const isOpen = expandedIndex === index;
        const isFinish = entry.day === "Finish";

        return (
          <div key={entry.day}>
            <div
              className="flex items-center justify-between py-4 border-b border-gray-200 cursor-pointer"
              onClick={() => toggle(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle(index);
                }
              }}
            >
              <span className="flex items-center min-w-0">
                <span
                  className="font-bold text-sm shrink-0"
                  style={{
                    color: isFinish
                      ? "var(--brand-orange)"
                      : "var(--brand-brown)",
                  }}
                >
                  {entry.day}
                </span>
                <span className="text-sm text-gray-600 ml-2 truncate">
                  {entry.stops}
                </span>
              </span>

              <span className="flex items-center gap-2 shrink-0 ml-4">
                <span className="text-xs text-gray-400 hidden sm:inline">
                  {entry.miles} – {entry.hours}
                </span>
                <ChevronDown
                  className={`size-4 text-gray-400 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </span>
            </div>

            {isOpen && <DayContent />}
          </div>
        );
      })}
    </section>
  );
}
