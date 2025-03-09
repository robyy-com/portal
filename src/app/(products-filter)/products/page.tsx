import { Product } from "@/types/types";
import { fetchProducts } from "@/utils/apiServices";
import React from "react";
import FilteredProduct from "./FilteredProduct";

export default async function Products() {
  const products: Product[] = await fetchProducts();

  return <FilteredProduct products={products} />;
}
