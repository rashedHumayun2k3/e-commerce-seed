"use client"
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authorAPI = createApi({
    reducerPath: 'authorAPI',
    baseQuery: fetchBaseQuery({ 
      baseUrl: 'https://localhost:7074/api' 
    }),
    endpoints: (builder) => ({
      getAllAuthor: builder.query({
        query: () => `Author`,
      })
    }),
  })
  

export const { useGetAllAuthorQuery } = authorAPI