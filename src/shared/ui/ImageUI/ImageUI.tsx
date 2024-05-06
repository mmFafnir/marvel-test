"use client";

import Image from "next/image";
import { FC, ImgHTMLAttributes } from "react";
import imageLoader from "./loader.svg";

interface IProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export const ImageUI: FC<IProps> = ({
  src,
  alt,
  width = 100,
  height = 100,
  className = "",
  ...props
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      placeholder="blur"
      blurDataURL={imageLoader.src}
      {...props}
    />
  );
};
