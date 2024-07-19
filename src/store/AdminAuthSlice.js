// adminAuthSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user: null,
};

const adminAuthSlice = createSlice({
    name: "adminAuth",
    initialState,
    reducers: {
        adminLogin: (state, action) => {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        adminLogout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { adminLogin, adminLogout } = adminAuthSlice.actions;
export default adminAuthSlice.reducer;
