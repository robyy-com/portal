"use client";
import React, { useState } from "react";

export default function ScreenSize() {
  const sizes = ["14-Inch", "24-Inch", "32-Inch", "60-Inch"];

  const [selectedSize, setSelectedSize] = useState<string>(sizes[0]);
  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="grid grid-cols-9 items-center mb-14">
      <div className=" col-span-3 ">
        <h4 className=" text-xl text-primaryColor font-bold capitalize">
          Screen Size
        </h4>
      </div>
      <div className="col-span-6 flex justify-between items-center">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => handleSizeClick(size)}
            className={`${
              selectedSize === size
                ? "bg-textColor text-white"
                : "border-secondarytext text-textColor"
            } hover:text-white hover:bg-textColor hover:-translate-y-1 hover:scale-110 duration-300 transition ease-in-out delay-150 rounded-lg text-base font-bold py-3 px-6 border`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
