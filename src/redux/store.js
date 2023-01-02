import { configureStore } from "@reduxjs/toolkit";
import slice from "./slices/slice";
import registerSlice from "./slices/registerSlice";

export const store = configureStore({
    reducer: {
        mainslice: slice,
        registerslice: registerSlice,
    },
})