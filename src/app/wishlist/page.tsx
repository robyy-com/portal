"use client";
import ProductCard from "@/components/product/ProductCard";
import { Product } from "@/types/types";
import { FaArrowRightLong } from "react-icons/fa6";
import { useSelector } from "react-redux";

function WishList() {
  const result = useSelector((state: any) => state.wishlist.wish);
  const { totalPrice, items } = result || {};
  return (
    <div className=" container mx-auto my-16">
      <h2 className=" flex items-center gap-4 xl:mb-12 text-regular md:text-xl lg:text-3xl xl:text-[35px] font-bold">
        YOUR WISHLIST PRODUCTS
        <FaArrowRightLong />
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full">
        {items &&
          items?.map((item: Product) => (
            <ProductCard key={item.Id} remove={true} product={item} />
          ))}
      </div>
    </div>
  );
}

export default WishList;
