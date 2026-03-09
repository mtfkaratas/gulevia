import Link from "next/link";

type BreadcrumbItem = {
  /** Display label for the breadcrumb step. */
  label: string;
  /** Navigation URL. Omit for the current (last) page. */
  href?: string;
};

type BreadcrumbProps = {
  /** Ordered list of breadcrumb items from root to current page. */
  items: BreadcrumbItem[];
};

/**
 * Reusable breadcrumb navigation bar.
 * Last item renders as plain text (current page); preceding items render as links.
 */
export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-2 text-sm">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && (
                <span className="text-gray-400" aria-hidden="true">
                  {">"}
                </span>
              )}

              {isLast || !item.href ? (
                <span className="text-gray-700" aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="text-gray-500 hover:underline">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
