import { Product } from "@/types/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Cart = {
  items: Product[];
  totalQuantities: number;
  totalPrice: number;
  discount: number;
  shipRate: number;
};

interface CartsState {
  cart: Cart;
}

const initialState: CartsState = {
  cart: {
    items: [],
    totalQuantities: 0,
    totalPrice: 0,
    discount: 0,
    shipRate: 0,
  },
};

export const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      if (!state.cart) {
        state.cart = {
          items: [],
          totalQuantities: 0,
          totalPrice: 0,
          discount: 0,
          shipRate: 0,
        };
      }
      if (!state.cart.items) {
        state.cart.items = [];
      }

      // Check if the product already exists in the cart
      const existingProduct = state.cart.items.find(
        (item) => item.Id === action.payload.Id
      );

      if (existingProduct) {
        // Increase quantity if the product already exists
        existingProduct.quantity! += 1;
        state.cart.totalPrice =
          state.cart.totalPrice + existingProduct.salesPrice;
      } else {
        // Add new product to cart with initial quantity set to 1
        const newProduct = {
          ...action.payload,
          quantity: 1,
        };
        state.cart.items.push(newProduct);

        state.cart.totalPrice =
          state.cart.totalPrice + action.payload.salesPrice;
      }

      state.cart.totalQuantities += 1;
    },
    increaseQuantity: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.cart.items.find(
        (item) => item.Id === action.payload.Id
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
        state.cart.totalQuantities += 1;
        state.cart.totalPrice =
          state.cart.totalPrice + existingProduct.salesPrice;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.cart.items.find(
        (item) => item.Id === action.payload.Id
      );
      if (existingProduct) {
        existingProduct.quantity! -= 1;
        state.cart.totalQuantities -= 1;
        state.cart.totalPrice =
          state.cart.totalPrice - existingProduct.salesPrice;
      }
    },
    discountAmount: (state, action: PayloadAction<number>) => {
      // state.cart.totalPrice -= action.payload;
      state.cart.discount = action.payload;
    },

    addShipRate: (state, action: PayloadAction<number>) => {
      state.cart.shipRate = action.payload;
    },

    deleteCart: (state, action: PayloadAction<Product>) => {
      const existingProduct = state.cart.items.find(
        (item) => item.Id === action.payload.Id
      );
      if (existingProduct) {
        existingProduct.quantity;
        state.cart.totalQuantities =
          state.cart.totalQuantities - existingProduct.quantity;
        state.cart.totalPrice =
          state.cart.totalPrice -
          existingProduct.salesPrice * existingProduct.quantity;

        state.cart.items = state.cart.items.filter((item: any) => {
          return item.Id !== action.payload.Id;
        });
      }
    },

    deleteAll: (state) => {
      if (state.cart.items) {
        state.cart.items = [];
        state.cart.totalQuantities = 0;
        state.cart.totalPrice = 0;
        state.cart.discount = 0;
        state.cart.shipRate = 0;
      }
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteCart,
  discountAmount,
  addShipRate,
  deleteAll,
} = cartSlice.actions;

export default cartSlice.reducer;
