import { Link } from "@/i18n/navigation";

const TAGLINE = "Luxury Gulet Charters in Turkey, Greece & Croatia";
const BRAND = "Gulevia";

/**
 * Site logo: tagline above brand name. Links to home.
 * Tagline is hidden on mobile/tablet (visible from md up).
 */
export function Logo() {
  return (
    <Link
      href="/"
      className="flex flex-col gap-0.5 no-underline text-inherit hover:opacity-90 transition-opacity"
      aria-label={`${BRAND} - ${TAGLINE}, go to home`}
    >
      <span className="hidden text-[10px] leading-tight font-normal text-black md:block">
        {TAGLINE}
      </span>
      <span className="text-[38px] font-semibold leading-none" style={{ color: "var(--brand-blue)" }}>
        {BRAND}
      </span>
    </Link>
  );
}
