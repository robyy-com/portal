"use client";
import { useState } from "react";

const PriceRangeSlider = () => {
  const [minPrice, setMinPrice] = useState(1500);
  const [maxPrice, setMaxPrice] = useState(90500);

  const handleMinChange = (event: any) => {
    const value = Math.min(Number(event.target.value), maxPrice - 1);
    setMinPrice(value);
  };

  const handleMaxChange = (event: any) => {
    const value = Math.max(Number(event.target.value), minPrice + 1);
    setMaxPrice(value);
  };

  return (
    <div className=" p-4">
      <div className="text-xl text-sixthtextColor font-semibold mb-4">
        Price range
      </div>
      <div className="relative w-full max-w-xs">
        <div className="relative w-full h-2 bg-gray-300 rounded-lg">
          <div
            className="absolute h-2 bg-black rounded-lg"
            style={{
              left: `${((minPrice - 1500) / (90500 - 1500)) * 100}%`,
              right: `${100 - ((maxPrice - 1500) / (90500 - 1500)) * 100}%`,
            }}
          ></div>
        </div>
        <input
          type="range"
          min="1500"
          max="90500"
          value={minPrice}
          onChange={handleMinChange}
          className="absolute w-full h-2 bg-transparent appearance-none pointer-events-none"
          style={{
            top: "0",
            pointerEvents: "auto",
            zIndex: 1,
          }}
        />
        <input
          type="range"
          min="1500"
          max="90500"
          value={maxPrice}
          onChange={handleMaxChange}
          className="absolute w-full h-2 bg-transparent appearance-none pointer-events-none"
          style={{
            top: "0",
            pointerEvents: "auto",
            zIndex: 1,
          }}
        />
      </div>
      <div className="flex justify-between w-full max-w-xs mt-4">
        <span>TK {minPrice}</span>
        <span>TK {maxPrice}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
