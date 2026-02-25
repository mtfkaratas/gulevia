import { setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/header";
import type { Locale } from "@/lib/locale";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

/**
 * Returns all locale segments so Next.js can statically generate each locale.
 * Used with setRequestLocale to avoid dynamic rendering for next-intl.
 */
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/**
 * Locale layout. Validates the [locale] param, sets the request locale for next-intl,
 * and renders the shared layout (same for all locales) with children.
 */
export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale as Locale);

  return (
    <div className="min-h-screen bg-white">
      <Header currentLocale={locale as Locale} />
      <main>{children}</main>
    </div>
  );
}
