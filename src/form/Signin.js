import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userName } from '../Redux/LoginSlice'
import {randomiseList} from '../Redux/CreateSlice'
import { useNavigate } from "react-router-dom";


import {Row,Col, Container, Form, Button, FormLabel} from 'react-bootstrap';

function Signin() {
    const navigate = useNavigate();
    const nextPage =()=>{
            navigate({
                pathname: '/one'
            })
    }
    let dispatch = useDispatch()
const handleSubmit= (e)=>{
    e.preventDefault()
    nextPage()

}
  return (
   <Container>
       <Row className='d-flex justify-content-center '>
    <Col md={4}>
        
  <div className='login-wrapper'>
   
 <Col xs={10}>
 <h5 className='text-center text-danger mb-4'>Welcome to the Exam</h5>
   <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="Name">

        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" onChange={(e)=>{dispatch(userName(e.target.value))}} />
      </Form.Group>
      <Row className='d-flex justify-content-center'>
         <Col xs={6}> 
        <Button variant="success" type="submit" className='w-100 my-4 ' onClick={()=>{dispatch(randomiseList())}}  >
        Enroll  
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

export default Signin
