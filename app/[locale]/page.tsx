import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/lib/locale";

type Props = {
  params: Promise<{ locale: string }>;
};

/**
 * Home page. Renders for the current locale; setRequestLocale enables static generation
 * by providing the locale to next-intl so it does not rely on dynamic headers.
 */
export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return <p>Home</p>;
}
