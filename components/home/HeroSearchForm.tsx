"use client";

import {
  MapPin,
  Users,
  Calendar,
  DollarSign,
  ChevronDown,
  Search,
} from "lucide-react";

/**
 * Each field config for the search form.
 */
const FIELDS = [
  { icon: MapPin, label: "Select Destination", id: "destination" },
  { icon: Users, label: "Person", id: "person" },
  { icon: Calendar, label: "June", id: "month" },
  { icon: DollarSign, label: "$ 40.000 - 10.000 /day", id: "budget" },
] as const;

/**
 * Horizontal search form bar inside the hero banner.
 * Desktop: single row with thin dividers between fields.
 * Mobile: stacked vertically.
 * Minimal border-radius matching the card radius, no pill shape.
 */
export function HeroSearchForm() {
  return (
    <div
      className="bg-white shadow-lg"
      style={{ borderRadius: "var(--card-radius)" }}
    >
      {/* Desktop: horizontal row */}
      <div className="hidden md:flex items-center">
        {FIELDS.map((field, idx) => {
          const Icon = field.icon;
          return (
            <div key={field.id} className="flex items-center flex-1">
              {idx > 0 && <div className="h-8 w-px bg-gray-200 shrink-0" />}
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-3 w-full text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
              >
                <Icon className="size-4 text-gray-400 shrink-0" />
                <span className="truncate">{field.label}</span>
                <ChevronDown className="size-3 text-gray-400 ml-auto shrink-0" />
              </button>
            </div>
          );
        })}
        <div className="px-2 py-2 shrink-0">
          <button
            type="button"
            className="px-6 py-2.5 text-sm font-medium text-white rounded cursor-pointer hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: "var(--brand-orange)",
              borderRadius: "var(--card-radius)",
            }}
          >
            <Search className="size-4 inline-block mr-1 -mt-0.5" />
            Search
          </button>
        </div>
      </div>

      {/* Mobile: stacked */}
      <div className="flex flex-col md:hidden">
        {FIELDS.map((field) => {
          const Icon = field.icon;
          return (
            <button
              key={field.id}
              type="button"
              className="flex items-center gap-3 px-4 py-3.5 text-sm text-gray-600 border-b border-gray-100 last:border-b-0 cursor-pointer"
            >
              <Icon className="size-4 text-gray-400 shrink-0" />
              <span className="flex-1 text-left truncate">{field.label}</span>
              <ChevronDown className="size-3 text-gray-400 shrink-0" />
            </button>
          );
        })}
        <div className="p-3">
          <button
            type="button"
            className="w-full py-3 text-sm font-medium text-white cursor-pointer hover:opacity-90 transition-opacity"
            style={{
              backgroundColor: "var(--brand-orange)",
              borderRadius: "var(--card-radius)",
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
