"use client";

import { BedDouble, Users } from "lucide-react";

type CabinFilterCardProps = {
  /** Number of cabins label, e.g. "2-4". */
  cabins: string;
  /** Number of guests label, e.g. "4-8". */
  guests: string;
  /** Count of available gulets to display. */
  available: string;
  /** Link destination when the card is clicked. */
  href: string;
};

/**
 * Quick-filter card that lets visitors jump to cabin/guest search results.
 * Orange border, 4% orange background, 8% on hover.
 */
export function CabinFilterCard({
  cabins,
  guests,
  available,
  href,
}: CabinFilterCardProps) {
  return (
    <a
      href={href}
      className="block border p-5 text-center transition-colors"
      style={{
        borderRadius: "var(--card-radius)",
        borderColor: "var(--brand-orange)",
        backgroundColor: "rgba(255, 135, 22, 0.04)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(255, 135, 22, 0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "rgba(255, 135, 22, 0.04)";
      }}
    >
      <div className="mb-3 flex items-center justify-center gap-3">
        <BedDouble className="h-7 w-7 text-gray-600" />
        <Users className="h-7 w-7 text-gray-600" />
      </div>

      <p className="text-sm font-bold">
        {cabins} Cabins &nbsp; {guests} Guest
      </p>

      <p className="mt-1 text-xs text-gray-500">{available} Gulets Available</p>

      <span className="mt-3 inline-block text-sm font-medium text-black">
        İncele →
      </span>
    </a>
  );
}
