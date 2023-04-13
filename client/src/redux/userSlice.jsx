import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginRedux: (state, action) => {
            console.log(action)
        }
    }
})

export const { loginRedux } = userSlice.actions
export default userSlice.reducer