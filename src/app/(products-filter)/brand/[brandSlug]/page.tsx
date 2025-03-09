import { productsByBrand, productsByCategory } from "@/utils/apiServices";
import FilteredProduct from "../../products/FilteredProduct";
import { Product } from "@/types/types";

const BrandPage = async (params: { params: { brandSlug: string } }) => {
  const { brandSlug } = params.params;
  const products: Product[] = await productsByBrand(brandSlug);
  return <FilteredProduct products={products} />;
};

export default BrandPage;
