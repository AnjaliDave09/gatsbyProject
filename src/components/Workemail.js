import React from 'react'
import { Button } from "antd";
import "antd/dist/antd.css";
import './Layout/Layout.css';
import { Link } from 'gatsby';
import '../pages/Signin';
import 'bootstrap/dist/css/bootstrap.min.css';
const Workemail = () => {
  return (
    <div className='contanier'>
    <div className='email'>
    <input type="email" id="email"
       pattern=".+@globex\.com" size="30" required placeholder='Your Work Email'></input>
    </div>
    <div className="sendemail">
    <Button type="primary">
    <Link to="/Fordevelopers">Get Early Access→</Link>
    </Button>
    <div className='account'>Already have an account? <Link to='./Singin'>Sign In.</Link>
    </div>
    </div>

    </div>
  )
}

export default Workemail