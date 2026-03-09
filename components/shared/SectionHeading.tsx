import type { ReactNode } from "react";

type SectionHeadingProps = {
  /** Main section title (rendered as <h2>). */
  title: string;
  /** Optional subtitle/description below the title. */
  subtitle?: string;
  /** Optional content to render to the right of the title (e.g. "View All" button). */
  action?: ReactNode;
  /** Optional class overrides. */
  className?: string;
};

/**
 * Reusable section heading shared across all homepage sections.
 * Brown bold title (Inter font, no italic), optional subtitle, optional right-aligned action.
 */
export function SectionHeading({
  title,
  subtitle,
  action,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-6 md:mb-8 ${className}`}>
      <div className="flex items-start justify-between gap-4">
        <h2
          className="text-xl md:text-2xl lg:text-[1.75rem] font-bold leading-tight"
          style={{ color: "var(--brand-brown)" }}
        >
          {title}
        </h2>
        {action && <div className="shrink-0">{action}</div>}
      </div>
      {subtitle && (
        <p className="mt-2 text-sm md:text-base text-gray-600">{subtitle}</p>
      )}
    </div>
  );
}
