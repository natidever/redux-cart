import { createSlice } from "@reduxjs/toolkit";

const cardSlice=createSlice({
    name:'card',
    initialState:{
        numberOfItems:0,
        listOfItems:[],
        showCare:true

    },
    reducers:{
        addToCart(state,actions){
            const newItem = actions.payload
            const existingItem =  state.listOfItems.find(item=>item.id===newItem.id)

        }
    }

})