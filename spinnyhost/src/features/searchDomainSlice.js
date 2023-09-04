import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { backendBaseUrl } from "../../src/reduxStore/constant";

export const searchDomainSlice = createApi({
  //reducer path decide the path to where store the cache files
  reducerPath: 'searchDomainSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: backendBaseUrl,
  }),

  endpoints: (builder) => ({
    searchDomain: builder.query({
        query: (domainName) => ({
          url: `/domains/search?searchTerm=${domainName}`,
          method: "GET",
        }),
      }),
    //write another request here
  }),
});

// Export the endpoints for usage
export const { useLazySearchDomainQuery } = searchDomainSlice;


