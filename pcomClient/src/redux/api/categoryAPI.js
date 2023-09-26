"use client"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryAPI = createApi({
    reducerPath: 'categoryAPI',
    baseQuery: fetchBaseQuery({ 
      baseUrl: 'https://localhost:7074/api' 
    }),
    endpoints: (builder) => ({
      getAllCategory: builder.query({
        query: () => `Category`,
      }),
      getOneCategory: builder.query({
        query: () => `Category/1`,
      })
    }),
  })
  

export const { useGetAllCategoryQuery   } = categoryAPI