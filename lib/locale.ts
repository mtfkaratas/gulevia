/**
 * Supported country/locale codes for the app.
 * US is the default locale; its URLs have no prefix (/). Other locales
 * appear with their code as prefix (e.g. /de/, /fr/).
 */
export const LOCALES = [
  "us", // default, en-US
  "uk",
  "de",
  "fr",
  "hr",
  "tr",
] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "us";

/**
 * Type guard: returns true if value is a valid Locale.
 * @param value - String from URL segment or params (e.g. params.locale).
 * @returns True if value is one of LOCALES.
 * @example isLocale('tr') // true; isLocale('xx') // false
 */
export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

/**
 * Display label for each locale (e.g. for country selector).
 */
export const LOCALE_LABELS: Record<Locale, string> = {
  us: "USA",
  uk: "United Kingdom",
  de: "Germany",
  fr: "France",
  hr: "Croatia",
  tr: "Turkey",
};

/**
 * ISO 3166-1 alpha-2 country code for react-country-flag (us → US, uk → GB).
 */
export const LOCALE_TO_COUNTRY_CODE: Record<Locale, string> = {
  us: "US",
  uk: "GB",
  de: "DE",
  fr: "FR",
  hr: "HR",
  tr: "TR",
};

/**
 * Flag emoji for each locale (fallback when react-country-flag not used, e.g. inside <option>).
 */
export const LOCALE_FLAGS: Record<Locale, string> = {
  us: "🇺🇸",
  uk: "🇬🇧",
  de: "🇩🇪",
  fr: "🇫🇷",
  hr: "🇭🇷",
  tr: "🇹🇷",
};
