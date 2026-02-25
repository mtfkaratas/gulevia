import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/lib/locale";

type Props = {
  params: Promise<{ locale: string }>;
};

/**
 * About page. URL examples: /about (us), /tr/hakkimizda, /de/uber-uns.
 */
export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <p>About</p>;
}
