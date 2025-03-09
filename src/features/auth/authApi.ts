import { apiSlice } from "../apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addLoginOtp: builder.mutation({
      query: (data: any) => ({
        url: "/getotp",
        method: "POST",
        body: data,
      }),
    }),

    addLoginOtpVerify: builder.mutation({
      query: (data: any) => ({
        url: "/otpverify",
        method: "POST",
        body: data,
      }),
    }),

    getOrderList: builder.query({
      query: (data: any) => ({
        url: "/orderlist",
        method: "POST",
        body: data,
      }),
      providesTags: ["orders"],
    }),

    checkout: builder.mutation({
      query: (data: any) => ({
        url: "/checkout",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["orders"],
    }),
  }),
});

export const {
  useAddLoginOtpMutation,
  useAddLoginOtpVerifyMutation,
  useLazyGetOrderListQuery,
  useCheckoutMutation,
} = authApi;
