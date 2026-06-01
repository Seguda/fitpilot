import Image from "next/image";
import { HERO_COLLAGE } from "../visuals";
import {
  imageFrame,
  imageInsetRing,
  imageShadow,
  overlayEditorial,
  overlayWarm,
} from "./imageStyles";

const tiles = [
  {
    id: HERO_COLLAGE[0].id,
    src: HERO_COLLAGE[0].src,
    alt: HERO_COLLAGE[0].alt,
    className: `${imageFrame} ${imageShadow} top-0 left-0 z-10 h-[52%] w-[54%] -rotate-1`,
    sizes: "(max-width: 1024px) 45vw, 280px",
    priority: true,
  },
  {
    id: HERO_COLLAGE[1].id,
    src: HERO_COLLAGE[1].src,
    alt: HERO_COLLAGE[1].alt,
    className: `${imageFrame} ${imageShadow} top-[2%] right-0 z-20 h-[44%] w-[50%] rotate-1`,
    sizes: "(max-width: 1024px) 42vw, 260px",
    priority: true,
  },
  {
    id: HERO_COLLAGE[2].id,
    src: HERO_COLLAGE[2].src,
    alt: HERO_COLLAGE[2].alt,
    className: `${imageFrame} ${imageShadow} bottom-[10%] left-[4%] z-30 h-[42%] w-[46%] rotate-[0.5deg]`,
    sizes: "(max-width: 1024px) 40vw, 240px",
    priority: false,
  },
  {
    id: HERO_COLLAGE[3].id,
    src: HERO_COLLAGE[3].src,
    alt: HERO_COLLAGE[3].alt,
    className: `${imageFrame} ${imageShadow} bottom-0 right-[2%] z-40 h-[50%] w-[52%] -rotate-[0.5deg]`,
    sizes: "(max-width: 1024px) 48vw, 270px",
    priority: false,
  },
] as const;

function CollageTile({
  src,
  alt,
  className,
  sizes,
  priority,
}: {
  src: string;
  alt: string;
  className: string;
  sizes: string;
  priority: boolean;
}) {
  return (
    <div className={`absolute overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes}
        priority={priority}
      />
      <div className={`${overlayEditorial} ${overlayWarm}`} aria-hidden />
      <div className={imageInsetRing} aria-hidden />
    </div>
  );
}

export function HeroCollage() {
  return (
    <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:mx-0 lg:max-w-none">
      <div
        className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-emerald-50/90 via-stone-50/40 to-amber-50/30 blur-2xl sm:-inset-8 lg:-inset-10"
        aria-hidden
      />
      <div className="relative aspect-[4/5] w-full sm:aspect-[5/6] lg:aspect-[4/5] lg:min-h-[540px] xl:min-h-[600px]">
        {tiles.map((tile) => (
          <CollageTile key={tile.id} {...tile} />
        ))}
      </div>
    </div>
  );
}
