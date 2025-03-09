import { apiSlice } from "../apiSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/addcart",
      providesTags: ["carts"],
    }),

    addToCart: builder.mutation({
      query: (data: any) => ({
        url: "/addcart",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["carts"],
    }),

    getCarts: builder.mutation({
      query: (data: any) => ({
        url: "/viewcart",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["carts"],
    }),

    getShiprate: builder.query({
      query: () => "/shiprate",
    }),

    getUserInfo: builder.mutation({
      query: (data: any) => ({
        url: "/cellinfo",
        method: "POST",
        body: data,
      }),
    }),

    deleteCart: builder.mutation({
      query: (data: any) => ({
        url: "/deletecart",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["carts"],
    }),

    validateCoupon: builder.mutation({
      query: (data: any) => ({
        url: "/validate-coupon",
        method: "POST",
        body: data,
      }),
    }),

    getAddList: builder.mutation({
      query: (data: any) => ({
        url: "/ads-route",
        method: "POST",
        body: data,
      }),
    }),

    removeCart: builder.mutation({
      query: (data: any) => ({
        url: "/clear-cart",
        method: "POST",
        body: data,
      }),
    }),

    getBannerList: builder.mutation({
      query: (data: any) => ({
        url: "/slider",
        method: "POST",
        body: data,
      }),
    }),

    // getWishList: builder.mutation({
    //   query: (data: any) => ({
    //     url: "/wish-list",
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["wishlist"],
    // }),

    getWishList: builder.query({
      query: (data: any) => ({
        url: "/wish-list",
        method: "POST",
        body: data,
      }),
      providesTags: ["wishlist"],
    }),

    addWishList: builder.mutation({
      query: (data: any) => ({
        url: "/wish-list-add",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["wishlist"],
    }),
    deleteWishlistProduct: builder.mutation({
      query: (data: any) => ({
        url: "/wish-list-clear",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["wishlist"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetProductsQuery,
  useGetCartsMutation,
  useDeleteCartMutation,
  useGetShiprateQuery,
  useGetUserInfoMutation,
  useValidateCouponMutation,
  useGetAddListMutation,
  useGetBannerListMutation,
  useRemoveCartMutation,
  useAddWishListMutation,
  useGetWishListQuery,
  useDeleteWishlistProductMutation,
} = productApi;
