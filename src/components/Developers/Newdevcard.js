import React from 'react'
import './developer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Newdevcard = () => {
  return (
    <div className='mycard1'>
      <Container>
        <Row>
            <Col xs = '12' xl= '12' xxl='4' md= '12' lg="12"><img src='./Group6.png' ></img></Col>
            <Col xs = '12' xl= '12' xxl='4' md= '12' lg="12"><img src='./Group7.png' ></img></Col>
            <Col xs = '12' xl= '12' xxl='4' md= '12' lg="12"><img src='./Group8.png' ></img></Col>
        </Row>
      </Container>
  </div>
  )
}

export default Newdevcard