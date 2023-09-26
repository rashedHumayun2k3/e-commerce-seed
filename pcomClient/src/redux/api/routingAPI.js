import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const routingAPI = createApi({
    reducerPath:'routingAPI',
    baseQuery:fetchBaseQuery({
        baseUrl: 'https://localhost:7074/api/Category'
    }),
    endpoints: (builder) => ({
          postRoutingParameter: builder.mutation({
            query: (jsonData) => ({
              url: 'RoutingParameter', 
              method: 'POST',
              body: jsonData,
              headers: {
                'Content-Type': 'application/json',
              },
            }),
          }),
    }),
    
})

export const { 
    usePostRoutingParameterMutation
   } = routingAPI