import { configureStore } from "@reduxjs/toolkit";
import {authSlicee} from "../store/auth"

const store=configureStore({
    reducer:{
    auth: authSlicee.reducer} 
})

export default store 