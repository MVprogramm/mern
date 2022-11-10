import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentUser: localStorage.getItem("userId") === null
        ? null
        : localStorage.getItem("userId")
}

export const userSlice = createSlice({
    name: "userId",
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
            localStorage.setItem("userId", action.payload)
        },
        logoutUser: (state) => {
            localStorage.removeItem("userId")
            state.currentUser = null
        }
    }
})

export const { setCurrentUser, logoutUser } = userSlice.actions
export default userSlice.reducer