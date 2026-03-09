/**
 * Props for the RouteListSection component.
 */
export type RouteListSectionProps = {
  /** Section title displayed as an h2 heading. */
  title: string;
  /** List of routes, each with a title and description. */
  routes: {
    title: string;
    description: string;
  }[];
};

/**
 * Renders a section with a heading and a vertical list of routes.
 * Each route displays a title and description in a simple stacked layout.
 */
export function RouteListSection({ title, routes }: RouteListSectionProps) {
  return (
    <section>
      <h2
        className="text-xl md:text-2xl font-bold mb-6"
        style={{ color: "var(--brand-brown)" }}
      >
        {title}
      </h2>
      <div>
        {routes.map((route) => (
          <div key={route.title} className="mb-6">
            <h3 className="text-base font-bold">{route.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{route.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
