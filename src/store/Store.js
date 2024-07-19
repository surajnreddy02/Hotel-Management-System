// store.js

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import adminAuthReducer from "./AdminAuthSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        adminAuth: adminAuthReducer,
        
    },
});

export default store;
