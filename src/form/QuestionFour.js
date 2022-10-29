import React, { useState } from 'react'
import { Button, Col, Container, InputGroup, Row,  Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom'
import { scoreIncrement } from '../Redux/ScoreSlice'
function QuestionFour() {
    let dispatch = useDispatch()
    let count = useSelector((state)=> state.counter.value)

    const navigate = useNavigate();
    
    const nextPage =()=>{
            navigate({
                pathname: '/five'
            })
    }
  
    const handleSubmit= (e)=>{
        e.preventDefault()  
        if(questions[3].correctAnswer === selectedOption)
        {
            
            dispatch(scoreIncrement()) 
            nextPage()  
            
        } 
        else{
            nextPage()
        }
     
    }
    let questions = useSelector((state)=> state.question.questionList)
   const [selectedOption, setSelectedOption]= useState('')
  return (
    <Container>
    <Row className='d-flex justify-content-center '>
 <Col md={4}>
<div className='login-wrapper'>
   
 
<Col xs={10}>
<Form onSubmit={handleSubmit}>

   <Form.Group className="mb-3" controlId="Name">
     <Form.Label> Q4. {questions[3].Question} </Form.Label>
     {console.log("*************     " + questions[3].correctAnswer )}
     <InputGroup className='d-flex justify-content-evenly' >
        {questions[3].choicesList.map((v,i)=>
           
            <>
                         <InputGroup.Radio key={i}  value={v} name="test" aria-label="Radio 1" onClick={(e)=>{setSelectedOption(e.target.value)}} />{v}

            </>
        )}

    

</InputGroup>   
   </Form.Group>
   <Row className='d-flex justify-content-center'>
      <Col xs={6}> 
     <Button variant="primary" type="submit" className='w-100 my-2 ' >
     Submit  
   </Button>
   </Col>
   </Row>
  

   
 </Form>
</Col>

</div>
     
  

 </Col>
</Row>
</Container>
  )
}

export default QuestionFour