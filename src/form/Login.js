import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decreament, increament } from '../Redux/CreateSlice'
import { randomiseList } from '../Redux/CreateSlice'

function Login() {
    let questions = useSelector((state)=> state.question.questionList)
    let dispatch = useDispatch()


console.log(questions)
  return (
    <div > 
        <div>{}</div>
        <div>{questions[0].Question}</div>
    <div>Login {questions.map((v,i)=><h1>{v.Question}</h1>)}

    </div>
    <div>Login {questions.map((v,i)=><h1>{v.choicesList}</h1>)}

</div>
    <button onClick={()=>{dispatch(randomiseList() )}}>sort</button>

    </div>
   
  )
}

export default Login