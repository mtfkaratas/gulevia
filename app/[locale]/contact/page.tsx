import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/lib/locale";

type Props = {
  params: Promise<{ locale: string }>;
};

/**
 * Contact page. URL examples: /contact (us), /tr/iletisim, /de/kontakt.
 */
export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <p>Contact</p>;
}
