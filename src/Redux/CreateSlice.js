import { createSlice } from "@reduxjs/toolkit";

let questionList = [
    {"Question":"q1",
"correctAnswer":"a",
 "choicesList":["a","b","c"]
},
{"Question":"q2",
"correctAnswer":"b",
 "choicesList":["a","b","c"]
},
{"Question":"q3",
"correctAnswer":"c",
 "choicesList":["a","b","c"]
},
{"Question":"q4",
"correctAnswer":"c",
 "choicesList":["a","b","c"]
},
{"Question":"q5",
"correctAnswer":"c",
 "choicesList":["a","b","c"]
}]



let initialState= {questionList}
let counterSlice = createSlice({
    
    name:'question',
    initialState,
    reducers:{   
        randomiseList: 
        (initialState)=>{
            
            console.log(initialState.questionList)
            for (var i = initialState.questionList.length-1 ; i > 0; i--) {
            var j = Math.floor(Math.random() * i)
            var k = initialState.questionList[i]
        
          initialState.questionList[i] =  initialState.questionList[j]
            initialState.questionList[j] = k

          for ( var m = initialState.questionList[i]["choicesList"].length -1; m > 0; m--) {
            var h= Math.floor(Math.random() * i)
           var  n = initialState.questionList[i]["choicesList"][m]
           initialState.questionList[i]["choicesList"][m] = initialState.questionList[i]["choicesList"][h]
           initialState.questionList[i]["choicesList"][h] = n
          }
          
          }
         
        },
       
     

    }
})

export let {increament,randomiseList} = counterSlice.actions
export default counterSlice.reducer;