import Remove from "@/app/wishlist/Remove";
import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import productImage from "../../../public/images/noImage/product_no_image.jpg";
import WishlistButton from "../wishlist/WishlistButton";
import AddToCart from "./AddToCart";

function ProductCard({
  product,
  remove,
  tokenNo,
}: {
  product?: Product;
  remove?: boolean;
  tokenNo?: any;
}) {
  if (!product) {
    return <div>Product not available</div>; // Handle undefined product
  }

  const {
    title,
    salesPrice,
    proImage,
    stockAvailable,
    discountRate,
    productSlug,
  } = product;

  return (
    <div>
      <div className="flex h-full flex-col justify-between rounded-3xl shadow-xl bg-white">
        <div className="h-[250px] item rounded-t-3xl overflow-hidden w-full relative items-center">
          <Image
            src={proImage || productImage}
            alt="Product"
            layout="fill"
            objectFit="cover"
            className="images overflow-hidden w-full"
          />

          <div
            className={`item-hover hover:z-50 absolute top-[19px] right-[10px] ${
              stockAvailable ? "bg-[#000]" : "bg-red-600"
            } rounded-lg px-4 py-[6px] text-white flex justify-center items-center text-base mr-4 mt-3`}
          >
            {stockAvailable ? "Sale" : "Stock Out"}
          </div>

          <div className="hover:opacity-100 opacity-0 transition-all absolute bg-overlayColor rounded-t-3xl top-0 left-0 w-full h-full">
            <div className="flex justify-between mt-8 items-center">
              <div>
                <p className="product_after bg-textColor leading-8 h-8 px-2 text-white">
                  {discountRate}% Off
                </p>
              </div>
            </div>

            <div className="absolute top-[65%] flex gap-3 w-full justify-center">
              <Link href="/wishlist">
                <WishlistButton product={product} />
              </Link>
              <Link
                href={`/product/${productSlug}`}
                className="p-2 text-center leading-10 hover:bg-textColor transition-all hover:text-white bg-white rounded-[50%]"
              >
                <IoEyeSharp size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="px-5 py-6">
          <Link
            href={`/product/${productSlug}`}
            className="font-medium text-textColor line-clamp-2"
          >
            <h4 className="text-[20px] font-bold">{title}</h4>
          </Link>
          <div className="flex justify-between items-center my-5">
            <p className="textColor text-xl font-semibold line-clamp-1 text-center">
              TK {salesPrice}
            </p>
            <div className="flex gap-1">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>

          <AddToCart product={product} />
          {remove && <Remove tokenNo={tokenNo} prodcut={product} />}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
