import { Product } from "@/types/types";
import { fetchProducts } from "@/utils/apiServices";
import Link from "next/link";
import ProductCard from "./product/ProductCard";
import SectionTitle from "./SectionTitle";
import Button from "./ui/Button";

const AllProducts = async () => {
  const products = await fetchProducts();
  const data: Product[] = products.slice(0, 10);

  return (
    <section className="section-gap">
      <SectionTitle
        title="ALL PRODUCTS"
        shortDesc="Discover all exciting products"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full">
        {data &&
          data?.map((item) => <ProductCard key={item.Id} product={item} />)}
      </div>
      <div className=" mt-14 flex justify-center">
        <Link href="/products">
          <Button isIcon={true} title="More Products" />
        </Link>
      </div>
    </section>
  );
};

export default AllProducts;
