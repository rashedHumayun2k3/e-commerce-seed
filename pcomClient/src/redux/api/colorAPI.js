"use client"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const colorAPI = createApi({
    reducerPath: 'colorAPI',
    baseQuery: fetchBaseQuery({ 
      baseUrl: 'https://localhost:7074/api' 
    }),
    endpoints: (builder) => ({
      getAllColor: builder.query({
        query: () => `Color`,
      })
    }),
  })
  

export const { useGetAllColorQuery } = colorAPI