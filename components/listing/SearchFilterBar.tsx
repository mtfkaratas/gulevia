"use client";

import {
  MapPin,
  Users,
  CalendarDays,
  DollarSign,
} from "lucide-react";

/** Destination options for the gulet region filter. */
const DESTINATION_OPTIONS = [
  "All Turkey Gulets",
  "All Greece Gulets",
  "All Croatia Gulets",
] as const;

/** Guest count range options for the person filter. */
const PERSON_OPTIONS = ["2-4", "5-6", "7-8", "9+"] as const;

/** Month options for the charter date filter. */
const MONTH_OPTIONS = [
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
] as const;

/** Budget range options (price per day) for the budget filter. */
const BUDGET_OPTIONS = [
  "$ 10.000 - 20.000",
  "$ 20.000 - 40.000",
  "$ 40.000 - 10.000",
] as const;

/**
 * Search filter bar for luxury yacht charter listings.
 * Provides dropdown filters for destination, guest count, month, and budget,
 * with a search action button.
 */
export function SearchFilterBar() {
  return (
    <div
      className="border border-gray-200 p-6"
      style={{ borderRadius: "var(--card-radius)" }}
    >
      <h2
        className="text-sm font-medium mb-4"
        style={{ color: "var(--brand-brown)" }}
      >
        Search Gulevia Offers Luxury Yacht Charter
      </h2>

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
        {/* Destination filter */}
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 flex-1">
          <MapPin className="size-4 text-gray-400 shrink-0" />
          <select
            className="bg-transparent text-sm outline-none flex-1 min-w-0"
            defaultValue="All Turkey Gulets"
            aria-label="Select destination"
          >
            {DESTINATION_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Person filter */}
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 flex-1">
          <Users className="size-4 text-gray-400 shrink-0" />
          <select
            className="bg-transparent text-sm outline-none flex-1 min-w-0"
            defaultValue="2-4"
            aria-label="Select guest count"
          >
            {PERSON_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Month filter */}
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 flex-1">
          <CalendarDays className="size-4 text-gray-400 shrink-0" />
          <select
            className="bg-transparent text-sm outline-none flex-1 min-w-0"
            defaultValue="June"
            aria-label="Select month"
          >
            {MONTH_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Budget filter */}
        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2.5 flex-1">
          <DollarSign className="size-4 text-gray-400 shrink-0" />
          <select
            className="bg-transparent text-sm outline-none flex-1 min-w-0"
            defaultValue="$ 40.000 - 10.000"
            aria-label="Select budget range"
          >
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt} /day
              </option>
            ))}
          </select>
        </div>

        {/* Search button */}
        <button
          type="button"
          className="rounded-full px-6 py-2.5 text-sm font-medium text-white shrink-0 hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "var(--brand-orange)" }}
        >
          Search
        </button>
      </div>
    </div>
  );
}
