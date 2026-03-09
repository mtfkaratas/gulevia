import { Phone, Mail } from "lucide-react";

/**
 * Centered contact CTA section with "Still Have a Question?" heading
 * and two CTA cards: For Charter (Phone) and For Help & Support (Mail).
 */
export function ContactCTASection() {
  return (
    <section
      className="bg-gray-50 px-4 py-12 text-center"
      style={{ borderRadius: "var(--card-radius)" }}
    >
      <h2
        className="mb-3 text-xl font-bold md:text-2xl"
        style={{ color: "var(--brand-brown)" }}
      >
        Still Have a Question?
      </h2>
      <p className="mx-auto mb-8 max-w-xl text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur. Dis gravida libero enim est sit.
        Dui pretium aliquam id urna. Omare lectus magna egestas ornare integer.
      </p>
      <div className="mx-auto grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
        <article
          className="p-8 text-white"
          style={{ backgroundColor: "#1B3A5C", borderRadius: "var(--card-radius)" }}
        >
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <Phone className="size-8" aria-hidden="true" />
            </div>
          </div>
          <h3 className="mb-2 text-lg font-bold">For Charter</h3>
          <p className="mb-4 text-sm text-white/70">
            Get in touch via WhatsApp for Seamless Communication.
          </p>
          <p className="text-sm font-medium" style={{ color: "var(--brand-orange)" }}>
            charter@gulevia &bull; +90 (533) 956 99 42
          </p>
        </article>
        <article
          className="p-8 text-white"
          style={{ backgroundColor: "#2A5E5A", borderRadius: "var(--card-radius)" }}
        >
          <div className="mb-4 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <Mail className="size-8" aria-hidden="true" />
            </div>
          </div>
          <h3 className="mb-2 text-lg font-bold">For Help & Support</h3>
          <p className="mb-4 text-sm text-white/70">
            Get in touch via WhatsApp for Seamless Communication.
          </p>
          <p className="text-sm font-medium" style={{ color: "var(--brand-orange)" }}>
            charter@gulevia &bull; +90 (533) 956 99 42
          </p>
        </article>
      </div>
    </section>
  );
}
