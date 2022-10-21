import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const appApi = createApi({
    reducerPath: 'app/api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/'
    }),
    endpoints: build => ({
        registration: build.mutation({
            query: (body) => ({
                url: 'auth/register',
                method: 'POST',
                body
            })
        }),
        login: build.mutation({
            query: (body) => ({
                url: 'auth/login',
                method: 'POST',
                body
            })
        })
    })
})

export const { useRegistrationMutation, useLoginMutation } = appApi