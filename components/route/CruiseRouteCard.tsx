import Image from "next/image";
import { CalendarDays } from "lucide-react";

export type CruiseRouteCardProps = {
  /** Path or URL for the route image. */
  imageSrc: string;
  /** Display title of the cruise route, e.g. "Marmaris to Fethiye Blue". */
  title: string;
  /** Departure port or location, e.g. "Fethiye". */
  from: string;
  /** Duration label, e.g. "7 Days". */
  days: string;
  /** Link destination for the cruise route page. */
  href: string;
};

/**
 * Card component for displaying a cruise route link.
 * Shows an image with dashed overlay, title, and meta info (from/days).
 */
export function CruiseRouteCard({
  imageSrc,
  title,
  from,
  days,
  href,
}: CruiseRouteCardProps) {
  return (
    <article
      className="overflow-hidden border border-gray-200"
      style={{ borderRadius: "var(--card-radius)" }}
    >
      <a href={href} className="block">
        <div className="relative aspect-4/3 w-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
          <div
            className="pointer-events-none absolute inset-2 rounded-lg border-2 border-dashed border-amber-400/40"
            aria-hidden
          />
        </div>
        <div className="p-3">
          <h3
            className="text-sm font-bold"
            style={{ color: "var(--brand-brown)" }}
          >
            {title}
          </h3>
          <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
            <span>
              From:{" "}
              <span
                className="font-bold"
                style={{ color: "var(--brand-orange)" }}
              >
                {from}
              </span>
            </span>
            <span className="flex items-center gap-1">
              <CalendarDays className="size-3" />
              {days}
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}
