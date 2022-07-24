import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/furnitureApiSlice.js";
import furnitureReducer from '../features/furnitureSlice.js'


export const store = configureStore({
    reducer: {
        furniture: furnitureReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    }
});

