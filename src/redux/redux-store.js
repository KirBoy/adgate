import {configureStore } from '@reduxjs/toolkit'
import {newsApi} from "../api/newsApi";


const store = configureStore({
    reducer :{
        [newsApi.reducerPath]: newsApi.reducer
    },
    middleware: (getDefaultMiddleware  )=> getDefaultMiddleware().concat(newsApi.middleware)
})

export default store