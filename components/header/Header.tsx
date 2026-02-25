"use client";

import { useState, useCallback } from "react";
import { Logo } from "./Logo";
import { NavDesktop } from "./NavDesktop";
import { MobileNav } from "./MobileNav";
import { getDefaultCurrencyForLocale } from "@/lib/currency";
import type { Locale } from "@/lib/locale";
import type { Currency } from "@/lib/currency";

type HeaderProps = {
  /** Current locale from the [locale] segment (passed from layout). */
  currentLocale: Locale;
};

/**
 * Site header: logo (left), desktop nav (right), mobile nav (right).
 * Bottom border runs full width; content is in a container.
 * Currency state is local; can be wired to cookie later.
 */
export function Header({ currentLocale }: HeaderProps) {
  const [currency, setCurrency] = useState<Currency>(() =>
    getDefaultCurrencyForLocale(currentLocale)
  );

  const handleCurrencyChange = useCallback((c: Currency) => {
    setCurrency(c);
  }, []);

  return (
    <header className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Logo />
          <NavDesktop
            currentLocale={currentLocale}
            currency={currency}
            onCurrencyChange={handleCurrencyChange}
          />
          <MobileNav
            currentLocale={currentLocale}
            currency={currency}
            onCurrencyChange={handleCurrencyChange}
          />
        </div>
      </div>
      <div className="border-b border-black/15 w-full" aria-hidden />
    </header>
  );
}
