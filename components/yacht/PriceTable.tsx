type MonthPrice = {
  /** Month label (e.g. "January"). */
  name: string;
  /** Formatted price string (e.g. "€10,000"). */
  price: string;
  /** Pricing note displayed below the price. */
  note: string;
};

type PriceTableProps = {
  /** Section heading text. */
  title: string;
  /** Monthly price entries. */
  months: MonthPrice[];
  /** Optional footnote displayed below the table. */
  footnote?: string;
  /** Pricing model — determines the note color and suffix text. */
  type: "expenses" | "all-inclusive";
};

/**
 * Price information table displayed on the yacht detail page.
 * Supports two pricing models: "+VAT +Expenses" and "All-inclusive".
 */
export function PriceTable({
  title,
  months,
  footnote,
  type,
}: PriceTableProps) {
  return (
    <section className="py-8">
      <h2
        className="mb-6 text-xl font-bold md:text-2xl"
        style={{ color: "var(--brand-brown)" }}
      >
        {title}
      </h2>

      {/* Price grid */}
      <div
        className="grid grid-cols-2 overflow-hidden border border-gray-200 md:grid-cols-6"
        style={{ borderRadius: "var(--card-radius)" }}
      >
        {months.map((month, i) => (
          <div
            key={month.name}
            className={`p-4 text-center ${i % 2 === 1 ? "bg-amber-50/50" : ""}`}
          >
            <p className="bg-gray-50 text-sm font-medium text-gray-600">
              {month.name}
            </p>
            <p className="mt-1 text-lg font-bold">{month.price}</p>
            <p
              className={`text-xs ${
                type === "expenses" ? "text-orange-600" : "text-green-600"
              }`}
            >
              {type === "expenses"
                ? "+VAT +Expenses /weekly"
                : "All-inclusive /weekly"}
            </p>
          </div>
        ))}
      </div>

      {/* Footnote */}
      {footnote && (
        <p className="mt-4 whitespace-pre-line text-sm text-gray-600">
          {footnote}
        </p>
      )}

      {/* Divider + CTA */}
      <hr className="my-6 border-t border-gray-200" />
      <div className="text-center">
        <button
          type="button"
          className="rounded-full px-6 py-2.5 text-sm font-medium text-white"
          style={{ backgroundColor: "var(--brand-orange)" }}
        >
          Check Availability
        </button>
      </div>
    </section>
  );
}
