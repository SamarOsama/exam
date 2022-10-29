import React from 'react'
import Paths from './Routes'
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Signin from '../form/Signin';

import Login from '../form/Login';
import QuestionOne from '../form/QuestionOne';
import QuestionTwo from '../form/QuestionTwo';
import QuestionThree from '../form/QuestionThree';
import QuestionFour from '../form/QuestionFour';
import QuestionFive from '../form/QuestionFive';
import Score from '../form/Score';







export default function Navigation() {
    return (
       
            <Routes>
             
                <Route path={'/'} element={<Signin />} />
                <Route path={'/signin'} element={<Signin />} />
                <Route path={'/one'} element={<QuestionOne />} />
                <Route path={'/two'} element={<QuestionTwo/>} />
                <Route path={'/three'} element={<QuestionThree />} />
                <Route path={'/four'} element={<QuestionFour />} />
                <Route path={'/five'} element={<QuestionFive />} />
                
                <Route path={'/score'} element={<Score />} />

            </Routes>
        
    )
}
