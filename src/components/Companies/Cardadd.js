import React from 'react'
import '../Layout/Layout.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const Cardadd = () => (
  <div>
    <div className='Rowcard'>
      <Container>
        <Row>
          <Col> 
            <div className='cardtext'> 1. Discover </div>
            <div className='cardis'>Get matched to select few candidates that meet your requirements based on their work</div></Col>
            <Col xs md lg="2"><img src='./Group1.png' className='cardimg'></img></Col></Row>
            <Row>
            <Col>
            <div className='cardtext'> 2. Review Work </div>
            <div className='cardis'>Review a live project, documentation, Figma files & <br></br>open-source code to understand the candidate beter.</div></Col>
            <Col xs md lg="2"><img src='./Group2.png' className='cardimg'></img></Col></Row>
            <Row>
              <Col>
              <div className='cardtext'> 3. Interview </div>
              <div className='cardis'>Schedule interviews in one click with all interested candidates.</div>
              </Col>
            <Col xs md lg="2"><img src='./Group3.png' className='cardimg'></img></Col>
        </Row>
      </Container>
    </div>
  </div>
);

export default Cardadd