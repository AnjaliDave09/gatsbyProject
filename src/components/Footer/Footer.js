import React from 'react'
import '../Layout/Layout.css'

const Footer = () => {
  return (
    <div>
      <div className='footerlogo'>
      <img src='Logo.png' alt=''></img>
      </div>
      <div className='footer1'>
      <a href=''>Blog</a>
      <br></br> <br></br>
      <a href=''>FAQs</a> 
      <br></br> <br></br>
      <a href=''>Privacy Policy</a>
      </div>
      <div className='footer2'>
      <a href='/Fordevelopers'>For Developers</a> 
        <br></br> <br></br>
      <a href='/Forcompanies'>For Companies</a> 
      <br></br> <br></br>
      <a href='/Formentors'>For Mentors</a> 
      </div>
      <div className='footer3'>
      <a href=''>Facebook</a> 
      <br></br> <br></br>  
      <a href=''>For Companies</a> 
      <br></br> <br></br>
      <a href=''>LinkedIn</a> 
      <br></br> <br></br>
      <a href=''>Twitter</a> 
      <br></br> <br></br>
      <a href=''>Instagram</a> 
      <br></br> <br></br>
      <a href=''>YouTube</a> 
      <br></br> <br></br>
      </div>
    </div>
  );
}

export default Footer