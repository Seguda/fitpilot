import Image from "next/image";
import type { ReactNode } from "react";
import {
  imageFrame,
  imageInsetRing,
  overlayEditorialDark,
  overlayEditorialLight,
  overlayWarm,
} from "./imageStyles";

export type VisualOverlay = "light" | "dark" | "warm" | "none";

interface VisualPanelProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  overlay?: VisualOverlay;
  sizes?: string;
}

const overlayMap: Record<Exclude<VisualOverlay, "none">, string> = {
  light: overlayEditorialLight,
  dark: overlayEditorialDark,
  warm: `${overlayEditorialLight} ${overlayWarm}`,
};

export function VisualPanel({
  src,
  alt,
  className = "aspect-[4/3] w-full",
  priority = false,
  overlay = "light",
  sizes = "(max-width: 768px) 100vw, 600px",
}: VisualPanelProps) {
  return (
    <div
      className={`relative ${imageFrame} shadow-sm ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes}
        priority={priority}
      />
      {overlay !== "none" ? (
        <>
          <div className={overlayMap[overlay]} aria-hidden />
          <div className={imageInsetRing} aria-hidden />
        </>
      ) : null}
    </div>
  );
}

interface SplitBlockProps {
  id?: string;
  eyebrow?: string;
  title: string;
  kicker?: string;
  children?: ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageFirst?: boolean;
  className?: string;
}

export function SplitBlock({
  id,
  eyebrow,
  title,
  kicker,
  children,
  imageSrc,
  imageAlt,
  imageFirst = false,
  className = "",
}: SplitBlockProps) {
  const copy = (
    <div className="flex flex-col justify-center space-y-5 py-4 lg:py-8">
      {eyebrow ? <p className={stylesEyebrow}>{eyebrow}</p> : null}
      <h2
        id={id ? `${id}-heading` : undefined}
        className="text-balance text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
      >
        {title}
      </h2>
      {kicker ? (
        <p className="max-w-md text-base leading-relaxed text-stone-600 sm:text-lg">
          {kicker}
        </p>
      ) : null}
      {children}
    </div>
  );

  const visual = (
    <VisualPanel
      src={imageSrc}
      alt={imageAlt}
      overlay="warm"
      className="aspect-[5/4] w-full sm:aspect-[4/3] lg:min-h-[420px] lg:aspect-auto lg:h-full"
      sizes="(max-width: 1024px) 100vw, 50vw"
    />
  );

  return (
    <section
      id={id}
      className={`scroll-mt-28 py-16 sm:py-20 lg:py-28 ${className}`}
      aria-labelledby={id ? `${id}-heading` : undefined}
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        {imageFirst ? (
          <>
            {visual}
            {copy}
          </>
        ) : (
          <>
            {copy}
            {visual}
          </>
        )}
      </div>
    </section>
  );
}

const stylesEyebrow =
  "text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700";
