import React from 'react'
import '../Developers/developer.css'
import "antd/dist/antd.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Cardline = () => (
    <div className='cardline row'>
      <Container>
        <Row>
            <Col xxs='6' xs = '6' md= '6' xl='4' lg="5" xxl='2'><img className='cardsize2' src='paypal.png'></img></Col>
            <Col xxs='6' xs = '6' md= '6' xl='4' lg="5" xxl='2'><img className='cardsize2' src='pully.png'></img></Col>
            <Col xxs='6' xs = '6' md= '6' xl='4' lg="5" xxl='2'><img className='cardsize2' src='rippling.png'></img></Col>
            <Col xxs='6' xs = '6' md= '6' xl='4' lg="5" xxl='2'><img className='cardsize2' src='swiggy.png'></img></Col>
            <Col xxs='6' xs = '6' md= '6' xl='4' lg="5" xxl='2'><img className='cardsize2' src='Googlecard.png'></img></Col>
            <Col xxs='6' xs = '6' md= '6' xl='4' lg="5" xxl='2'><img className='cardsize2' src='gojekcard.png'></img></Col>
        </Row>
      </Container>
  </div>
  );

export default Cardline