import { defineRouting } from "next-intl/routing";
import { LOCALES, DEFAULT_LOCALE } from "@/lib/locale";

/**
 * Routing config: maps internal pathnames (file-system under app/[locale]/) to
 * locale-specific URL segments. Default locale (us) has no prefix; others use
 * /tr/, /de/, etc. Keys = internal path; value = single path or per-locale overrides.
 *
 * How it works:
 * - Incoming request /tr/hakkimizda is rewritten to internal /tr/about (so [locale]=tr, segment=about).
 * - Link href for pathname /about with locale tr becomes /tr/hakkimizda.
 *
 * Pathnames with [id] keep the same param name; only the segment name is localized
 * (e.g. /yachts/[id] → /tr/yatlar/[id]).
 */
export const routing = defineRouting({
  locales: [...LOCALES],
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: "as-needed",

  pathnames: {
    "/": "/",

    "/yachts": {
      de: "/yachten",
      fr: "/bateaux",
      hr: "/jahti",
      tr: "/yatlar",
    },

    "/yachts/[id]": {
      de: "/yachten/[id]",
      fr: "/bateaux/[id]",
      hr: "/jahti/[id]",
      tr: "/yatlar/[id]",
    },

    "/routes": {
      de: "/routen",
      fr: "/itineraires",
      hr: "/rute",
      tr: "/rotalar",
    },

    "/routes/[id]": {
      de: "/routen/[id]",
      fr: "/itineraires/[id]",
      hr: "/rute/[id]",
      tr: "/rotalar/[id]",
    },

    "/about": {
      de: "/uber-uns",
      fr: "/a-propos",
      hr: "/o-nama",
      tr: "/hakkimizda",
    },

    "/contact": {
      de: "/kontakt",
      fr: "/contact",
      hr: "/kontakt",
      tr: "/iletisim",
    },
  },
});
