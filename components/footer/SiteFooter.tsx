import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

/** Navigation link groups rendered in the footer center area. */
const NAV_GROUPS = [
  { items: ["Türkiye", "Greece", "Croatia"] },
  { items: ["Gulet Cruise Routes"] },
  { items: ["About Us", "Blog", "Contact"] },
] as const;

/** Locale/currency badge definitions. */
const LOCALE_BADGES = [
  { flag: "🇺🇸", region: "USA", symbol: "$", currency: "USD" },
  { flag: "🇹🇷", region: "TR", symbol: "₺", currency: "TR" },
  { flag: "🇭🇷", region: "CRO", symbol: "€", currency: "EURO" },
] as const;

/** Social media icon links. */
const SOCIAL_LINKS = [
  { Icon: Facebook, label: "Facebook", href: "#" },
  { Icon: Twitter, label: "Twitter", href: "#" },
  { Icon: Linkedin, label: "Linkedin", href: "#" },
  { Icon: Instagram, label: "Instagram", href: "#" },
] as const;

/**
 * Site-wide footer with background image, navigation links,
 * social icons, and locale/currency badges. No dark overlay —
 * the image extends further down with content anchored near the bottom.
 */
export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden min-h-[340px] md:min-h-[400px] flex flex-col justify-end">
      <Image
        src="/mock/images/footer.png"
        alt=""
        fill
        className="object-cover object-center"
        sizes="100vw"
        role="presentation"
      />

      {/* Content anchored to the bottom */}
      <div className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-start md:justify-between">
          <span
            className="shrink-0 text-3xl font-bold"
            style={{ color: "var(--brand-blue)" }}
          >
            Gulevia
          </span>

          <nav
            className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-700"
            aria-label="Footer navigation"
          >
            {NAV_GROUPS.map((group, gIdx) => (
              <span key={gIdx} className="flex items-center gap-x-2">
                {gIdx > 0 && (
                  <span className="text-gray-400" aria-hidden="true">|</span>
                )}
                {group.items.map((item, iIdx) => (
                  <span key={item} className="flex items-center gap-x-2">
                    {iIdx > 0 && (
                      <span className="text-gray-400" aria-hidden="true">·</span>
                    )}
                    <a
                      href="#"
                      className="whitespace-nowrap transition-colors hover:text-gray-900"
                    >
                      {item}
                    </a>
                  </span>
                ))}
              </span>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-gray-600 transition-colors hover:text-gray-900"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom section — locale badges */}
        <div className="mt-6 flex flex-wrap items-center gap-6">
          {LOCALE_BADGES.map((badge) => (
            <span key={badge.region} className="text-sm text-gray-600">
              {badge.flag} {badge.region} | {badge.symbol} {badge.currency}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
