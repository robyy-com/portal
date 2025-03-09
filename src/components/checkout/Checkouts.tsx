"use client";
import { api_key, clearTokenNo, getTokenNo } from "@/utils/helper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
import Carts from "../cart/Carts";
import CheckoutModal from "../common/CheckoutModal";
import CheckoutForm from "./CheckoutForm";
import OrderSummery from "./OrderSummery";
import { deleteAll } from "@/features/products/cartSlice";
import { setCurrentUser } from "@/features/auth/authSlice";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";
import { useCheckoutMutation } from "@/features/auth/authApi";
interface props {
  setShow: (isShow: boolean) => void;
  setOpenCheckout: (isShow: boolean) => void;
}
function Checkouts({ setShow, setOpenCheckout }: props) {
  const [addCheckout] = useCheckoutMutation();
  const [number, setNumber] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [couponNo, setCouponNo] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [discountAmt, setDiscountAmt] = useState<string>("");
  const [note, setNote] = useState<string>("");
  const [formOtp, setFormOtp] = useState<string>("");
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [orderNo, setOrderNo] = useState<number>();

  const [cartsShow, setCartsShow] = useState<boolean>(false);
  const [otpSendLoading, setOtpSendLoading] = useState<boolean>(false);
  const [otpVerifyLoading, setOtpVerifyLoading] = useState<boolean>(false);

  const result = useSelector((state: any) => state.carts.cart);
  const { totalPrice, items, discount, shipRate } = result || {};
  const dispatch = useDispatch();
  const router = useRouter();

  const handleOtpSubmit = async () => {
    if (!fullName || !number || !address) {
      toast.warn("Please enter all required fields");
      return;
    }
    setOtpSendLoading(true);
    let obj: any = {};
    obj.partyName = fullName;
    obj.mobileNo = number;
    obj.couponNo = couponNo;
    obj.address = address;
    obj.orderNote = note;
    obj.api_key = api_key;
    obj.orderChannel = "ECOM";
    obj.tokenNo = getTokenNo();
    obj.subTotal = totalPrice;
    obj.grandTotal = totalPrice + shipRate - discount;
    obj.shippingCharge = selectedMethod;
    obj.paymentMethod = "COD";
    obj.discountAmt = discountAmt ? discountAmt : 0;
    obj.otp = "-";
    obj.otpSubmit = "False";

    const res: any = await addCheckout(obj);
    if (res?.data[0]?.otpSent === true) {
      setIsOtpSent(true);
      setOtpSendLoading(false);
      toast.success("OTP sent successfully");
    } else {
      toast.error(res?.statusMsg);
      setTimeout(() => {
        setOtpSendLoading(false);
      }, 2000);
    }
  };

  const handleCheckout = async () => {
    if (!fullName || !number || !address) {
      toast.warn("Please enter all required fields");
      return;
    }

    try {
      setOtpVerifyLoading(true);

      const obj = {
        partyName: fullName,
        mobileNo: number,
        couponNo: couponNo,
        address: address,
        orderNote: note,
        api_key: api_key,
        orderChannel: "ECOM",
        tokenNo: getTokenNo(),
        subTotal: totalPrice,
        grandTotal: totalPrice + shipRate - discount,
        shippingCharge: selectedMethod,
        paymentMethod: "COD",
        discountAmt: discountAmt || 0,
        otp: formOtp,
        otpSubmit: "True",
      };

      const res: any = await addCheckout(obj);
      const order = res?.data[0]?.orderNo || "";

      if (order) {
        setOrderNo(order);
        clearTokenNo();
        dispatch(deleteAll());
        setCartsShow(false);
        setShow(false);
        setOtpVerifyLoading(false);

        dispatch(
          setCurrentUser({
            partyName: fullName,
            mobileNo: number,
            address: address,
          })
        );

        Cookies.set("mobileNo", number, { expires: 7 });

        setTimeout(() => {
          router.push("/account");
        }, 500);

        toast.success(
          <div>
            <p className="font-bold text-lg">
              Order has been placed successfully!
            </p>
            <p className="font-bold text-lg">
              Your order number is <strong>{order}</strong>
            </p>
          </div>,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
      } else {
        // Fallback message in case `statusMsg` is undefined or empty
        toast.error(
          res?.statusMsg || "Failed to place order. Please try again."
        );
        setTimeout(() => {
          setOtpVerifyLoading(false);
        }, 2000);
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("An error occurred during checkout. Please try again.");
      setTimeout(() => {
        setOtpVerifyLoading(false);
      }, 2000);
    }
  };

  return (
    <>
      <ToastContainer />
      {!orderNo && (
        <CheckoutModal setShow={setOpenCheckout}>
          <div className="container bg-white mx-auto rounded-md  ">
            <div className="block lg:grid grid-cols-2 gap-12 ">
              <CheckoutForm
                setNumber={setNumber}
                setFullName={setFullName}
                setCouponNo={setCouponNo}
                setAddress={setAddress}
                setSelectedMethod={setSelectedMethod}
                number={number}
                fullName={fullName}
                couponNo={couponNo}
                discountAmt={discountAmt}
                address={address}
                selectedMethod={selectedMethod}
                setDiscountAmt={setDiscountAmt}
                setNote={setNote}
                note={note}
              />

              <div className=" border border-borderColor bg-white rounded-md">
                <OrderSummery
                  discountAmt={discountAmt}
                  isOtpSent={isOtpSent}
                  setFormOtp={setFormOtp}
                  formOtp={formOtp}
                  number={number}
                />
                {isOtpSent ? (
                  <Button
                    title="Place Order"
                    onClick={handleCheckout}
                    className="w-full"
                    loading={otpVerifyLoading}
                    disabled={otpVerifyLoading}
                  />
                ) : (
                  <Button
                    title="Checkout"
                    onClick={handleOtpSubmit}
                    className="w-full"
                    loading={otpSendLoading}
                    disabled={otpSendLoading}
                  />
                )}
              </div>
            </div>
          </div>
        </CheckoutModal>
      )}
      {/* <CheckoutModal setShow={setOpenOtpModal}>
        <div className="w-full h-full flex justify-center items-center">
          test
        </div>
      </CheckoutModal> */}
      {cartsShow && <Carts show={cartsShow} setShow={setCartsShow} />}
    </>
  );
}

export default Checkouts;
