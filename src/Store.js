import { configureStore } from "@reduxjs/toolkit";
import userDetails from "./Feature/userDetails";
export const store = configureStore({
    reducer:{
        app:userDetails
    }
})