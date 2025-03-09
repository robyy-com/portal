import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import img from "../../../public/images/Products iamge/product.png";
import AddToCart from "./AddToCart";

function SecondProductCard({ product }: { product?: Product }) {
  const {
    title,
    description,
    salesPrice,
    proImage,
    brand,
    discountRate,
    productSlug,
    stockAvailable,
    size,
    category,
  } = product || {};

  return (
    <div className="rounded-3xl shadow-xl bg-white">
      <div className="item overflow-hidden w-full relative items-center">
        <Image
          src={proImage || img}
          alt="Missing"
          className="images w-full"
          height={300}
          width={300}
        />

        <div className="item-hover hover:z-50 absolute top-[10px] right-[10px] bg-[#000] w-[60px] h-[60px] text-white flex justify-center items-center rounded-[50%] mr-4 mt-3">
          sale
        </div>

        <div className="hover:opacity-100 opacity-0 transition-all absolute bg-overlayColor rounded-3xl top-0 left-0 w-full h-full">
          <div className="flex justify-between mt-8 items-center">
            <div>
              <p className="product_after bg-textColor leading-8 h-8 px-2 text-white">
                {discountRate} % Off
              </p>
            </div>
          </div>

          <div className="absolute top-[65%] flex gap-3 w-full justify-center">
            {/* <Link
              href="/checkout"
              className="p-3 text-center leading-10 hover:bg-textColor transition-all hover:text-white bg-white rounded-[50%]"
            >
              <BsCart2 size={20} />
            </Link> */}
            <Link
              href="#"
              className="p-3 text-center leading-10 hover:bg-textColor transition-all hover:text-white bg-white rounded-[50%]"
            >
              <IoMdHeartEmpty size={20} />
            </Link>
            <Link
              href={`/product/${productSlug}` || ""}
              className="p-3 text-center leading-10 hover:bg-textColor transition-all hover:text-white bg-white rounded-[50%]"
            >
              <IoEyeSharp size={20} />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center px-5 py-6">
        <p className="pb-3 textColor text-xl font-semibold line-clamp-1 text-center">
          {salesPrice}
        </p>
        <p className="mb-2 text-[#8D8D8D]">
          Tk {salesPrice}
          {/* <del className="text-[#8D8D8D]">Tk 890.00</del> */}
        </p>
        <Link
          href={`/product/${productSlug}` || ""}
          className="text-center  textColor line-clamp-2"
        >
          <h4 className="text-[20px] font-bold">{title}</h4>
        </Link>
        {/* {hotOffer && (
          <div className=" bg-gray-200 rounded-full h-1.5 dark:bg-gray-700 mt-6">
            <div className="bg-[#000] h-1.5 rounded-full w-[45%]"></div>
          </div>
        )} */}

        <p className="pb-6 pt-3 text-[#8D8D8D]">
          Stock {stockAvailable ? "Not Available" : "Available"}
        </p>
        {product && <AddToCart product={product} />}
      </div>
    </div>
  );
}

export default SecondProductCard;
