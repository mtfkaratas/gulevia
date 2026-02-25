import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/lib/locale";

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

/**
 * Route detail page. Renders a single route by id.
 * URL examples: /routes/abc (us), /tr/rotalar/abc, /de/routen/abc.
 * Params: locale from [locale], id from [id] (e.g. route slug or code).
 */
export default async function RouteDetailPage({ params }: Props) {
  const { locale, id } = await params;
  setRequestLocale(locale as Locale);

  return (
    <div>
      <p>Route detail</p>
      <p>ID: {id}</p>
    </div>
  );
}
