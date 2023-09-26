"use client"
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'



export const productAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://localhost:7074/api'
  }),
  endpoints: (builder) => ({
    getAllProduct: builder.query({
      query: () => `Product`,
    }),
    getOneProduct: builder.query({
      query : ()=> `Products`,
    }),
    getBrandForSearchingProduct: builder.query({
      query : ()=> `Product/GetBrandForSearchingProduct`,
    }),
    getAuthourForSearchingProduct: builder.query({
      query : ()=> `Product/getAuthourForSearchingProduct`,
    }),

  }),
})


export const { 
  useGetAllProductQuery, 
  useGetBrandForSearchingProductQuery, 
  useGetAuthourForSearchingProductQuery,
  useget
 } = productAPI