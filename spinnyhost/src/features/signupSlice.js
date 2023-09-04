import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { backendBaseUrl } from "../../src/reduxStore/constant";

export const signupSlice = createApi({
  //reducer path decide the path to where store the cache files
  reducerPath: 'signupSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: backendBaseUrl,
  }),

  endpoints: (builder) => ({
    //endpoint for sign up requests
    signupCredential: builder.mutation({
      query: (newPost) => ({
        url: "/auth/signup",
        method: "POST",
        body: newPost,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      }),
    }),

    //write another request here
  }),
});

// Export the endpoints for usage
export const { useSignupCredentialMutation } = signupSlice;


