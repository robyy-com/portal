"use client";
import { useAddWishListMutation } from "@/features/products/productApi";
import { addWishlist } from "@/features/products/wishlistSlice";
import { Product } from "@/types/types";
import { api_key, generateToken } from "@/utils/helper";
import Cookies from "js-cookie";
import { IoMdHeartEmpty } from "react-icons/io";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

interface props {
  product: Product;
  label?: string;
}

function WishlistButton({ product, label }: props) {
  const [addWishListApi] = useAddWishListMutation();
  const dispatch = useDispatch();

  const handleWishlist = async () => {
    let tokenNo = Cookies.get("wishlisttokenNo") || "";
    if (!tokenNo) {
      tokenNo = generateToken();
      Cookies.set("wishlisttokenNo", tokenNo, { expires: 7 });
    }

    try {
      const obj = {
        api_key: api_key,
        tokenNo: tokenNo,
        productId: product.Id,
      };

      const res: any = await addWishListApi(obj);

      if (res?.data?.statusCode === "1010") {
        toast.success("Added to wishlist", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        dispatch(addWishlist(product));
      } else {
        toast.warn("Product already in wishlist", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error("API call failed:", error);
    }
  };

  return (
    <div className="flex items-center gap-1 group justify-center">
      <button
        onClick={handleWishlist}
        className="p-2 text-center group-hover:bg-textColor transition-all group-hover:text-white bg-white rounded-[50%]"
      >
        <IoMdHeartEmpty size={20} />
      </button>
      {label && <span className="group-hover:font-bold">{label}</span>}
    </div>
  );
}

export default WishlistButton;
