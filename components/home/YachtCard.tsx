import Image from "next/image";
import { Ruler, BedDouble, Users } from "lucide-react";

type YachtCardProps = {
  /** Path or URL for the yacht hero image. */
  imageSrc: string;
  /** Display name of the yacht. */
  name: string;
  /** Length in meters, e.g. "32". */
  length: string;
  /** Number of cabins. */
  cabins: string;
  /** Number of guests. */
  guests: string;
  /** Formatted price string, e.g. "10.000 Euro + Expenses/weekly". */
  price: string;
  /** Optional badge label shown on the image (e.g. "Luxury"). */
  badge?: string;
  /** Link destination for the yacht detail page. */
  href: string;
  /**
   * Optional description paragraph rendered below the price.
   * Used on the listing page to show yacht details beneath each card.
   */
  description?: string;
};

/**
 * Yacht listing card used in the Popular Yachts carousel.
 * Shows a hero image (with optional badge), specs row, and starting price.
 */
export function YachtCard({
  imageSrc,
  name,
  length,
  cabins,
  guests,
  price,
  badge,
  href,
  description,
}: YachtCardProps) {
  return (
    <article
      className="min-w-[260px] shrink-0 snap-start overflow-hidden border border-gray-200 bg-white"
      style={{ borderRadius: "var(--card-radius)" }}
    >
      <a href={href} className="block">
        {/* Hero image */}
        <div className="relative aspect-4/3">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 80vw, 33vw"
          />

          {badge && (
            <span className="absolute left-2 top-2 rounded-sm bg-white/66 px-2 py-0.5 text-xs font-medium text-gray-800">
              {badge}
            </span>
          )}
        </div>

        {/* Card body */}
        <div className="p-4">
          <h3 className="text-base font-bold">{name}</h3>

          {/* Specs */}
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Ruler className="h-4 w-4" style={{ color: "var(--brand-brown)" }} />
              {length} Meter
            </span>
            <span className="flex items-center gap-1">
              <BedDouble className="h-4 w-4" style={{ color: "var(--brand-brown)" }} />
              {cabins} Cabin
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-4 w-4" style={{ color: "var(--brand-brown)" }} />
              {guests} Guest
            </span>
          </div>

          <p className="mt-3 text-sm">
            from{" "}
            <span className="font-bold" style={{ color: "var(--brand-brown)" }}>
              {price}
            </span>
          </p>

          {description && (
            <p className="mt-3 text-xs leading-relaxed text-gray-500">
              {description}
            </p>
          )}
        </div>
      </a>
    </article>
  );
}
