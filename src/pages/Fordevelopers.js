import React from "react"
import { useState } from "react"
import Layoutdev from "../components/Layoutdev/Layoutdev"
import { Button, Form, Select, Input } from "antd"
import Offercard from "../components/Developers/Offercard"
import Cardshow from "../components/Developers/Cradshow"
import Cardline from "../components/Developers/cardline"
import Newdevcard from "../components/Developers/Newdevcard"
import Checkbox from "../components/Developers/Checkbox"

const Fordevelopers = () => {
  const [size] = useState("large")
  return (
    <>
      <Layoutdev>
        <div className="container">
          <div className="container">
            <div className="first">
              <div class="setextdata1">
                A program to help <br></br> you be the best <br></br> version of
                yourself.
              </div>
              <div className="setext">
                Pesto is where top developers comes to accelerate their careers
                & join a <br></br>world-class community. Our developers make 30
                lakhs on average.
              </div>
              <div className="container">
                <div className="circleimg">
                  <img src="/GroupCircle1.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="form">
            <form>
              <div className="setjoin">Want to Join?</div>
              <div className="name">
                <Form.Item>
                  <Input placeholder="Your Name" />
                </Form.Item>
              </div>
              <div className="emailtext">
                <Form.Item>
                  <Input
                    placeholder="Your Work Email"
                    pattern=".+@globex\.com"
                  />
                </Form.Item>
              </div>
              <div className="select">
                <Form.Item>
                  <Select placeholder="Select Graduation Year">
                    <Select.Option value="2017">2017</Select.Option>
                    <Select.Option value="2018">2018</Select.Option>
                    <Select.Option value="2019">2019</Select.Option>
                    <Select.Option value="2020">2020</Select.Option>
                    <Select.Option value="2021">2021</Select.Option>
                    <Select.Option value="2022">2022</Select.Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="telephone">
                <Form.Item>
                  <Input placeholder="Telephone" />
                </Form.Item>
              </div>
              <div className="formbtn">
                <Button size={size}>
                  <a href="/Fordeveloper2">Request Callback→</a>
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div className="container">
          <div className="program">Programs</div>
          <div className="programdis">
            Designed with you in mind, we have a range of programs to suit your
            needs.
          </div>
          <br></br><br></br>
          <div className="container">
            <Offercard />
          </div>
        </div>
        <Checkbox />
        <div className="container">
          <div className="tested">Tested formula for success</div>
          <div className="testext">50% Pesto fellows make 4.2x more</div>
          <Cardshow />
        </div>
        <div className="container">
          <div className="global">Global partner network</div>
          <div className="globaldata">
            We have partnered with Silicon Valley's most trusted brands
          </div>
          <div className="container">
          <Cardline />
          <Cardline />
        </div>
        </div>
        <div className="container">
          <div className="join">Join a lifelong community to grow</div>
          <div className="jointext">
            Pesto program is a few months of <br></br> onboarding to a lifelong
            community of <br></br> builders. We're partnering with you in your
            <br></br>career.
            <br></br>
            <br></br>
            Set yourself apart using placement<br></br> modules. Our numbers
            talk.
          </div>
          <div className="joinbtn">
            <Button size={size}>
              <a href="/Fordeveloper2"> Apply now→ </a>
            </Button>
          </div>
          <div>
            <video controls className="joinvideo">
              <source
                src="https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4"
                type="video/mp4"
              />
              <source
                src="https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.webm"
                type="video/webm"
              />
            </video>
          </div>
        </div>
        <div className="container">
          <div className="people">People who backed us</div>
          <div className="peopletext">See what they have to say</div>
          <div className="mycard">
            <Newdevcard />
          </div>
        </div>
        <div className="container">
          <div className="blueimg">
            <img src="blue.png" alt=" "></img>
          </div>
          <div className="bluetext">Ready to get started</div>
          <div className="bluetext1">
            Hold hands with the best team in the industry
          </div>
          <div>
            <div className="bluebtn">
              <Button size={size}>
                <a href="/Fordevelopers"> Request Callback → </a>
              </Button>
            </div>
          </div>
        </div>
      </Layoutdev>
    </>
  )
}

export default Fordevelopers
