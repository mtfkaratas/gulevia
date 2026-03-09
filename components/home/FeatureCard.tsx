import Image from "next/image";

type FeatureCardProps = {
  /** Source path for the card image. */
  imageSrc: string;
  /** Card title displayed below the image. */
  title: string;
  /** Short description, clamped to 3 lines. */
  description: string;
  /** Navigation target for the card. */
  href: string;
};

/**
 * Feature card used in the "Yachts Shaped by Type" section.
 * Shows an image with a border around the whole card.
 * On hover the border color changes to brand-brown.
 */
export function FeatureCard({
  imageSrc,
  title,
  description,
  href,
}: FeatureCardProps) {
  return (
    <article
      className="overflow-hidden bg-white border border-[#E9E6E0] transition-colors hover:border-[#7A3A00]"
      style={{ borderRadius: "var(--card-radius)" }}
    >
      <div className="relative aspect-4/3">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>

      <div className="space-y-1.5 p-4">
        <h3 className="text-base font-bold">{title}</h3>
        <p className="line-clamp-3 text-sm text-gray-500">{description}</p>
      </div>
    </article>
  );
}
