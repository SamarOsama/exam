import { createSlice } from "@reduxjs/toolkit";

let initialState= {value:0}
let ScoreSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        scoreIncrement:(state)=> {state.value +=1}
    }
    
})

export let {scoreIncrement} = ScoreSlice.actions
export default ScoreSlice.reducer;