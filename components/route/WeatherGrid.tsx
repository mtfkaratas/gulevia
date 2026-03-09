import { Ship, Thermometer, Droplets } from "lucide-react";

/**
 * Single month's weather and sea temperature data.
 */
export type WeatherMonth = {
  /** Display name of the month (e.g. "Mayıs", "Haziran"). */
  month: string;
  /** Average air temperature in °C. */
  airTemp: number;
  /** Average sea temperature in °C. */
  seaTemp: number;
};

/**
 * Props for the WeatherGrid component.
 */
export type WeatherGridProps = {
  /** List of months with air and sea temperature data. */
  months?: WeatherMonth[];
};

const DEFAULT_MONTHS: WeatherMonth[] = [
  { month: "Mayıs", airTemp: 22, seaTemp: 20 },
  { month: "Haziran", airTemp: 27, seaTemp: 24 },
  { month: "Temmuz", airTemp: 30, seaTemp: 26 },
  { month: "Ağustos", airTemp: 31, seaTemp: 27 },
  { month: "Eylül", airTemp: 27, seaTemp: 25 },
  { month: "Ekim", airTemp: 22, seaTemp: 23 },
];

/**
 * Renders a weather and sea temperature section with a grid of monthly data.
 * Shows air and sea temperatures per month with icons.
 */
export function WeatherGrid({ months = DEFAULT_MONTHS }: WeatherGridProps) {
  return (
    <section className="text-center">
      <Ship
        className="size-10 text-gray-400 mx-auto mb-2"
        strokeWidth={1.5}
        aria-hidden
      />
      <h2
        className="text-lg md:text-xl font-bold text-center mb-6"
        style={{ color: "var(--brand-brown)" }}
      >
        Hava Durumu ve Deniz Suyu Sıcaklığı
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
        {months.map(({ month, airTemp, seaTemp }) => (
          <div
            key={month}
            className="border border-gray-200 p-4 text-center"
            style={{ borderRadius: "var(--card-radius)" }}
          >
            <div className="text-sm font-medium">{month}</div>
            <div className="flex items-center justify-center gap-3 mt-2 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <Thermometer className="size-3 shrink-0" aria-hidden />
                {airTemp}°C
              </span>
              <span className="flex items-center gap-1">
                <Droplets className="size-3 shrink-0" aria-hidden />
                {seaTemp}°C
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
