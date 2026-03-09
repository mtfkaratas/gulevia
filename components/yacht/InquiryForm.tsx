"use client";

import { CalendarDays } from "lucide-react";

/**
 * Visual-only contact / inquiry form for yacht charter enquiries.
 * No submission logic — purely presentational.
 */
export function InquiryForm() {
  const inputClass =
    "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400";

  return (
    <div>
      <h2
        className="text-xl font-bold mb-6"
        style={{ color: "var(--brand-brown)" }}
      >
        To receive the best offers, get in touch with us!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="First Name" className={inputClass} />
        <input type="text" placeholder="Last Name" className={inputClass} />

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Country*"
            className={`${inputClass} w-[30%] shrink-0`}
          />
          <input type="tel" placeholder="Phone*" className={inputClass} />
        </div>

        <input
          type="email"
          placeholder="E-Mail*"
          className={inputClass}
        />

        <div className="relative">
          <input
            type="text"
            placeholder="Departure Date"
            className={inputClass}
          />
          <CalendarDays className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        </div>

        <input type="text" placeholder="Guests*" className={inputClass} />

        <textarea
          placeholder="Notes"
          className={`${inputClass} md:col-span-2 min-h-[80px] resize-y`}
        />
      </div>

      <hr className="my-6 border-t" />

      <div className="flex justify-center">
        <button
          type="button"
          className="rounded-full px-8 py-2.5 text-sm font-medium text-white"
          style={{ backgroundColor: "var(--brand-orange)" }}
        >
          Make Enquiry
        </button>
      </div>

      <hr className="my-6 border-t" />
    </div>
  );
}
