import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaStar } from "react-icons/fa";
import robyy from "../../../public/images/ROBYYLogo.png";
import WishlistButton from "../wishlist/WishlistButton";
import { BiStar } from "react-icons/bi";
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
    categorySlug,
    brandSlug,
    ratingCount,
    ratingRate,
  } = product || {};

  return (
    <div>
      <h2 className="xl:text-[26px] text-regular font-semibold capitalize  mb-4">
        {title}
      </h2>
      <div className="flex justify-between items-center">
        <div className={`flex items-center ${ratingRate > 0 && "gap-4"}`}>
          <p className=" text-regular font-bold text-primaryColor">
            {ratingRate > 0 && ratingRate}
          </p>
          <div className="flex items-center gap-1 text-sm text-[18px] text-primaryColor">
            {[1, 2, 3, 4, 5].map((star) =>
              ratingRate === 0 || star > ratingRate ? (
                <BiStar key={star} />
              ) : (
                <FaStar key={star} />
              )
            )}

            <p className=" text-thirdtextColor text-regular">({ratingCount})</p>
          </div>
        </div>

        {/* <button className=" cursor-pointer mt-4 lg:mt-0 font-bold text-base lg:text-regular flex gap-3 items-center" onClick={handleWishList}>
          <FaHeart size={20} color="#bababa" /> Add to wishlist
        </button> */}

        <Link href="/wishlist">
          <WishlistButton product={product} label="Add to wishlist" />
        </Link>
      </div>
      <div className=" flex justify-between items-center py-3 border-b-2 border-[#EAEAEA]">
        <div className="flex items-baseline space-x-2 font-roboto ">
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

      <div className="space-y-2 my-6 ">
        <p
          dangerouslySetInnerHTML={{ __html: description }}
          className=" text-primaryColor text-regular font-semibold space-x-2 font-titleFont "
          style={{ fontFamily: "roboto, sans-serif" }}
        ></p>
        <div className="flex items-center gap-x-4 justify-start">
          <p className="text-primaryColor text-xl font-semibold w-24">
            Country
          </p>
          <p className="text-primaryColor text-xl font-semibold">
            : {country || "Bangladesh"}
          </p>
        </div>

        <div className="flex items-center gap-x-4 justify-start">
          <p className="text-primaryColor text-xl font-semibold w-24">
            Category
          </p>
          <Link
            className=" font-semibold hover:underline transition-all text-xl cursor-pointer"
            href={`/category/${categorySlug}`}
          >
            : {category}
          </Link>
        </div>
        <div className="flex items-center gap-x-4 justify-start">
          <p className="text-primaryColor text-xl font-semibold w-24">Stock</p>
          <p className="text-primaryColor text-xl font-semibold">
            : {stockAvailable ? "Available" : "Out of Stock"}
          </p>
        </div>

        <div className="flex items-center gap-x-4 justify-start">
          <p className="text-primaryColor text-xl font-semibold w-24">Brand</p>
          <Link
            className=" font-semibold hover:underline transition-all text-xl cursor-pointer"
            href={`/brand/${brandSlug}`}
          >
            : {brand}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleProductDetgails;
