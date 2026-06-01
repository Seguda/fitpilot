import Image from "next/image";
import {
  imageFrame,
  imageInsetRing,
  overlayEditorial,
  overlayWarm,
} from "./imageStyles";

export interface InterestCardProps {
  label: string;
  src: string;
  alt: string;
  gridClass?: string;
  sizes?: string;
}

export function InterestCard({
  label,
  src,
  alt,
  gridClass = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
}: InterestCardProps) {
  const featured = gridClass.includes("row-span-2");

  return (
    <li className={[gridClass, "list-none"].join(" ")}>
      <article
        className={[
          `group relative isolate h-full min-h-[260px] ${imageFrame} bg-stone-200 ring-stone-200/80 sm:min-h-[300px] lg:min-h-[220px]`,
          "transition-shadow duration-300 hover:shadow-[0_24px_48px_-12px_rgba(28,25,23,0.2)]",
          featured ? "lg:min-h-[100%]" : "",
        ].join(" ")}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
          sizes={featured ? "(max-width: 1280px) 100vw, 50vw" : sizes}
        />
        <div
          className={`${overlayEditorial} transition duration-300 group-hover:from-stone-950/70 ${overlayWarm}`}
          aria-hidden
        />
        <div className={imageInsetRing} aria-hidden />
        <h3 className="absolute bottom-0 left-0 right-0 p-5 text-lg font-semibold tracking-tight text-white sm:p-6 sm:text-xl">
          {label}
        </h3>
      </article>
    </li>
  );
}
