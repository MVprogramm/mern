import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentToken: localStorage.getItem("token") === null
        ? null
        : localStorage.getItem("token"),
}

export const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        setCurrentToken: (state, action) => {
            state.currentToken = action.payload
            localStorage.setItem("token", action.payload)
        },
        logoutToken: (state) => {
            localStorage.removeItem("token")
            state.currentToken = null
        }
    }
})

export const { setCurrentToken, logoutToken } = tokenSlice.actions
export default tokenSlice.reducer