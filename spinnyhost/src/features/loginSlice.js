import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { backendBaseUrl } from "../../src/reduxStore/constant";

export const loginSlice = createApi({
  //reducer path decide the path to where store the cache files
  reducerPath: 'loginSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: backendBaseUrl,
  }),

  endpoints: (builder) => ({
    //endpoint for sign up requests
    createPostForLogin: builder.mutation({
      query: (loginPost) => ({
        url: "/auth/login",
        method: "POST",
        body: loginPost,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      }),
    }),
    //write another request here
  }),
});

// Export the endpoints for usage
export const { useCreatePostForLoginMutation } = loginSlice;


