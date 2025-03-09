"use client";
import { Product } from "@/types/types";
import Image from "next/image";
import { useState } from "react";
import proimg from "../../../public/images/Products iamge/product-13 1 (1).png";
import Checkouts from "../checkout/Checkouts";
import SocialShare from "../SocialShare";
import AddToCart from "./AddToCart";
import MultipleImage from "./MultipleImage";
import SingleProductDetgails from "./SingleProductDetgails";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/products/cartSlice";
import { useAddToCartMutation } from "@/features/products/productApi";
import Cookies from "js-cookie";
import { api_key, generateToken } from "@/utils/helper";

function Details(product: Product) {
  const { images, proImage } = product || {};
  const [addToCartApi] = useAddToCartMutation();

  const dispatch = useDispatch();
  const [selectImg, setSelectImg] = useState<string>(proImage);
  const [show, setShow] = useState<boolean>(false);

  const handleCashOnDelivery = async () => {
    setShow(true);
    let tokenNo = "";
    const existingToken = Cookies.get("tokenNo");
    if (existingToken) {
      tokenNo = existingToken;
    } else {
      const newToken = generateToken();
      Cookies.set("tokenNo", newToken, { expires: 7 });
      tokenNo = newToken;
    }

    try {
      let obj: any = {};
      obj.tokenNo = tokenNo;
      obj.api_key = api_key;
      obj.productId = product.Id;
      obj.qty = 1;
      obj.price = product.salesPrice;
      obj.discRate = "0";
      obj.isAdd = "False";
      obj.isLess = "False";
      const res: any = await addToCartApi(obj);
      if (res?.data?.statusCode === "1010") {
        setShow(true);
        dispatch(addToCart(product));
      }
      console.log("res", res);
    } catch (error) {
      console.log("", error);
    }
  };

  return (
    <div className="block sm:grid grid-cols-12 gap-12">
      <div className="col-span-5">
        <Image
          src={selectImg || proimg}
          alt="product"
          width={200}
          height={200}
          className="w-full rounded-xl transition-all duration-500 ease-in-out transform hover:scale-105"
        />
        {images && images?.length > 0 && (
          <div className=" col-span-2 mt-6">
            <div className=" flex items-center">
              {images?.length > 0 && (
                <MultipleImage
                  images={images}
                  setSelectImg={setSelectImg}
                  selectImg={selectImg}
                />
              )}
            </div>
          </div>
        )}
      </div>

      <div className="col-span-7">
        <SingleProductDetgails {...product} />
        <div className="flex flex-col-reverse items-start justify-start xl:flex-row lg:justify-between mt-4 gap-10">
          <div className="flex gap-4 items-center ">
            <h5 className=" text-[#121212] font-medium  text-xl mr-2 ">
              shere
            </h5>
            <SocialShare hover={true} />
          </div>
          <div className=" flex gap-3">
            {product && (
              <div className="">
                <AddToCart product={product} />
              </div>
            )}
            <button
              onClick={handleCashOnDelivery}
              disabled={product?.stockAvailable == false}
              className={`${
                product?.stockAvailable == false
                  ? "opacity-50 cursor-not-allowed  px-4 py-2 border text-sm font-medium rounded-md   bg-gray-300   "
                  : "block px-4 py-2 border hover:bg-textColor  hover:text-white transition-all border-[#000] text-[#000] text-sm font-medium rounded-md "
              }`}
            >
              Cash on Delivery
            </button>
          </div>
        </div>
      </div>
      {show && <Checkouts setShow={setShow} setOpenCheckout={setShow} />}
    </div>
  );
}

export default Details;
