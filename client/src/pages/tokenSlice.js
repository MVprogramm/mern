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
        }
    }
})

export const { setCurrentToken } = tokenSlice.actions
export default tokenSlice.reducer