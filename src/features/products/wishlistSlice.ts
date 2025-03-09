import { Product } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Wishlist = {
  items: Product[];
  totalQuantities: number;
  totalPrice: number;
  discount: number;
  shipRate: number;
};

interface WishlistState {
  wish: Wishlist;
}

const initialState: WishlistState = {
  wish: {
    items: [],
    totalQuantities: 0,
    totalPrice: 0,
    discount: 0,
    shipRate: 0,
  },
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist: (state, action: PayloadAction<Product>) => {
      // Ensure wish structure exists
      if (!state.wish) {
        state.wish = {
          items: [],
          totalQuantities: 0,
          totalPrice: 0,
          discount: 0,
          shipRate: 0,
        };
      }

      // Check if the product already exists in the wishlist
      const existingProduct = state.wish.items.find(
        (item) => item.Id === action.payload.Id
      );

      if (existingProduct) {
        console.log("Already added to wishlist");
      } else {
        // Add new product to the wishlist
        state.wish.items.push(action.payload);
      }
    },
    deleteWishlistProduct: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.wish.items.find(
        (item) => item.Id === action.payload.Id
      );

      if (existingProduct) {
        state.wish.items = state.wish.items.filter((item: any) => {
          return item.Id !== action.payload.Id;
        });
      }
    },
  },
});

export const { addWishlist, deleteWishlistProduct } = wishlistSlice.actions;

export default wishlistSlice.reducer;
