import React from "react"
import { Button } from "antd"
import { Link } from "gatsby"
import { useState } from "react"
import Layout2 from "../components/Mentor/Layout2"
import "../components/Mentor/Developer2.css"
import MentorCard from "../components/Mentor/MentorCard"
import MentorQualification from "../components/Mentor/MentorQualification"

const Formentors = () => {
  const [size] = useState("large")
  return (
    <div>
      <Layout2>
        <div className="contanier">
          <div className="container">
            <div class="text1">Grow faster by sharing your experience</div>
            <div class="text2">
              Lessons from your past help the next <br></br> generation move up
              more quickly
            </div>
            <div className="applybtn">
              <Button type="primary" style={{ marginLeft: 8 }}>
                <Link to="/Fordevelopers"> Apply now → </Link>
              </Button>
            </div>
          </div>
          <div className="container">
            <div class="logo1">
              <img src="/vector.png" alt=" " />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="text3">Reasons to become a mentor with Us</div>
          <div className="text4">
            Match your experience with the right opportunity
          </div>
          <MentorCard />
        </div>
        <div className="container">
          <div className="text3">Criteria we look for</div>
          <div className="Col1">
            <MentorQualification />
          </div>
        </div>
        <div className="container">
          <div className="BlueCard">
            <img src="blue.png" alt=" "></img>
            <h2>
              Share your learnings with the community, help them grow faster
            </h2>
            <h3>Hold hands with the best team in the industry</h3>
            <div>
              <Button size={size}>
                <a href="/Fordevelopers"> Request Callback → </a>
              </Button>
            </div>
          </div>
        </div>
      </Layout2>
    </div>
  )
}

export default Formentors
