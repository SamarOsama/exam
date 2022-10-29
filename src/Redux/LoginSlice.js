import { createSlice } from "@reduxjs/toolkit";



let initialState= {myName:''}
let nameSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        userName:(state,action)=>{state.myName=action.payload},

    }
})

export let {userName} = nameSlice.actions
export default nameSlice.reducer;