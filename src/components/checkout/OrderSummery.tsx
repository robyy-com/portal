"use client";
import Image from "next/image";
import { useSelector } from "react-redux";

interface props {
  discountAmt: string;
  isOtpSent?: boolean;
  number?: string;
  setFormOtp?: (value: string) => void;
  formOtp?: string;
}

function OrderSummery({
  discountAmt,
  isOtpSent,
  number,
  setFormOtp,
  formOtp,
}: props) {
  const result = useSelector((state: any) => state.carts.cart);
  const { totalPrice, items, discount, shipRate } = result || {};

  return (
    <div>
      <h2 className="text-xl font-semibold text-textColor mb-6">My Orders</h2>
      <div className="mb-5 ">
        <div className="h-56 lg:h-64 overflow-y-auto px-2">
          {items &&
            items?.length > 0 &&
            items.map((item: any, index: number) => (
              <div className="border-b mt-2" key={index}>
                <div className="flex justify-between items-center mb-2">
                  <div className=" flex gap-2 items-center">
                    <div className="relative">
                      <Image
                        src="/images/Products iamge/product-13 1 (1).png"
                        alt="order"
                        width={50}
                        height={50}
                      />
                      <span className=" absolute  -top-2 -right-4 inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs  text-gray-600 ring-1 ring-inset ring-gray-500/10 font-bold">
                        {item.quantity}
                      </span>
                    </div>
                    <h4 className="text-regular text-secondaryColor font-medium truncate max-w-[250px] md:max-w-[400px]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="font-medium text-secondaryColor text-regular">
                    TK {item.salesPrice * item.quantity}
                  </p>
                </div>
              </div>
            ))}
        </div>

        <div className=" pt-8 border-b border-borderColor">
          <div className="flex justify-between mb-2">
            <h4 className="text-regular text-secondaryColor font-medium">
              Subtotal
            </h4>
            <p className="font-semibold text-secondaryColor text-regular">
              TK {totalPrice}
            </p>
          </div>
          <div className="flex justify-between mb-2">
            <h4 className="text-regular text-secondaryColor font-medium">
              Shipping
            </h4>
            <p className="font-semibold text-secondaryColor text-regular">
              TK {shipRate}
            </p>
          </div>
          <div className="flex justify-between pb-6 border-b border-borderColor ">
            <h4 className="text-regular text-secondaryColor font-medium">
              Coupon Discount
            </h4>
            <p className="font-medium text-secondaryColor text-regular">
              - TK {discount}
            </p>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <h4 className="text-xl font-semibold text-textColor">
              Order Total
            </h4>
            <p className="font-bold text-secondaryColor text-normal">
              TK {totalPrice - discount + shipRate}
            </p>
          </div>
        </div>
      </div>
      <div className="mb-4">
        {isOtpSent ? (
          <div>
            <p className="m-0 p-0 text-green-500">
              OTP has been sent to {number}{" "}
            </p>

            <div className="mb-4">
              <label
                className="block  text-regular text-textColor font-normal mb-2"
                htmlFor="otp"
              >
                Enter OTP <span className="text-red-500">*</span>
              </label>
              <input
                id="otp"
                type="text"
                value={formOtp}
                onChange={(e) => setFormOtp?.(e.target.value)}
                className="w-full p-2 border  rounded-md"
                required
              />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default OrderSummery;
