import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_REACT_API_URL}`,
  prepareHeaders: (headers) => {
    headers.set("api_key", `${import.meta.env.VITE_REACT_API_KEY}`);
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: (_builder) => ({}),
});
