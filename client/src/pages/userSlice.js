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
            localStorage("userId", action.payload)
        }
    }
})

export const { setCurrentUser } = userSlice.actions
export default userSlice.reducer