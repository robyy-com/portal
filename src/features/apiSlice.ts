import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.robyy.com/v1.1.0/",
  // prepareHeaders: async (headers, { getState }) => {
  //   const data = localStorage.getItem("isAuth");
  //   const token = data ? JSON.parse(data).token : null;
  //   if (token) {
  //     headers.set("Authorization", `Bearer ${token}`);
  //   }
  //   return headers;
  // },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery,
  refetchOnMountOrArgChange: 2,
  tagTypes: ["carts", "wishlist", "orders"],
  endpoints: (builder) => ({}),
});
