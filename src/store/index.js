import { configureStore } from "@reduxjs/toolkit";
import {authSlicee} from "../store/auth"
import {cardSlicee} from "../store/cardSlice"

const store=configureStore({
    reducer:{
    auth: authSlicee.reducer,
    cart:cardSlicee.reducer
} 
})  

export default store 