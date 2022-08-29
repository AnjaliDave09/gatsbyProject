import React from 'react';
import '../Layout/Layout.css';
import 'antd/dist/antd.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const CradHeading = () => (
<div className='card1'>
<Container>
  <Row>
      <Col xxs='3' xs = '3' md= '3' xl='2' lg="2" xxl='2'> <img className='cardsize2' src='paypal.png'></img></Col>
      <Col xxs='3' xs = '3' md= '3' xl='2' lg="2" xxl='2'> <img className='cardsize2' src='pully.png'></img></Col>
      <Col xxs='3' xs = '3' md= '3' xl='2' lg="2" xxl='2'> <img className='cardsize2' src='rippling.png'></img></Col>
      <Col md= '3' xl='2' lg="2" xxl='2' className='card3'><img className='cardsize2' src='swiggy.png'></img></Col>
      <Col md= '3' xl='2' lg="2" xxl='2' className='card3'><img className='cardsize2' src='Googlecard.png'></img></Col>
     
  </Row>
</Container>
</div>


);

export default CradHeading