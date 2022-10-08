import { configureStore } from "@reduxjs/toolkit"
import tokenReudcer from "../src/pages/tokenSlice"
import userReducer from "../src/pages/userSlice"

export const store = configureStore({
    reducer: {
        token: tokenReudcer,
        userId: userReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store