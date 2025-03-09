"use client";
import { addToCart } from "@/features/products/cartSlice";
import { useAddToCartMutation } from "@/features/products/productApi";
import { Product } from "@/types/types";
import { api_key, generateToken } from "@/utils/helper";
import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Carts from "../cart/Carts";

function AddToCart({ product }: { product: Product }) {
  const [show, setShow] = useState<boolean>(false);
  const [addToCartApi] = useAddToCartMutation();

  const dispatch = useDispatch();

  const handleCart = async () => {
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
    } catch (error) {
      console.log("", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleCart}
        disabled={product?.stockAvailable == false}
        className={`${
          product?.stockAvailable
            ? "block px-4 py-2 border hover:bg-textColor  cursor-pointer hover:text-white transition-all border-[#000] text-[#000] text-sm font-medium rounded-md w-full"
            : "opacity-50 cursor-not-allowed w-full px-4 py-2 border text-sm font-medium rounded-md   bg-gray-300 "
        }`}
      >
        Add to Cart
      </button>

      {show && <Carts show={show} setShow={setShow} />}
    </div>
  );
}

export default AddToCart;
