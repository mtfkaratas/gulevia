/**
 * Renders a two-column section with route highlights and top sites lists.
 */
export function HighlightsTopSites() {
  const highlights = [
    "Taste the cuisine on Anegada",
    "Dive at Rhone Marine Park",
    "Fireball Full Moon Party at Trellis Bay",
    "Embrace the Jost Van Dyke beach bar scene",
    "Explore the Baths National Park",
    "Taste the cuisine on Anegada",
    "Dive at Rhone Marine Park",
    "Fireball Full Moon Party at Trellis Bay",
  ];

  const topSites = [
    "Blue Lagoon",
    "Kas",
    "Boncuklu Bay",
    "Butterfly Valley",
    "Samanlik Bay",
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left column: Highlights */}
      <div>
        <h2
          className="text-lg font-bold mb-3"
          style={{ color: "var(--brand-brown)" }}
        >
          Highlights
        </h2>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
          {highlights.map((item, index) => (
            <li key={`${item}-${index}`}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Right column: Top 5 Sites */}
      <div>
        <h2
          className="text-lg font-bold mb-3"
          style={{ color: "var(--brand-brown)" }}
        >
          Top 5 Sites
        </h2>
        <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-700">
          {topSites.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
