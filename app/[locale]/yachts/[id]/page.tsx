import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/lib/locale";

type Props = {
  params: Promise<{ locale: string; id: string }>;
};

/**
 * Yacht detail page. Renders a single yacht by id.
 * URL examples: /yachts/123 (us), /tr/yatlar/123, /de/yachten/123.
 * Params: locale from [locale], id from [id] (e.g. slug or numeric id).
 */
export default async function YachtDetailPage({ params }: Props) {
  const { locale, id } = await params;
  setRequestLocale(locale as Locale);

  return (
    <div>
      <p>Yacht detail</p>
      <p>ID: {id}</p>
    </div>
  );
}
