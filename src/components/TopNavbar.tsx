"use client";
import {
  useAddLoginOtpMutation,
  useAddLoginOtpVerifyMutation,
} from "@/features/auth/authApi";
import { setCurrentUser } from "@/features/auth/authSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BsBasket } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import logo from "../../public/images/ROBYYLogo.png";
import Carts from "./cart/Carts";
import Modal from "./common/Modal";
import Button from "./ui/Button";
import Cookies from "js-cookie";

import { IoMdHeartEmpty } from "react-icons/io";
import Search from "./Search";
import Input from "./ui/Input";
import { api_key } from "@/utils/helper";

const TopNavbar = () => {
  const [show, setShow] = useState<boolean>(false);
  const [openSigninModal, setOpenSigninModal] = useState<boolean>(false);

  const [number, setNumber] = useState<string>("");
  const [numberValidation, setNumberValidation] = useState<string>("");
  const [otpValidation, setOtpValidation] = useState<string>("");

  const [signinWithOtp] = useAddLoginOtpMutation();
  const [signinWithOtpVerify] = useAddLoginOtpVerifyMutation();
  const [formOtp, setFormOtp] = useState<string>("");
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [otpSendLoading, setOtpSendLoading] = useState<boolean>(false);
  const [otpVerifyLoading, setOtpVerifyLoading] = useState<boolean>(false);

  const navigation = useRouter();
  const dispatch = useDispatch();

  const result = useSelector((state: any) => state.carts.cart);
  const { totalQuantities } = result || {};

  const mobileNo = Cookies.get("mobileNo");

  const { items } = useSelector((state: any) => state.wishlist.wish);

  const handleCart = () => {
    setShow(!show);
  };

  const handleSignInModal = () => {
    setOpenSigninModal(!openSigninModal);
    setNumberValidation("");
    setOtpValidation("");
    setNumber("");
    setFormOtp("");
    setIsOtpSent(false);
  };

  const handeMobileNumber = (e: any) => {
    setNumber(e.target.value);
  };

  const handleSendOTP = async () => {
    if (!number) {
      setNumberValidation("Please enter mobile number");
      return;
    }

    setOtpSendLoading(true);
    try {
      const res: any = await signinWithOtp({
        mobileNo: number,
        api_key,
      }).unwrap();
      if (res?.statusCode === "1010") {
        setNumberValidation("");
        setIsOtpSent(true);
        setOtpSendLoading(false);
        toast.success(res?.statusMsg);
      } else {
        toast.error(res?.statusMsg);
        setTimeout(() => {
          setOtpSendLoading(false);
        }, 2000);
      }
    } catch (error: any) {
      toast.error(error.message);
      setTimeout(() => {
        setOtpSendLoading(false);
      }, 2000);
    }
  };

  const handleVerifyOTP = async () => {
    if (!number) {
      setNumberValidation("Please enter mobile number");
      return;
    }
    if (!formOtp) {
      setOtpValidation("Please enter otp");
      return;
    }
    //test
    setOtpVerifyLoading(true);
    try {
      const res: any = await signinWithOtpVerify({
        mobileNo: number,
        otp: formOtp,
      }).unwrap();

      if (res?.statusCode === "1010") {
        setNumberValidation("");
        setOpenSigninModal(false);
        dispatch(
          setCurrentUser({
            mobileNo: number,
          })
        );

        Cookies.set("mobileNo", number, { expires: 7 });

        setOtpVerifyLoading(false);
        setTimeout(() => {
          navigation.push("/account");
        }, 500);

        toast.success(res?.statusMsg);
      } else {
        toast.error(res?.statusMsg);
        setTimeout(() => {
          setOtpVerifyLoading(false);
        }, 2000);
      }
    } catch (error: any) {
      setTimeout(() => {
        setOtpVerifyLoading(false);
      }, 2000);
      toast.error(error.message);
    }
  };

  const handleLogout = () => {
    toast.success("Logout successfully");
    navigation.push("/");
    dispatch(setCurrentUser(null));
    Cookies.remove("mobileNo");
  };
  const handleRoute = () => {
    navigation.push("/account");
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-3  flex items-center ">
          <Link href="/">
            <Image src={logo} alt="Missing Iamg" />
          </Link>
        </div>

        <div className="col-span-9">
          <div className="flex items-center justify-between gap-8">
            <div className="hidden md:block w-full">
              <Search />
            </div>

            <div className="flex items-center gap-8 justify-end w-full">
              <Link href="/wishlist" className="relative">
                <IoMdHeartEmpty className="text-xl lg:text-3xl " />
                <span className="absolute -top-3 -right-3 text-primaryColor font-bold text-md">
                  {(items && items?.length) || 0}
                </span>
              </Link>
              <button onClick={handleCart}>
                <div className="relative">
                  <BsBasket className="text-xl lg:text-2xl " />
                  <span className="absolute -top-3 -right-4 text-primaryColor font-bold text-md">
                    {totalQuantities}
                  </span>
                </div>
              </button>
              <div className="relative group">
                <p
                  onClick={!mobileNo ? handleSignInModal : handleRoute}
                  className="text-base lg:uppercase flex items-center justify-center shadow-lg py-1 px-2 md:py-4 md:px-5 bg-[#343434] text-white rounded-[10px] cursor-pointer"
                >
                  <FaRegUserCircle className="mr-2 text-base md:text-2xl" />
                  {mobileNo ? mobileNo : "Sign In"}
                </p>

                {mobileNo && (
                  <button
                    onClick={handleLogout} // Define a `handleLogout` function to handle logout logic
                    className="absolute top-full mt-2 left-0 font-bold w-full py-2 border  rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 justify-center gap-2 flex items-center hover:bg-primaryColorHover bg-red-500 text-white z-50"
                  >
                    Logout <MdLogout className="ml-1 h-6 w-6" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {show && <Carts show={show} setShow={setShow} />}
      {openSigninModal && (
        <Modal
          isOpen={openSigninModal}
          onClose={handleSignInModal}
          title="Sign In"
          className="w-full md:w-2/3 lg:w-2/3 xl:w-1/3"
        >
          <Input
            placeholder="Enter mobile number"
            name="mobileNo"
            label="Mobile Number"
            value={number}
            type="number"
            disabled={isOtpSent}
            onChange={handeMobileNumber}
            isRequired={true}
            errorMessage={numberValidation}
          />
          {isOtpSent && (
            <div className="mt-3">
              <Input
                placeholder="Enter OTP"
                name="otp"
                label="OTP"
                type="number"
                value={formOtp}
                onChange={(e) => setFormOtp(e.target.value)}
                isRequired={true}
                errorMessage={otpValidation}
              />
            </div>
          )}
          <div className="flex items-center justify-center mt-10 gap-4">
            {isOtpSent ? (
              <Button
                title="Verify OTP"
                type="button"
                loading={otpVerifyLoading}
                disabled={otpVerifyLoading}
                onClick={handleVerifyOTP}
              />
            ) : (
              <Button
                title="Sign In With OTP"
                type="button"
                onClick={handleSendOTP}
                loading={otpSendLoading}
                disabled={otpSendLoading}
              />
            )}
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-3 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              onClick={handleSignInModal}
            >
              Close
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default TopNavbar;
