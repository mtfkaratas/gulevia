import { Link } from "@/i18n/navigation";

const TAGLINE = "Luxury Gulet Charters in Turkey, Greece & Croatia";
const BRAND = "gulevia";

/**
 * Site logo: tagline above brand name. Links to home.
 * Tagline is hidden on mobile/tablet (visible from md up).
 */
export function Logo() {
  return (
    <Link
      href="/"
      className="flex flex-col gap-0.5 no-underline text-inherit hover:opacity-90 transition-opacity text-xl md:text-[1.75rem]"
      aria-label={`${BRAND} - ${TAGLINE}, go to home`}
    >
      <span className="text-black leading-tight font-normal hidden md:block text-[0.25em]">
        {TAGLINE}
      </span>
      <span className="font-semibold text-[#2563eb]">
        {BRAND}
      </span>
    </Link>
  );
}
