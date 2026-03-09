import type { ReactNode } from "react";
import { SectionHeading } from "@/components/shared/SectionHeading";

type RichContentProps = {
  /** Main heading rendered via SectionHeading. */
  title: string;
  /** Rich content body (JSX elements, paragraphs, sub-headings, etc.). */
  content: ReactNode;
  /** Optional class overrides for the outer article. */
  className?: string;
};

/**
 * Article/content block component for prose-like rich text sections.
 * Uses SectionHeading for the title and renders arbitrary children
 * with consistent typographic styling.
 */
export function RichContent({ title, content, className = "" }: RichContentProps) {
  return (
    <article
      className={`mx-auto max-w-7xl px-4 ${className}`}
      style={{ paddingBlock: "var(--section-gap)" }}
    >
      <SectionHeading title={title} />

      <div className="space-y-4 text-sm leading-relaxed text-gray-700 md:text-base [&>h3]:font-bold [&>h3]:text-base [&>h3]:md:text-lg" style={{ "--heading-color": "var(--brand-brown)" } as React.CSSProperties}>
        {content}
      </div>
    </article>
  );
}

/**
 * Pre-built homepage instance of RichContent with mock lorem ipsum copy.
 * Drop this directly into the homepage layout.
 */
export function HomepageRichContent() {
  return (
    <RichContent
      title="Gulet Charter Guide"
      content={
        <>
          <h3 style={{ color: "var(--brand-brown)" }}>
            What Is a Gulet Charter?
          </h3>
          <p>
            A gulet is a traditional wooden sailing vessel originating from the
            southwestern coast of Turkey. These elegant two-masted boats have
            been crafted by skilled artisans for centuries, combining timeless
            maritime heritage with modern luxury. Today, gulet charters offer an
            unparalleled way to explore the turquoise waters of the
            Mediterranean and Aegean seas, providing an intimate and
            personalized cruising experience that larger vessels simply cannot
            match.
          </p>

          <h3 style={{ color: "var(--brand-brown)" }}>
            Why Choose a Gulet for Your Next Vacation?
          </h3>
          <p>
            Unlike conventional cruise ships, a gulet charter puts you in
            complete control of your itinerary. Wake up each morning in a
            different secluded bay, dive into crystal-clear waters right from
            your deck, and enjoy freshly prepared meals by your private chef.
            With spacious cabins, sun decks, and attentive crew, every moment
            aboard is tailored to your preferences. Whether you seek adventure,
            relaxation, or a blend of both, a gulet charter delivers an
            unforgettable holiday on the water.
          </p>

          <h3 style={{ color: "var(--brand-brown)" }}>
            Popular Routes &amp; Destinations
          </h3>
          <p>
            The most sought-after gulet routes trace the stunning coastlines of
            Turkey, Greece, and Croatia. In Turkey, the famous Blue Voyage from
            Bodrum to Fethiye showcases hidden coves, ancient ruins, and
            charming fishing villages. Greek island-hopping routes through the
            Dodecanese and Cyclades reveal whitewashed villages and vibrant
            nightlife. Croatia&apos;s Dalmatian coast offers a captivating mix
            of medieval walled cities, pine-fringed islands, and world-class
            cuisine — all best experienced from the deck of a traditional gulet.
          </p>
        </>
      }
    />
  );
}
