"use client"
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const categoryAttributeAPI = createApi({
  reducerPath: 'categoryAttributeAPI',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://localhost:7074/api'
  }),
  endpoints: (builder) => ({
    GetProductAttributeForSearch: builder.query({
      query: ()=>`CategoryAttributes`
    }),
  }),
})


export const {  useGetProductAttributeForSearchQuery  } = categoryAttributeAPI