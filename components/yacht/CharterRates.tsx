type CharterRatesProps = {
  /** List of items included in the charter rate. */
  includes: string[];
  /** List of items excluded from the charter rate. */
  excludes: string[];
};

/**
 * Two-column layout showing what is included and excluded in charter rates.
 * Stacks vertically on mobile, side-by-side on desktop.
 */
export function CharterRates({ includes, excludes }: CharterRatesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h3
          className="font-bold text-lg mb-4"
          style={{ color: "var(--brand-brown)" }}
        >
          Charter Rates Include
        </h3>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
          {includes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3
          className="font-bold text-lg mb-4"
          style={{ color: "var(--brand-brown)" }}
        >
          Charter Rates Exclude
        </h3>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
          {excludes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
