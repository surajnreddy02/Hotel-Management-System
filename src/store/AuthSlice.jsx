import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true,
                // state.userData = action.payload.userData
                state.userData = action.payload
            /* in redux we don't need to spread the values unlike context api*/
        },
        logout: (state, action) => {
            state.status = false,
                userData = null
        }
    }

})

export const { login, logout } = authSlice.actions
export default authSlice.reducer