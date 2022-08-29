import React from 'react'
import './Developer2.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

const MentorQualification = () => {
  return (
    <div className='Col'>
      <Container>
        <Row>
          
          <Col xs = '12' md= '12' lg="4" xl= '4' xxl='4'>
          <div className='Frame1'>
            <div>
               <img src='./MentorFrame1.png'></img>
            </div>
            <h2>Qualifications</h2>
            <h3>
             Senior engineers having 3-5years of active development experience as a Frontend or a Fullstack engineer (preferably React/Node)
            </h3>
          </div>
          </Col>

          <Col xs = '12' md= '12' lg="4" xl= '4' xxl='4'>
          <div className='Frame2'>
            <div>
                <img src='./MentorFrame2.png' ></img>
            </div>
            <h2>Values</h2>
            <h3>
            The role thrives on a sharing mindset especially when you open up about your personal learnings on product design, coding practices and application performance
            </h3>
          </div>
          </Col>

          <Col xs = '12' md= '12' lg="4" xl= '4' xxl='4'>
          <div className='Frame3'>
            <div>
                <img src='./MentorFrame3.png' ></img>
            </div>
            <h2>Schedule</h2>
            <h3>
            Our milestiones require an upfront commitment of at least 4-5 hours per week from you
            </h3>
          </div>
          </Col>
          
        </Row>
      </Container>
    </div>
  )
}

export default MentorQualification