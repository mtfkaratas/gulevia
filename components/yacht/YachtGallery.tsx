import Image from "next/image";

const MOCK_IMAGE = "/mock/images/banner.png";

/**
 * Image gallery for yacht detail pages.
 * Desktop: two images side-by-side (60%/40%) with a peek strip on the right.
 * Mobile: single full-width image.
 */
export function YachtGallery() {
  return (
    <div className="relative w-full">
      {/* ── Mobile layout ── */}
      <div className="block md:hidden">
        <div className="relative aspect-3/2 w-full overflow-hidden rounded-lg">
          <Image
            src={MOCK_IMAGE}
            alt="Yacht main view"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* ── Desktop layout ── */}
      <div className="hidden md:flex gap-2 pr-[40px]">
        {/* Main image – 60% */}
        <div className="relative flex-[0_0_60%] aspect-3/2 overflow-hidden rounded-lg">
          <Image
            src={MOCK_IMAGE}
            alt="Yacht main view"
            fill
            className="object-cover"
            sizes="60vw"
            priority
          />
        </div>

        {/* Secondary image with play button – 40% */}
        <div className="relative flex-[0_0_calc(40%-0.5rem)] aspect-3/2 overflow-hidden rounded-lg">
          <Image
            src={MOCK_IMAGE}
            alt="Yacht video preview"
            fill
            className="object-cover"
            sizes="40vw"
          />

          {/* Play button overlay */}
          <button
            type="button"
            aria-label="Play video"
            className="absolute inset-0 flex items-center justify-center"
          >
            <span
              className="flex h-14 w-14 items-center justify-center rounded-full"
              style={{ backgroundColor: "var(--brand-orange)" }}
            >
              <svg
                width="20"
                height="24"
                viewBox="0 0 20 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
              >
                <path d="M0 0L20 12L0 24V0Z" fill="white" />
              </svg>
            </span>
          </button>
        </div>

        {/* Peek strip – thin slice of a third image */}
        <div className="absolute right-0 top-0 bottom-0 w-[40px] overflow-hidden rounded-lg">
          <Image
            src={MOCK_IMAGE}
            alt="More photos"
            fill
            className="object-cover object-left"
            sizes="40px"
          />
        </div>
      </div>
    </div>
  );
}
