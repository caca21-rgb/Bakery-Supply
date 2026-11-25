"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";

type SafeImageProps = Omit<ImageProps, "src" | "width" | "height" | "fill"> & {
  src: string;
  width?: number;
  height?: number;
};

/** Image with a local fallback so broken remote URLs never leave an empty block. */
export function SafeImage({ src, width = 1200, height = 800, alt, onError, ...props }: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  useEffect(() => { setCurrentSrc(src); }, [src]);
  return (
    <Image
      {...props}
      src={currentSrc}
      alt={alt}
      width={width}
      height={height}
      unoptimized
      onError={(event) => {
        onError?.(event);
        if (currentSrc !== "/images/product-placeholder.svg") {
          setCurrentSrc("/images/product-placeholder.svg");
        }
      }}
    />
  );
}
