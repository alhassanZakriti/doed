import Image from "next/image";
import type { ReactNode } from "react";

const directions = {
  "top-right": "rounded-[1.25rem] rounded-tr-[min(46%,11rem)]",
  "top-left": "rounded-[1.25rem] rounded-tl-[min(46%,11rem)] rounded-br-[1.25rem]",
  "bottom-right": "rounded-[1.25rem] rounded-br-[min(46%,11rem)] rounded-tl-[1.25rem]",
  "bottom-left": "rounded-[1.25rem] rounded-bl-[min(46%,11rem)] rounded-tr-[1.25rem]",
  top: "rounded-[1.25rem] rounded-t-[min(46%,11rem)]",
  bottom: "rounded-[1.25rem] rounded-b-[min(46%,11rem)]",
} as const;

const mdDirections = {
  "top-right":
    "md:rounded-[1.25rem] md:rounded-tl-[1.25rem] md:rounded-tr-[min(46%,11rem)] md:rounded-bl-[1.25rem] md:rounded-br-[1.25rem]",
  "top-left":
    "md:rounded-[1.25rem] md:rounded-tl-[min(46%,11rem)] md:rounded-tr-[1.25rem] md:rounded-bl-[1.25rem] md:rounded-br-[1.25rem]",
  "bottom-right":
    "md:rounded-[1.25rem] md:rounded-tl-[1.25rem] md:rounded-tr-[1.25rem] md:rounded-bl-[1.25rem] md:rounded-br-[min(46%,11rem)]",
  "bottom-left":
    "md:rounded-[1.25rem] md:rounded-tl-[1.25rem] md:rounded-tr-[1.25rem] md:rounded-bl-[min(46%,11rem)] md:rounded-br-[1.25rem]",
  top: "md:rounded-[1.25rem] md:rounded-t-[min(46%,11rem)] md:rounded-b-[1.25rem]",
  bottom: "md:rounded-[1.25rem] md:rounded-b-[min(46%,11rem)] md:rounded-t-[1.25rem]",
} as const;

export type ImageBlobDirection = keyof typeof directions;

export function ImageBlob({
  direction,
  mdDirection,
  className = "",
  children,
  src,
  alt = "",
  priority = false,
  sizes = "(min-width: 768px) 50vw, 100vw",
}: {
  direction: ImageBlobDirection;
  mdDirection?: ImageBlobDirection;
  className?: string;
  children?: ReactNode;
  src?: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden border-[3px] border-border-orange ${directions[direction]} ${mdDirection ? mdDirections[mdDirection] : ""} ${className}`}
    >
      {src ? <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} priority={priority} /> : null}
      {children}
    </div>
  );
}
