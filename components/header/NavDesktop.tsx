"use client";

import { Link } from "@/i18n/navigation";
import { CountrySelect } from "./CountrySelect";
import { CurrencySelect } from "./CurrencySelect";
import type { Locale } from "@/lib/locale";
import type { Currency } from "@/lib/currency";

type NavDesktopProps = {
  currentLocale: Locale;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
};

/**
 * Desktop navigation: destinations, routes, about/contact, country select, currency select.
 * Hidden on mobile/tablet (md:hidden or lg:flex). Uses semantic nav and list.
 */
export function NavDesktop({
  currentLocale,
  currency,
  onCurrencyChange,
}: NavDesktopProps) {
  return (
    <nav
      className="hidden md:flex items-center gap-4 text-sm text-black"
      aria-label="Main navigation"
    >
      <ul className="flex items-center gap-4 list-none m-0 p-0">
        {/* Turkey, Greece, Croatia */}
        <li>
          <a
            href="#turkey"
            className="text-inherit no-underline hover:underline focus:underline"
          >
            Turkey
          </a>
        </li>
        <li>
          <a
            href="#greece"
            className="text-inherit no-underline hover:underline focus:underline"
          >
            Greece
          </a>
        </li>
        <li>
          <a
            href="#croatia"
            className="text-inherit no-underline hover:underline focus:underline"
          >
            Croatia
          </a>
        </li>
      </ul>

      <span
        className="h-4 w-px bg-black/30 shrink-0"
        aria-hidden
      />

      <ul className="flex items-center gap-4 list-none m-0 p-0">
        <li>
          <Link
            href="/routes"
            className="text-inherit no-underline hover:underline focus:underline"
          >
            Gulet Cruise Routes
          </Link>
        </li>
      </ul>

      <span
        className="h-4 w-px bg-black/30 shrink-0"
        aria-hidden
      />

      <ul className="flex items-center gap-4 list-none m-0 p-0">
        <li>
          <Link
            href="/about"
            className="text-inherit no-underline hover:underline focus:underline"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-inherit no-underline hover:underline focus:underline"
          >
            Contact
          </Link>
        </li>
        <li>
          <CountrySelect currentLocale={currentLocale} flagsOnly={false} />
        </li>
      </ul>

      <span
        className="h-4 w-px bg-black/30 shrink-0"
        aria-hidden
      />

      <ul className="flex items-center list-none m-0 p-0">
        <li>
          <CurrencySelect
            value={currency}
            onChange={onCurrencyChange}
          />
        </li>
      </ul>
    </nav>
  );
}
