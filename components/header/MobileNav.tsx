"use client";

import { useState } from "react";
import { CountrySelect } from "./CountrySelect";
import { CurrencySelect } from "./CurrencySelect";
import { MobileMenuModal } from "./MobileMenuModal";
import type { Locale } from "@/lib/locale";
import type { Currency } from "@/lib/currency";

type MobileNavProps = {
  currentLocale: Locale;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
};

/**
 * Mobile/tablet bar: country (flags only), currency, hamburger.
 * Hamburger opens full-screen modal with nav links. Visible only below md.
 */
export function MobileNav({
  currentLocale,
  currency,
  onCurrencyChange,
}: MobileNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex md:hidden items-center gap-3">
        <CountrySelect
          currentLocale={currentLocale}
          flagsOnly
          className="[&_select]:w-10 [&_select]:text-lg"
        />
        <CurrencySelect value={currency} onChange={onCurrencyChange} />
        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="p-2 text-black bg-transparent border-none cursor-pointer rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open menu</span>
          <HamburgerIcon />
        </button>
      </div>
      <MobileMenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

function HamburgerIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}
