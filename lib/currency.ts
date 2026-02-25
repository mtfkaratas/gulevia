import type { Locale } from "./locale";

/**
 * Supported currencies. Results can be shown in any of these in any country;
 * when the country changes, the default currency for that country is selected.
 */
export const CURRENCIES = [
  "USD", // US
  "GBP", // UK
  "EUR", // DE, FR, HR
  "TRY", // TR
] as const;

export type Currency = (typeof CURRENCIES)[number];

/**
 * Default currency per locale. Use when switching country to pre-fill the currency selector.
 * Example: getDefaultCurrencyForLocale('tr') => 'TRY'
 */
export const DEFAULT_CURRENCY_BY_LOCALE: Record<Locale, Currency> = {
  us: "USD",
  uk: "GBP",
  de: "EUR",
  fr: "EUR",
  hr: "EUR",
  tr: "TRY",
};

/**
 * Returns the default currency for the given locale.
 * @param locale - One of the supported locales (us, uk, de, fr, hr, tr).
 * @returns The default currency code (e.g. 'TRY' for tr, 'EUR' for de).
 * @example getDefaultCurrencyForLocale('tr') // 'TRY'
 * @example getDefaultCurrencyForLocale('de') // 'EUR'
 */
export function getDefaultCurrencyForLocale(locale: Locale): Currency {
  return DEFAULT_CURRENCY_BY_LOCALE[locale];
}

/**
 * Type guard: returns true if value is a valid Currency.
 */
export function isCurrency(value: string): value is Currency {
  return CURRENCIES.includes(value as Currency);
}

/**
 * Display label with symbol for each currency (e.g. for currency selector).
 */
export const CURRENCY_LABELS: Record<Currency, string> = {
  USD: "$ USD",
  GBP: "£ GBP",
  EUR: "€ EUR",
  TRY: "₺ TRY",
};
