import { createSlice } from "@reduxjs/toolkit";

let questionList = [
    {"Question":"What is your country Code for Egypt?",
"correctAnswer":"EG",
 "choicesList":["EG","US","UK","KW"]
},
{"Question":"What is the country Code for united states?",
"correctAnswer":"US",
"choicesList":["EG","US","LG","KW"]
},
{"Question":"What is the country Code for united kingdom?",
"correctAnswer":"UK",
"choicesList":["LC","US","UK","XY"]
},
{"Question":"What is the country Code for Kuwait?",
"correctAnswer":"KW",
"choicesList":["AB","BC","UK","KW"]
},
{"Question":"What is the country Code for Emarite?",
"correctAnswer":"UAE",
 "choicesList":["UAE","AB","UK","CD"]
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