import { apiSlice } from "./apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.mutation({
      query: () => ({
        url: "products/",
        method: "GET"
      }),
    }),
  }),
});

export const { useGetProductsMutation } = productsApiSlice;
