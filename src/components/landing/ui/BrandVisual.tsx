import Image from "next/image";
import { imageFrame, imageInsetRing, imageShadow } from "./imageStyles";

interface BrandVisualProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  variant?: "editorial" | "product" | "hero";
  /** Intrinsic dimensions — required for variant="hero" */
  width?: number;
  height?: number;
}

export function BrandVisual({
  src,
  alt,
  className = "aspect-[4/5] w-full lg:min-h-[480px]",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 560px",
  variant = "editorial",
  width,
  height,
}: BrandVisualProps) {
  if (variant === "hero" && width && height) {
    return (
      <div
        className={`relative flex w-full items-center justify-center ${imageFrame} ${imageShadow} ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          quality={90}
          sizes={sizes}
          className="mx-auto h-auto w-full max-h-[min(56vh,520px)] object-contain object-center sm:max-h-[min(60vh,600px)] lg:max-h-[850px]"
        />
        <div className={imageInsetRing} aria-hidden />
      </div>
    );
  }

  return (
    <div className={`relative ${imageFrame} ${imageShadow} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={
          variant === "product"
            ? "object-contain object-center p-3 sm:p-5"
            : "object-cover object-center"
        }
        sizes={sizes}
        priority={priority}
        quality={variant === "product" ? 90 : undefined}
      />
      {variant === "editorial" ? (
        <div
          className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-stone-950/20 via-transparent to-transparent"
          aria-hidden
        />
      ) : null}
      <div className={imageInsetRing} aria-hidden />
    </div>
  );
}
