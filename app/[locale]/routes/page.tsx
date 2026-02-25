import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/lib/locale";

type Props = {
  params: Promise<{ locale: string }>;
};

/**
 * Route listing page. Displays a list of routes (e.g. sailing routes) for the current locale.
 * URL examples: /routes (us), /tr/rotalar, /de/routen.
 */
export default async function RoutesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <p>Route listing</p>;
}
