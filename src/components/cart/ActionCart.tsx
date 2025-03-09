"use client";

import {
  decreaseQuantity,
  deleteCart,
  increaseQuantity,
} from "@/features/products/cartSlice";
import {
  useAddToCartMutation,
  useDeleteCartMutation,
} from "@/features/products/productApi";
import { api_key, getTokenNo } from "@/utils/helper";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";

interface ActionCartProps {
  quantity: number;
  item: any;
}

function ActionCart({ quantity, item }: ActionCartProps) {
  const [count, setCount] = useState<number>(quantity);
  const dispatch = useDispatch();
  const [addToCart] = useAddToCartMutation();
  const [deleteCarts] = useDeleteCartMutation();

  const handleIncreaseQty = async (count: number) => {
    let obj: any = {};
    obj.tokenNo = getTokenNo();
    obj.api_key = api_key;
    obj.productId = item.Id;
    obj.qty = 1;
    obj.price = item.salesPrice;
    obj.discRate = "0";
    obj.isAdd = "True";
    obj.isLess = "False";
    const res: any = await addToCart(obj);
    if (res?.data?.statusCode === "1010") {
      dispatch(increaseQuantity(item));
      setCount(count + 1);
    }
  };

  const handleDecreaseQty = async (count: number) => {
    if (count > 1) {
      let obj: any = {};
      obj.tokenNo = getTokenNo();
      obj.api_key = api_key;
      obj.productId = item.Id;
      obj.qty = 1;
      obj.price = item.salesPrice;
      obj.discRate = "0";
      obj.isAdd = "False";
      obj.isLess = "True";
      const res: any = await addToCart(obj);
      if (res?.data?.statusCode === "1010") {
        setCount(count - 1);
        dispatch(decreaseQuantity(item));
      }
    }
  };

  const handleDeleteCart = async () => {
    let obj: any = {};
    obj.tokenNo = getTokenNo();
    obj.api_key = api_key;
    obj.productId = item.Id;
    const res: any = await deleteCarts(obj);
    if (res?.data?.statusCode === "1012") {
      dispatch(deleteCart(item));
    }
  };

  return (
    <div>
      <div className=" text-right ">
        {/* <p className="text-[#4D4D4D] text-base  sm:block font-normal mb-8">
          SKU 12314124124
        </p> */}
        <div className="flex gap-3">
          <div className="flex border rounded-lg border-secondarytext text-gray-600 w-max">
            <div
              onClick={() => handleDecreaseQty(count)}
              className="w-8 text-2xl text-secondarytext flex items-center justify-center cursor-pointer select-none"
            >
              -
            </div>
            <div className="w-8 text-base flex items-center justify-center">
              {count}
            </div>
            <div
              onClick={() => handleIncreaseQty(count)}
              className="w-8 text-2xl text-secondarytext flex items-center justify-center cursor-pointer select-none"
            >
              +
            </div>
          </div>
          <button className=" rounded-xl hover:bg-textColor hover:text-white transition-all px-2 py-1 border border-secondarytext">
            <MdDelete size={18} onClick={() => handleDeleteCart()} />
          </button>
          {/* <button className=" rounded-xl hover:bg-textColor hover:text-white transition-all px-2 py-1 border border-secondarytext">
            <FaHeart size={18} />
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default ActionCart;
