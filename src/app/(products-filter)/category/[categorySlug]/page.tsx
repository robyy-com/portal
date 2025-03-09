import { productsByCategory } from "@/utils/apiServices";
import FilteredProduct from "../../products/FilteredProduct";
import { Product } from "@/types/types";

const CategoryPage = async (params: { params: { categorySlug: string } }) => {
  const { categorySlug } = params.params;
  const products: Product[] = await productsByCategory(categorySlug);
  return <FilteredProduct products={products} />;
};

export default CategoryPage;
