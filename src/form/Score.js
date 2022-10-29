import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'react-router-dom'
import { score } from '../Redux/ScoreSlice'

function Score() {
    let count = useSelector(state=> state.counter.value )
    let studentName = useSelector(state=> state.login.myName )

  return (
    <Container>
    <Row className='d-flex justify-content-center '>
 <Col md={4}>
<div className='login-wrapper'>
 
<Col xs={10}>
    <h5 className='text-success text-center'>Thank you {studentName}!</h5>
<h5>  Your score is : {count}</h5>
</Col>

</div>

 </Col>
</Row>
</Container>
  )
}

export default Score