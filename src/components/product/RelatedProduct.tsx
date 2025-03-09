import Link from "next/link";
import ProductCard from "./ProductCard";

function RelatedProduct() {
  return (
    <div className=" px-2.5 lg:px-0">
      <div className=" container mt-[100px] mb-[100px]">
        <div>
          <h2 className=" capitalize text-[30px]  text-textColor font-semibold">
            Related Products
          </h2>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-14 gap-9">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className=" text-center my-20">
          <Link
            href="/products"
            className="  leading-none  text-regular text-white font-bold uppercase px-8 py-5 bg-primaryColor rounded-lg "
          >
            More Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RelatedProduct;
