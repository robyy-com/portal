import Image from "next/image";
import React from "react";
import { notFound } from "../../public";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center mt-20">
      <Image src={notFound} alt="not found" />
    </div>
  );
}
