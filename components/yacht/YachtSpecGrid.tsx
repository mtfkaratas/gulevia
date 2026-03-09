import type { LucideIcon } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import Link from "next/link";

type SpecItem = {
  /** Lucide icon component to render. */
  icon: LucideIcon;
  /** Short label displayed below the value. */
  label: string;
  /** Primary value displayed in bold. */
  value: string;
};

type YachtSpecGridProps = {
  /** Array of specification items to display. */
  specs: SpecItem[];
  /** Destination URL for the "Book Now" action. */
  bookHref: string;
};

/**
 * Horizontal row of specification boxes for yacht detail pages.
 * Each box shows an icon inside a circle outline, a bold value, and a label.
 * The last box is a highlighted "Book Now →" CTA with brand-orange border.
 *
 * Desktop: single flex row with equal-width items.
 * Mobile: 2-column grid.
 */
export function YachtSpecGrid({ specs, bookHref }: YachtSpecGridProps) {
  return (
    <div className="grid grid-cols-2 gap-2 md:flex md:flex-row">
      {specs.map((spec) => {
        const Icon = spec.icon;

        return (
          <div
            key={spec.label}
            className="flex flex-1 flex-col items-center justify-center border border-gray-200 p-4"
            style={{ borderRadius: "var(--card-radius)" }}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300">
              <Icon className="size-5 text-gray-500" />
            </span>
            <span className="mt-2 text-sm font-bold">{spec.value}</span>
            <span className="text-xs text-gray-500">{spec.label}</span>
          </div>
        );
      })}

      {/* Book Now CTA — highlighted with brand-orange border */}
      <Link
        href={bookHref}
        className="flex flex-1 flex-col items-center justify-center border-2 p-4 transition-colors hover:opacity-80"
        style={{
          borderColor: "var(--brand-orange)",
          color: "var(--brand-orange)",
          borderRadius: "var(--card-radius)",
        }}
      >
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full border-2"
          style={{ borderColor: "var(--brand-orange)" }}
        >
          <CalendarCheck className="size-5" />
        </span>
        <span className="mt-2 text-sm font-bold">Book Now</span>
        <span className="text-xs">→</span>
      </Link>
    </div>
  );
}
