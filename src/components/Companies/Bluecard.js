import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Layout/Layout.css';
import { Link } from "gatsby"
import { Button } from "antd"

const Bluecard = () => {
  return (
  <div className="Bluecard">
    <img src="./Newcard.png" alt=" "></img>
      <div className="maskgroup">
        <img src="./Mask group.png" alt=""></img>
      </div>
      <div className="Newcardtext1">
        Funds that back our customers
      </div>
      <div className="Newcardtext2">
        You'r in good company. Our customers are backed <br></br>by some of the top funds & they chose to partner <br></br>with us for their growth journey.
      <div>
      <Button value={'large'}>
        <Link to="/Fordevelopers"> Get Early Access→ </Link>
      </Button>
      </div>
      </div>
  </div>
  )
}

export default Bluecard