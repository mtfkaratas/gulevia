import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gulevia",
  description: "Gulevia",
};

/**
 * Root layout. Wraps the app with NextIntlClientProvider so Client Components
 * can use useTranslations, useLocale, etc. getMessages() returns the current
 * request's messages (from i18n/request.ts) based on the [locale] segment.
 */
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="en">
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
