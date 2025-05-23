import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AddsType } from "@/types/types";

export default function AddsItem({
  imgSource,
  adsCaption,
  navigateURL,
  altText,
}: AddsType) {
  return (
    <Link href={navigateURL} className="w-full h-32">
      <Image
        src={imgSource}
        alt={altText}
        className="w-full"
        width={1500}
        height={600}
      />
    </Link>
  );
}
