import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { Check, X } from "lucide-react";

type FeatureItem = {
  /** Lucide icon component rendered beside the label. */
  icon: LucideIcon;
  /** Human-readable name of the feature. */
  label: string;
  /** String value or boolean availability flag. */
  value: string | boolean;
};

type FeatureGridProps = {
  /** Section heading text (e.g. "Cabin Features"). */
  title: string;
  /** Up to 4 images displayed above the feature list. */
  images: string[];
  /** List of features with icon, label and value. */
  features: FeatureItem[];
};

/**
 * Reusable feature grid used for both "Cabin Features" and
 * "Entertainment & Toys" sections on the yacht detail page.
 */
export function FeatureGrid({ title, images, features }: FeatureGridProps) {
  return (
    <section className="py-8">
      <h2
        className="mb-6 text-xl font-bold md:text-2xl"
        style={{ color: "var(--brand-brown)" }}
      >
        {title}
      </h2>

      {/* Image row */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {images.map((src, i) => (
          <div key={i} className="relative aspect-4/3 overflow-hidden rounded-lg">
            <Image
              src={src}
              alt={`${title} ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
        ))}
      </div>

      {/* Feature list */}
      <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-4">
        {features.map((feat) => (
          <div
            key={feat.label}
            className="flex items-center gap-3 border-b border-gray-100 py-2"
          >
            <feat.icon className="size-4 text-gray-500" />
            <span className="flex-1 text-sm">{feat.label}</span>
            <FeatureValue value={feat.value} />
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Renders a feature value as a check/cross icon (boolean) or bold text (string).
 */
function FeatureValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="size-4 text-green-600" />
    ) : (
      <X className="size-4 text-red-400" />
    );
  }
  return <span className="text-sm font-bold">{value}</span>;
}
