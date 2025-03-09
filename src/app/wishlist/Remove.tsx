"use client";

import { useDeleteWishlistProductMutation } from "@/features/products/productApi";
import { deleteWishlistProduct } from "@/features/products/wishlistSlice";
import { Product } from "@/types/types";
import { api_key, generateToken } from "@/utils/helper";
import Cookies from "js-cookie";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

function Remove({ prodcut, tokenNo }: { prodcut: Product; tokenNo: any }) {
  const [isRemoving, setIsRemoving] = useState(false);
  const [deleteWishlistProductApi] = useDeleteWishlistProductMutation();
  const dispatch = useDispatch();
  const handleRemove = async () => {
    let tokenNo = Cookies.get("wishlisttokenNo") || "";
    if (!tokenNo) {
      tokenNo = generateToken();
      Cookies.set("wishlisttokenNo", tokenNo, { expires: 7 });
    }
    setIsRemoving(true);
    const data = {
      api_key: api_key,
      tokenNo: tokenNo,
      productId: prodcut.Id,
    };

    try {
      const response: any = await deleteWishlistProductApi(data);
      if (response?.data?.statusCode === "1012") {
        toast.success(response?.data?.statusMsg, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        dispatch(deleteWishlistProduct(prodcut));
      }
    } catch (error: any) {
      console.error("Error removing product:", error.message);
    } finally {
      setIsRemoving(false);
    }
  };

  return (
    <div>
      <button
        className=" mt-1 cursor-pointer block px-4 py-2 border hover:bg-red-600  hover:text-white transition-all border-red-600  text-red-600 text-sm font-medium rounded-md w-full"
        onClick={handleRemove}
      >
        {isRemoving ? "Removing..." : "Remove"}
      </button>
    </div>
  );
}

export default Remove;
