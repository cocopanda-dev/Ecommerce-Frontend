import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BasicUrl } from "../constants.js";


export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: BasicUrl,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('TOKEN');

            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            
            return headers
        },
    }),
    endpoints: (builder) => ({
        getFurnitures: builder.query({
            query: () => `/product`,
        }),
        login: builder.mutation({
            query(userInfo) {
                return {
                    url: `/auth/login`,
                    method: 'POST',
                    body: userInfo,
                }
            },
        }),
        makeOrder: builder.mutation({
            query(orderList) {
                return {
                    url: `/order`,
                    method: 'POST',
                    body: orderList,
                }
            }
        }),
    }),
});


export const { useGetFurnituresQuery, useLoginMutation, useMakeOrderMutation } = apiSlice