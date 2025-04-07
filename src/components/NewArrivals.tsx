import { fetchNewArrivalProducts } from "@/utils/apiServices";
import Link from "next/link";
import ProductCard from "./product/ProductCard";
import SectionTitle from "./SectionTitle";
import Button from "./ui/Button";
const NewArrivals = async () => {
  const newProducts = await fetchNewArrivalProducts();

  return (
    <div className="section-gap container mx-auto">
      <SectionTitle
        title="New Arrivals"
        shortDesc="Discover all exciting products"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full">
        {newProducts &&
          newProducts?.length > 0 &&
          newProducts
            .slice(0, 10)
            .map((product: any) => (
              <ProductCard key={product?.Id} product={product} />
            ))}
      </div>
      <div className=" mt-14 flex justify-center">
        <Link href="/products">
          <Button isIcon={true} title="More Products" />
        </Link>
      </div>
    </div>
  );
};

export default NewArrivals;
