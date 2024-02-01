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

                if(existingItem){
                    existingItem.quantity++
                    existingItem.price +=newItem.price


                }else{
                   state.listOfItems.push({
                    id:newItem.id,
                    price:newItem.price
                   }
                
                   )
                }

        }
    }




})
export const cartActions =cardSlice.actions
export const cardSlicee=cardSlice