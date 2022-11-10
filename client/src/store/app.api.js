import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const appApi = createApi({
    reducerPath: 'app/api',
    baseQuery: fetchBaseQuery({
        baseUrl: '/api/',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().token.currentToken

            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }

            return headers
        },
    }),
    endpoints: builder => ({
        registration: builder.mutation({
            query: (form) => ({
                url: 'auth/register',
                method: 'POST',
                body: form
            })
        }),
        login: builder.mutation({
            query: (form) => ({
                url: 'auth/login',
                method: 'POST',
                body: form,
            }),
        }),
        generate: builder.mutation({
            query: (link) => ({
                url: 'link/generate',
                method: 'POST',
                body: link
            })
        }),
        getLinks: builder.query({
            query: () => ({
                url: 'link/',
            })
        }),
        getLink: builder.query({
            query: (id) => ({
                url: `/link/${id}`,
            })
        })
    })
})

export const { 
    useRegistrationMutation, 
    useLoginMutation,
    useGenerateMutation,
    useGetLinkQuery,
    useGetLinksQuery
} = appApi