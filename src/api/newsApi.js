import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://fakenews-kirboy.herokuapp.com/'}),
    endpoints: build => ({
        getNews:build.query({
            query: () => 'posts?&limit=3'
        })
    })
});

export const {useGetNewsQuery} = newsApi