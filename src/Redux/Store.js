
import { configureStore } from "@reduxjs/toolkit";

import questionReducer from '../Redux/CreateSlice'
import LoginReducer from '../Redux/LoginSlice'
import ScoreReducer from '../Redux/ScoreSlice'



export let questionStore = configureStore({
   
   reducer:{
    question:questionReducer,
    login: LoginReducer,
    counter: ScoreReducer

}
   
})
