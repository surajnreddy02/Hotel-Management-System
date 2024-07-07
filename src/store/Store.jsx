import {configureStore} from "@reduxjs/toolkit"
import reduces from "./AuthSlice"

const store = configureStore({
    reducer: reduces,
})
export default store