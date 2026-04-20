"use client";

/**
 * DuotoneImage — editorial photography treatment. Remaps a source photo
 * into a two-colour duotone across luminance: shadows → deep ink
 * (#0A0A0A), highlights → signal orange (#E85D1F). Midtones interpolate
 * on the ramp, so the image reads as one coherent graphic rather than a
 * tinted photo.
 *
 * Pipeline:
 *   1. feColorMatrix → Rec. 709 luminance grayscale
 *   2. feComponentTransfer gamma 0.7 → lift shadows so dusk photos
 *      don't collapse to solid ink at the duotone step
 *   3. feComponentTransfer type="table" per channel → map 0→ink,
 *      1→signal orange
 *
 * Mount <DuotoneDefs /> once per page to expose the filter. Then any
 * <img style={{ filter: "url(#duotone-signal)" }} /> picks it up.
 */

export function DuotoneDefs() {
  return (
    <svg
      aria-hidden
      focusable="false"
      width="0"
      height="0"
      style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }}
    >
      <defs>
        <filter
          id="duotone-signal"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="
              0.2126 0.7152 0.0722 0 0
              0.2126 0.7152 0.0722 0 0
              0.2126 0.7152 0.0722 0 0
              0 0 0 1 0
            "
            result="gray"
          />
          <feComponentTransfer in="gray" result="lifted">
            <feFuncR type="gamma" amplitude="1" exponent="0.7" offset="0" />
            <feFuncG type="gamma" amplitude="1" exponent="0.7" offset="0" />
            <feFuncB type="gamma" amplitude="1" exponent="0.7" offset="0" />
          </feComponentTransfer>
          <feComponentTransfer in="lifted">
            <feFuncR type="table" tableValues="0.039 0.91" />
            <feFuncG type="table" tableValues="0.039 0.365" />
            <feFuncB type="table" tableValues="0.039 0.122" />
          </feComponentTransfer>
        </filter>

        {/* Hero overlay — cool blue tint (signal's complement) for
            wider tonal range on darker sections. */}
        <filter
          id="duotone-cool"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="
              0.2126 0.7152 0.0722 0 0
              0.2126 0.7152 0.0722 0 0
              0.2126 0.7152 0.0722 0 0
              0 0 0 1 0
            "
            result="gray"
          />
          <feComponentTransfer in="gray">
            <feFuncR type="table" tableValues="0.039 0.82" />
            <feFuncG type="table" tableValues="0.039 0.88" />
            <feFuncB type="table" tableValues="0.16 0.94" />
          </feComponentTransfer>
        </filter>

        {/* Monochrome ink wash — for inset thumbnails and low-weight
            photographic elements. */}
        <filter
          id="duotone-ink"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="
              0.2126 0.7152 0.0722 0 0
              0.2126 0.7152 0.0722 0 0
              0.2126 0.7152 0.0722 0 0
              0 0 0 1 0
            "
            result="gray"
          />
          <feComponentTransfer in="gray">
            <feFuncR type="table" tableValues="0.039 0.96" />
            <feFuncG type="table" tableValues="0.039 0.95" />
            <feFuncB type="table" tableValues="0.039 0.88" />
          </feComponentTransfer>
        </filter>
      </defs>
    </svg>
  );
}

type DuotoneImageProps = {
  src: string;
  alt: string;
  filter?: "signal" | "cool" | "ink";
  aspectRatio?: string;
  className?: string;
};

/**
 * Single duotone-treated image. Use inside a sized parent or pass an
 * `aspectRatio` so the fill has somewhere to land.
 */
export function DuotoneImage({
  src,
  alt,
  filter = "signal",
  aspectRatio,
  className,
}: DuotoneImageProps) {
  const filterId = `url(#duotone-${filter})`;
  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio,
        overflow: "hidden",
        backgroundColor: "#0A0A0A",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: filterId,
          display: "block",
        }}
      />
    </div>
  );
}
