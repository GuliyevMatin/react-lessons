import { createSlice } from "@reduxjs/toolkit";


const initialState= {
    counter : 0,
    movies : []
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers:{
        increment:(state)=>{
            state.counter = state.counter + 1
        }
    }
})

export const {increment} = homeSlice.actions;

export default homeSlice.reducer;