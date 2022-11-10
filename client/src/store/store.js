import { configureStore } from "@reduxjs/toolkit"
import { appApi } from "./app.api"
import tokenReudcer from "./tokenSlice"
import userReducer from "./userSlice"

export const store = configureStore({
    reducer: {
        [appApi.reducerPath]: appApi.reducer,
        token: tokenReudcer,
        userId: userReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(appApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
})


