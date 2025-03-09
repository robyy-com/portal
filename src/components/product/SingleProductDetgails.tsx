import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaStar } from "react-icons/fa";
import robyy from "../../../public/images/ROBYYLogo.png";
import WishlistButton from "../wishlist/WishlistButton";
function SingleProductDetgails(product: Product) {
  const {
    sku,
    title,
    description,
    salesPrice,
    brand,
    discountRate,
    stockAvailable,
    previousPrice,
    country,
    category,
  } = product || {};

  return (
    <div>
      <p className=" space-x-2 text-gray-800 font-regular text-secondarytext text-[18px] uppercase">
        sku {sku}
      </p>
      <h2 className="xl:text-[26px] text-regular font-semibold mt-2 capitalize  mb-4">
        {title}
      </h2>
      <div className=" lg:flex lg:justify-between mb-4 items-center">
        <div className="flex items-center gap-4 ">
          <p className=" text-regular font-bold text-primaryColor">5.0</p>
          <div className="flex items-center gap-1 text-sm text-[18px]  text-primaryColor">
            {[...Array(5)].map((_, i) => (
              <span key={i}>
                <FaStar />
              </span>
            ))}
            <p className=" text-thirdtextColor text-regular">(220)</p>
          </div>
          <div className=" h-[30px] border-[1px]  border-thirdtextColor"></div>
          <div className=" flex gap-1 items-center">
            <p className="font-bold text-2xl ">
              <svg
                width="21"
                height="15"
                viewBox="0 0 21 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.13253 14.7054L0.307525 8.16802C-0.102508 7.77527 -0.102508 7.13846 0.307525 6.74567L1.79242 5.32332C2.20245 4.93053 2.86731 4.93053 3.27735 5.32332L7.875 9.72717L17.7227 0.294565C18.1327 -0.0981884 18.7976 -0.0981884 19.2076 0.294565L20.6925 1.71692C21.1025 2.10967 21.1025 2.74648 20.6925 3.13927L8.61746 14.7054C8.20739 15.0982 7.54256 15.0982 7.13253 14.7054V14.7054Z"
                  fill="#BABABA"
                />
              </svg>
            </p>
            <p className=" text-regular text-primaryColor font-bold">
              4,320 <span className=" text-[#121212] font-normal">Sold</span>
            </p>
          </div>
        </div>

        {/* <button className=" cursor-pointer mt-4 lg:mt-0 font-bold text-base lg:text-regular flex gap-3 items-center" onClick={handleWishList}>
          <FaHeart size={20} color="#bababa" /> Add to wishlist
        </button> */}

        <Link href="/wishlist">
          <WishlistButton product={product} label="Add to wishlist" />
        </Link>
      </div>
      <div className=" flex justify-between items-center py-4 xl:py-8 border-b-2 border-[#EAEAEA]">
        <div className="flex items-baseline mb-1 space-x-2 font-roboto ">
          <p className="xl:text-4xl text-regular lg:text-xl text-primary font-semibold">
            TK {salesPrice}
          </p>
          <p className=" text-base lg:text-xl text-secondaryColor line-through">
            TK {previousPrice}
          </p>
          <p className=" px-2 py-[2px] text-sm rounded-md font-semibold bg-textColor text-white ">
            {discountRate}%
          </p>
        </div>
        <div className=" text-center">
          <Image className="m-auto" width={100} src={robyy} alt="robyy logo" />
          <p className=" mt-2 w-full capitalize text-base text-secondaryColor">
            official store
          </p>
        </div>
      </div>

      <div className="space-y-2 mt-8 mb-11 ">
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          className=" text-primaryColor text-regular font-semibold space-x-2 mb-5  font-titleFont "
          style={{ fontFamily: "roboto, sans-serif" }}
        ></p>
        <div className="flex items-center gap-x-4 justify-start">
          <p className="text-primaryColor text-xl mb-2 font-semibold w-24">
            Country
          </p>
          <p className="text-primaryColor text-xl mb-2 font-semibold">
            : {country || "Bangladesh"}
          </p>
        </div>

        <div className="flex items-center gap-x-4 justify-start">
          <p className="text-primaryColor text-xl mb-2 font-semibold w-24">
            Category
          </p>
          <Link
            className=" font-semibold hover:underline transition-all text-xl cursor-pointer"
            href={`/category/${category}`}
          >
            : {category}
          </Link>
        </div>
        <div className="flex items-center gap-x-4 justify-start">
          <p className="text-primaryColor text-xl mb-2 font-semibold w-24">
            Stock
          </p>
          <p className="text-primaryColor text-xl mb-2 font-semibold">
            : {stockAvailable ? "Available" : "Out of Stock"}
          </p>
        </div>

        <div className="flex items-center gap-x-4 justify-start">
          <p className="text-primaryColor text-xl mb-2 font-semibold w-24">
            Brand
          </p>
          <Link
            className=" font-semibold hover:underline transition-all text-xl cursor-pointer"
            href={`/brand/${brand}`}
          >
            : {brand}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleProductDetgails;
