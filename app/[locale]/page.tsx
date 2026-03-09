import { setRequestLocale } from "next-intl/server";
import type { Locale } from "@/lib/locale";
import { HeroBanner } from "@/components/home/HeroBanner";
import { BudgetCategorySection } from "@/components/home/BudgetCategorySection";
import { FeatureSection } from "@/components/home/FeatureSection";
import { CabinFilterSection } from "@/components/home/CabinFilterSection";
import { PopularYachtsSection } from "@/components/home/PopularYachtsSection";
import { HomepageRichContent } from "@/components/home/RichContent";
import { DestinationShowcase } from "@/components/home/DestinationShowcase";

type Props = {
  params: Promise<{ locale: string }>;
};

/**
 * Homepage. Assembles all homepage sections in order:
 * 1. HeroBanner (carousel + search form)
 * 2. BudgetCategorySection (Gulets match your style)
 * 3. FeatureSection (Yachts shaped by type)
 * 4. CabinFilterSection (quick cabin/guest filter)
 * 5. PopularYachtsSection (tabs + yacht carousel)
 * 6. HomepageRichContent (gulet charter guide article)
 * 7. DestinationShowcase (popular charter destinations)
 */
export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale as Locale);

  return (
    <>
      <HeroBanner />
      <BudgetCategorySection />
      <FeatureSection />
      <CabinFilterSection />
      <PopularYachtsSection />
      <HomepageRichContent />
      <DestinationShowcase />
    </>
  );
}
