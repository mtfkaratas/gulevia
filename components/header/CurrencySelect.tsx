"use client";

import { CURRENCIES, CURRENCY_LABELS, type Currency } from "@/lib/currency";

type CurrencySelectProps = {
  /** Current selected currency. */
  value: Currency;
  /** Called when user selects a different currency. */
  onChange: (currency: Currency) => void;
  /** Optional class for the select wrapper. */
  className?: string;
};

/**
 * Currency selector. Controlled component; parent holds value and onChange
 * (e.g. state or cookie). Renders native <select> with symbol + code.
 */
export function CurrencySelect({
  value,
  onChange,
  className = "",
}: CurrencySelectProps) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const v = e.target.value as Currency;
    if (CURRENCIES.includes(v)) onChange(v);
  }

  return (
    <label className={`inline-flex items-center ${className}`}>
      <span className="sr-only">Select currency</span>
      <select
        value={value}
        onChange={handleChange}
        aria-label="Currency"
        className="appearance-none bg-transparent border-none cursor-pointer text-inherit text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 rounded pr-6 py-1"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23333' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10l-5 5z'/%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 2px center",
        }}
      >
        {CURRENCIES.map((c) => (
          <option key={c} value={c}>
            {CURRENCY_LABELS[c]}
          </option>
        ))}
      </select>
    </label>
  );
}
