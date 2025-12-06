import ProductCard from "@/components/product/ProductCard";
import { Product } from "@/types/types";
import React from "react";

interface Props {
  products: Product[];
}
export default function FilteredProduct({ products }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 w-full">
      {products &&
        products?.length > 0 &&
        products?.map((item: any) => (
          <ProductCard key={item?.Id} product={item} />
        ))}
    </div>
  );
}
