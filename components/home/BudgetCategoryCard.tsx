import Image from "next/image";
import Link from "next/link";

type BudgetCategoryCardProps = {
  /** Source path for the card hero image. */
  imageSrc: string;
  /** Category title displayed over the gradient overlay. */
  title: string;
  /** Human-readable price range (e.g. "$40,000–100,000/weekly"). Shown below the title. */
  priceRange?: string;
  /**
   * Optional description text shown below the title on the overlay.
   * Used for destination cards where a longer text replaces the price range.
   */
  description?: string;
  /** Navigation target when the card is clicked. */
  href: string;
  /** When false, hides the "İncele →" link. Defaults to true. */
  showAction?: boolean;
};

/**
 * Versatile image overlay card used across multiple pages:
 *
 * - Homepage "Gulets That Match Your Style & Needs": title + priceRange + İncele
 * - Yacht detail "Related Bodrum Gulets": title + priceRange + İncele
 * - Listing page "Popular Destinations": title + description, no İncele
 *
 * Full-bleed image with bottom gradient overlay. All text rendered on top.
 */
export function BudgetCategoryCard({
  imageSrc,
  title,
  priceRange,
  description,
  href,
  showAction = true,
}: BudgetCategoryCardProps) {
  return (
    <article
      className="overflow-hidden bg-white"
      style={{ borderRadius: "var(--card-radius)" }}
    >
      <Link href={href} className="relative block aspect-4/5">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 33vw"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-black/80 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
          <div className="flex flex-col gap-0.5">
            <h3 className="text-lg font-bold leading-tight text-white">
              {title}
            </h3>
            {priceRange && (
              <span className="text-xs text-white/80">{priceRange}</span>
            )}
            {description && (
              <p className="line-clamp-3 text-xs leading-relaxed text-white/80">
                {description}
              </p>
            )}
          </div>
          {showAction && (
            <span
              className="shrink-0 border border-white px-3 py-1 text-xs font-medium text-white"
              style={{ borderRadius: "var(--card-radius)" }}
            >
              İncele
            </span>
          )}
        </div>
      </Link>
    </article>
  );
}
