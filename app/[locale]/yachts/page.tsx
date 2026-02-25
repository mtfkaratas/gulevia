import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/lib/locale";

type Props = {
  params: Promise<{ locale: string }>;
};

/**
 * Yacht listing page. Displays a list of yachts for the current locale.
 * URL examples: /yachts (us), /tr/yatlar, /de/yachten.
 */
export default async function YachtsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <p>Yacht listing</p>;
}
