"use client";
import { addShipRate, discountAmount } from "@/features/products/cartSlice";
import {
  useGetShiprateQuery,
  useGetUserInfoMutation,
  useValidateCouponMutation,
} from "@/features/products/productApi";
import { api_key, getTokenNo } from "@/utils/helper";
import { useEffect, useRef, useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";

interface props {
  setNumber: (value: string) => void;
  setFullName: (value: string) => void;
  setAddress: (value: string) => void;
  setSelectedMethod: (value: string) => void;
  selectedMethod: string;
  couponNo: string;
  setCouponNo: (value: string) => void;
  setDiscountAmt: (value: string) => void;
  setNote: (value: string) => void;
  number: string;
  discountAmt: string;
  fullName: string;
  address: string;
  note: string;
}
function CheckoutForm({
  setNumber,
  setFullName,
  setAddress,
  setNote,
  setSelectedMethod,
  selectedMethod,
  couponNo,
  setCouponNo,
  setDiscountAmt,
  discountAmt,
  number,
  note,
  fullName,
  address,
}: props) {
  const { data: shipRates } = useGetShiprateQuery({});
  const [getUserInfo] = useGetUserInfoMutation();
  const [couponValidate] = useValidateCouponMutation();
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dispatch = useDispatch();
  const [couponMsg, setCouponMsg] = useState<string>("");

  const handleNumber = async (value: string) => {
    if (value.length === 11) {
      const res: any = await getUserInfo({ mobileNo: value });
      if (res?.data?.length > 0) {
        setFullName(res?.data[0]?.partyName);
        setAddress(res?.data[0]?.address);
      }
      console.log("res", res);
    }
  };

  const handleNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numeric input
    if (/^\d*$/.test(value)) {
      setNumber(value);

      // Clear the timeout if it's already set
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }

      // Set a new timeout for when typing stops (e.g., 1000ms delay)
      typingTimeoutRef.current = setTimeout(() => {
        handleNumber(value);
      }, 1000);
    }
  };

  useEffect(() => {
    if (!shipRates) return;
    const amt = shipRates[0]?.shipRate;
    setSelectedMethod(amt);
    dispatch(addShipRate(Number(amt)));
  }, [shipRates]);

  const validateCoupon = async (e: any) => {
    e.preventDefault();
    if (couponNo) {
      let obj: any = {};
      obj.api_key = api_key;
      obj.tokenNo = getTokenNo();
      obj.couponNo = couponNo;
      obj.shippingCharge = selectedMethod;

      const res: any = await couponValidate(obj);
      if (res?.data?.length > 0) {
        const discount = res?.data[0]?.discountAmt;
        setDiscountAmt(discount);

        if (discount > 0) {
          const msg = `Coupon has been applied(${discount} Tk Discount)`;
          setCouponMsg(msg);
          dispatch(discountAmount(discount));
        } else {
          setCouponMsg("Invalid Coupon");
        }
      }
    }
  };
  const handleShippingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod(event.target.value);
    dispatch(addShipRate(Number(event.target.value)));
  };

  return (
    <div>
      <div className="mb-4">
        <label
          className="block text-regular text-textColor font-normal mb-2"
          htmlFor="phoneNumber"
        >
          Mobile Number <span className="text-red-500">*</span>
        </label>
        <input
          id="phoneNumber"
          type="text"
          value={number}
          onChange={handleNumberChange}
          className="w-full p-2 border  rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block  text-regular text-textColor font-normal mb-2"
          htmlFor="fullName"
        >
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full p-2 border  rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-regular text-textColor font-normal mb-2"
          htmlFor="address"
        >
          Address <span className="text-red-500">*</span>
        </label>
        <input
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border  rounded-md"
          required
        />
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="note"
          >
            Note
          </label>
          <textarea
            id="note"
            className="w-full p-2 border border-gray-300 rounded-md"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="mb-4  ">
        <div className=" text-xl font-semibold text-textColor mb-2">
          Shipping Method
        </div>
        <div className="flex border border-borderColor rounded-2xl  flex-col space-y-2">
          {shipRates &&
            shipRates.length > 0 &&
            shipRates.map((item: any, index: number) => {
              return (
                <label
                  key={index}
                  className="flex items-center px-3 py-3 border-b "
                >
                  <input
                    type="radio"
                    name="shippingMethod"
                    className="form-radio"
                    onChange={handleShippingChange}
                    value={item.shipRate}
                    defaultChecked={index === 0}
                  />
                  <span className="ml-2">{item.shipDesc}</span>
                  <span className="ml-auto">TK {item.shipRate}</span>
                </label>
              );
            })}
        </div>
      </div>
      <div className="my-6">
        <div className=" flex items-center">
          <input
            type="text"
            placeholder="Coupon Code"
            value={couponNo}
            onChange={(e) => setCouponNo(e.target.value)}
            className="w-[50%] p-2 border border-gray-300 rounded-md"
          />
          <button
            className="ml-2 p-2 bg-black text-white rounded-md"
            onClick={validateCoupon}
          >
            APPLY NOW
          </button>
        </div>
        {couponMsg && <p className="m-0 p-0 text-green-500">{couponMsg}</p>}
      </div>
    </div>
  );
}

export default CheckoutForm;
