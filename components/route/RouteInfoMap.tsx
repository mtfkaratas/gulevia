import Image from "next/image";
import {
  Waves,
  UtensilsCrossed,
  Eye,
  Wine,
  Landmark,
  Map,
  Plane,
} from "lucide-react";

/**
 * Renders route information with start/end points, stats grid, airport badge,
 * and a map image in a two-column layout.
 */
export function RouteInfoMap() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-10">
      {/* Left column: route info */}
      <div className="flex-1">
        {/* Start / Ending info */}
        <div className="flex flex-row gap-8 border-b border-dashed border-gray-300 pb-4 mb-4">
          <div>
            <p className="text-xs text-gray-500">Start</p>
            <p className="font-bold">Bodrum</p>
            <p className="text-xs text-gray-500">Milas Airport – 40 km, 3 hour</p>
            <p className="text-xs text-gray-500">Bodrum Airport – 40 km, 3 hour</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Ending</p>
            <p className="font-bold">Fethiye</p>
            <p className="text-xs text-gray-500">Dalaman Airport – 60 km, 2 hour</p>
            <p className="text-xs text-gray-500">Fethiye Marina – 5 km, 15 min</p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <Waves className="size-4 text-gray-500" />
            <span className="text-sm">3 bay & beach</span>
          </div>
          <div className="flex items-center gap-2">
            <UtensilsCrossed className="size-4 text-gray-500" />
            <span className="text-sm">1 restaurant</span>
          </div>
          <div className="flex items-center gap-2">
            <Eye className="size-4 text-gray-500" />
            <span className="text-sm">Things to See</span>
          </div>
          <div className="flex items-center gap-2">
            <Wine className="size-4 text-gray-500" />
            <span className="text-sm">2 bar</span>
          </div>
          <div className="flex items-center gap-2">
            <Landmark className="size-4 text-gray-500" />
            <span className="text-sm">2 historical sites</span>
          </div>
          <div className="flex items-center gap-2">
            <Map className="size-4 text-gray-500" />
            <span className="text-sm">5 Extra Tour</span>
          </div>
        </div>

        {/* Airport badge */}
        <div className="flex items-center gap-2 mt-4">
          <Plane className="size-4 text-gray-500" />
          <span className="text-sm text-gray-500">Bodrum Airport</span>
        </div>
      </div>

      {/* Right column: map image */}
      <div className="flex-1">
        <div
          className="relative aspect-4/3 overflow-hidden rounded-lg border-2 border-dashed border-amber-400/50"
          style={{ borderRadius: "var(--card-radius)" }}
        >
          <Image
            src="/mock/images/banner.png"
            alt="Route map"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
