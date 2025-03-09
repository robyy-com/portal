"use client";
import Image from "next/image";
import CartModal from "../common/CartModal";
import ActionCart from "./ActionCart";

import { fetchCarts } from "@/utils/apiServices";
import { useDispatch, useSelector } from "react-redux";

import { deleteAll } from "@/features/products/cartSlice";
import { useRemoveCartMutation } from "@/features/products/productApi";
import { api_key, getTokenNo } from "@/utils/helper";
import { useState } from "react";
import { toast } from "react-toastify";
import { emptyImg } from "../../../public";
import Checkouts from "../checkout/Checkouts";
import Button from "../ui/Button";

interface props {
  show: boolean;
  setShow: (isShow: boolean) => void;
}
async function getCartsData() {
  // Function to fetch carts data
  let obj: any = {};
  obj.tokenNo = getTokenNo;
  obj.api_key = api_key;
  try {
    const data = await fetchCarts(obj);
    return data; // Assuming fetchCarts returns the carts data
  } catch (error) {
    console.error("Error fetching carts:", error);
    return []; // Return an empty array or handle error as needed
  }
}
function Carts({ setShow, show }: props) {
  // const [items, setItems] = useState<any[]>([]);
  const [openCheckout, setOpenCheckout] = useState<boolean>(false);
  const result = useSelector((state: any) => state.carts.cart);
  const { totalPrice, items } = result || {};
  const [removeCart] = useRemoveCartMutation();

  const dispatch = useDispatch();

  const handleCheckout = () => {
    setOpenCheckout(true);
  };

  const handleRemoveAll = async () => {
    try {
      let obj: any = {};
      obj.tokenNo = getTokenNo();
      obj.api_key = api_key;
      const res: any = await removeCart(obj);

      if (res?.data?.statusCode === "1012") {
        dispatch(deleteAll());
        toast.success("All items removed");
      } else {
        toast.error(res?.statusMsg);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <CartModal setShow={setShow} show={show}>
        <div className="flex justify-end border py-3 rounded-xl  border-borderColor">
          {items.length > 0 && (
            <button
              className=" text-base text-red-500 font-bold"
              onClick={handleRemoveAll}
            >
              Remove All
            </button>
          )}
        </div>
        <div className="relative max-h-screen h-[calc(100vh-280px)] overflow-y-auto">
          {items && items.length > 0 ? (
            items.map((item: any, index: number) => (
              <div
                key={index}
                className="mb-2 px-2 md:px-4 py-3 rounded-xl shadow-md"
              >
                <div className="flex gap-4 items-center">
                  <div className="flex gap-4 items-center">
                    <Image
                      src="/images/Products iamge/productdetails.jpg"
                      alt="product"
                      className=" rounded-lg"
                      width={100}
                      height={150}
                    />
                  </div>
                  <div className="w-full xl:ml-8">
                    <h4 className="text-sm md:text-base text-textColor font-semibold">
                      {item.title}
                    </h4>
                    <p className="text-base text-textColor font-semibold my-1">
                      TK {item.salesPrice}
                    </p>
                    <ActionCart quantity={item.quantity} item={item} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center items-center pt-24">
              <Image src={emptyImg} alt="empty cart" />
            </div>
          )}
        </div>
        <div className="my-3 xl:my-6 absolute bottom-0 right-5 left-5">
          <h4 className="font-bold text-base md:text-regular text-primaryColor mb-2">
            Shopping Summary
          </h4>
          <div className="flex justify-between items-center mb-2">
            <p className="text-regular text-textColor font-medium capitalize">
              total:
            </p>
            <p className="text-xl text-primaryColorHover font-bold">
              TK {totalPrice}
            </p>
          </div>
          {/* <button
            onClick={handleCheckout}
            disabled={totalPrice ? false : true}
            className={`${
              items.length === 0
                ? "cursor-not-allowed w-full rounded-xl text-white bg-gray-300 transition-all uppercase lg:text-regular text-base font-bold p-2 border border-secondarytext"
                : "w-full rounded-xl text-white bg-primaryColor hover:bg-primaryColorHover transition-all uppercase lg:text-regular text-base font-bold p-2 border border-secondarytext"
            }`}
          >
            CASH ON DELIVERY
          </button> */}

          <Button
            title="CASH ON DELIVERY"
            onClick={handleCheckout}
            className="w-full"
            disabled={items.length === 0}
          />

          <div className="mt-3 text-center">
            <button
              type="button"
              className="font-bold text-base text-primaryColor"
              onClick={() => setShow(false)}
            >
              Back to Shopping
            </button>
          </div>
        </div>
      </CartModal>

      {openCheckout ? (
        <Checkouts setShow={setShow} setOpenCheckout={setOpenCheckout} />
      ) : (
        ""
      )}
    </>
  );
}

export default Carts;
