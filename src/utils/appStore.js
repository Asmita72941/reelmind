import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";

const appStore = configureStore({
    reducer : {
        user : userReducer,
        movie : movieReducer,
    },
});

export default appStore;

