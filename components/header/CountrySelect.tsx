"use client";

import ReactCountryFlag from "react-country-flag";
import { useRouter, usePathname } from "@/i18n/navigation";
import { LOCALES, LOCALE_LABELS, LOCALE_TO_COUNTRY_CODE, type Locale } from "@/lib/locale";

type CountrySelectProps = {
  /** Current locale (from URL). */
  currentLocale: Locale;
  /** Show only round flags (no text). Used on mobile. */
  flagsOnly?: boolean;
  /** Optional class for the select wrapper. */
  className?: string;
};

/**
 * With localePrefix 'as-needed', usePathname() returns pathname with locale for
 * non-default locales (e.g. /de, /de/about). We must pass only the internal path
 * to router.replace so we don't get /fr/de or /us/de.
 */
function getInternalPathname(pathname: string): string {
  const trimmed = pathname.replace(/^\//, "").replace(/\/$/, "") || "";
  const parts = trimmed.split("/").filter(Boolean);
  const first = parts[0];
  if (first && LOCALES.includes(first as Locale)) {
    const rest = parts.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname || "/";
}

/**
 * Country/locale selector. On change, navigates to the same pathname in the new locale.
 * Renders a native <select> with option labels as "Flag Label" or flag only (flagsOnly).
 */
export function CountrySelect({
  currentLocale,
  flagsOnly = false,
  className = "",
}: CountrySelectProps) {
  const router = useRouter();
  const pathname = usePathname();
  const internalPath = getInternalPathname(pathname);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value as Locale;
    if (!LOCALES.includes(value)) return;
    router.replace(internalPath as Parameters<typeof router.replace>[0], { locale: value });
  }

  const countryCode = LOCALE_TO_COUNTRY_CODE[currentLocale];

  return (
    <label className={`inline-flex items-center gap-1.5 ${className}`}>
      <span className="sr-only">Select country</span>
      <span
        className="flex shrink-0 overflow-hidden rounded-full size-6"
        aria-hidden
      >
        <ReactCountryFlag
          countryCode={countryCode}
          svg
          style={{ width: "1.5rem", height: "1.5rem" }}
          title={LOCALE_LABELS[currentLocale]}
        />
      </span>
      <select
        value={currentLocale}
        onChange={handleChange}
        aria-label="Country / region"
        className="appearance-none bg-transparent border-none cursor-pointer text-inherit text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded pr-6 py-1"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23333' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 2px center",
        }}
      >
        {LOCALES.map((locale) => (
          <option key={locale} value={locale}>
            {LOCALE_LABELS[locale]}
          </option>
        ))}
      </select>
    </label>
  );
}
