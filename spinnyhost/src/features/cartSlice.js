import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { backendBaseUrl } from "../../src/reduxStore/constant";

export const cartSlice = createApi({
  //reducer path decide the path to where store the cache files
  reducerPath: 'cartSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: backendBaseUrl,
  }),

  endpoints: (builder) => ({
    //endpoint for sign up requests
    addInCartEnd: builder.mutation({
      query: (domainName) => ({
        url: `/carts/add-domain?domainName=${domainName}`,
        method: "PUT",
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }),
    }),
    //write another request here

    getAllItemFromCart:builder.query({
      query: ()=>({
        url: '/carts/',
        method: "GET",
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      })
    }),

    deleteCartItem:builder.mutation({
      query: (productId)=>({
        url: `/carts/remove-item?productId=${productId}`,
        method: "PUT",
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      })  
    })
  }),
});

// Export the endpoints for usage
export const { useAddInCartEndMutation, useGetAllItemFromCartQuery, useDeleteCartItemMutation } = cartSlice;


