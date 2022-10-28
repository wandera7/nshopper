import { createSlice } from "@reduxjs/toolkit";


const productsSlice=createSlice({
    name:"products",
    initialState:{
        items:[23],
    },
    reducers:{
        addItem(state,action){
            state.items.push(action.payload);
        }
    }
})

export default productsSlice.reducer;
