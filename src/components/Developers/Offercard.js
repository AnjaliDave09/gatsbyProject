 import { Button, Card } from "antd"
import React from "react"
// import "antd/dist/antd.css"
import "../Developers/developer.css"
// import Button from "react-bootstrap/Button"
// import Card from "react-bootstrap/Card"
// import Col from "react-bootstrap/Col"
// import Row from "react-bootstrap/Row"
// import { CardGroup } from "react-bootstrap"

const Offercard = () => {
  return (
    <div className="container">
      <div className="offersite">
        <Card
          title={
            <h2>
              <Button
                className="offerimgbtn"
                style={{
                  background: "White",
                  borderColor: "#01C9A7",
                  color: "#01C9A7",
                }}
              >
                PLUSH
              </Button>
            </h2>
          }
          bordered={false}
          className="offersite3"
        >
            <h1 className="offerh1">
              Designed for young developers to create an early impact
            </h1>
            <div className="offerall">
              <p>
                <img src="rightsymbol.png" alt=" "></img> 25 weeks program
              </p>
              <p>
                <img src="rightsymbol.png" alt=" "></img> Structured, flexible
                curriculum
              </p>
              <p>
                <img src="rightsymbol.png" alt=" "></img> 1:1 Mentorship
                sessions
              </p>
              <p>
                <img src="rightsymbol.png" alt=" "></img> Weekend live lectures
              </p>
              <p>
                <img src="rightsymbol.png" alt=" "></img> Fees ₹250,000 ₹150,000
                + GST
              </p>
            </div>
            <div className="offerbtn">
              <Button type="primary">
                <a href="/Fordevelopers"> Learn more → </a>
              </Button>
          </div>
        </Card>
      </div>

      <div className="offersite">
        <Card
          title={
            <h2>
              <Button
                className="offerimgbtn"
                style={{
                  borderColor: "#01C9A7",
                  background: "White",
                  color: "#01C9A7",
                }}
              >
                FLASH
              </Button>
            </h2>
          }
          bordered={false}
          className="offersiteedit"
        >
          <h1 className="offerh1">
            Designed for Senior developers for levelling up their career
          </h1>
          <div className="offerall">
            <p>
              <img src="rightsymbol.png" alt=" "></img> 8 weeks program
            </p>
            <p>
              <img src="rightsymbol.png" alt=" "></img> Advance curriculum
            </p>
            <p>
              <img src="rightsymbol.png" alt=" "></img> 1:1 Sessions
            </p>
            <p>
              <img src="rightsymbol.png" alt=" "></img> Only for SDE-2 and above
            </p>
            <p>
              <img src="rightsymbol.png" alt=" "></img> Fees ₹250,000 ₹150,000 +
              GST
            </p>
          </div>
          <div className="offerbtn">
            <Button type="primary">
              <a href="/Fordevelopers"> Learn more → </a>
            </Button>
          </div>
        </Card>
      </div>
    </div>
    // <Row xs={1} md={2}>
    //   <Col>
    //     <div className="container">
    //       <Card className="border">
    //         <Card.Header style={{background:'white'}}>
    //           <button type="button" class="btn btn-outline-primary"> PLUSH </button>
    //         </Card.Header>
    //         <Card.Body className="cardbody">
    //           <Card.Title className="offertitle">
    //             Designed for young developers to create an early impact
    //           </Card.Title>
    //           <CardGroup>
    //             <Card.Body>
    //               <p>
    //                 <img src="rightsymbol.png" alt=" "></img> 25 weeks program
    //               </p>
    //               <p>
    //                 <img src="rightsymbol.png" alt=" "></img> Structured,
    //                 flexible curriculum
    //               </p>
    //               <p>
    //                 <img src="rightsymbol.png" alt=" "></img> 1:1 Mentorship
    //                 sessions
    //               </p>
    //               <p>
    //                 <img src="rightsymbol.png" alt=" "></img> Weekend live
    //                 lectures
    //               </p>
    //               <p>
    //                 <img src="rightsymbol.png" alt=" "></img> Fees ₹250,000 ₹150,000 + GST
    //               </p>
    //                   <button type="button" class="btn btn-outline-primary offerbtnnew"> Learn more → </button>
    //             </Card.Body>
    //           </CardGroup>
    //         </Card.Body>
    //       </Card>
    //     </div>
    //   </Col>

    //   <Col>
    //     <div>
    //       <Card className="border">
    //         <Card.Header style={{background: 'white'}}>
    //           <button type="button" class="btn btn-outline-primary"> PLUSH </button>
    //         </Card.Header>
    //         <Card.Body className="cardbody">
    //           <Card.Title className="offertitle">
    //             Designed for young developers to create an early impact
    //           </Card.Title>
    //           <CardGroup>
    //             <Card.Body style={{ textAlign: "left" }}>
    //               <p>
    //                 <img src="rightsymbol.png" alt=" "></img> 25 weeks program
    //               </p>
    //               <p>
    //                 <img src="rightsymbol.png" alt=" "></img> Structured,
    //                 flexible curriculum
    //               </p>
    //               <p>
    //                 <img src="rightsymbol.png" alt=" "></img> 1:1 Mentorship
    //                 sessions
    //               </p>
    //               <p>
    //                 <img src="rightsymbol.png" alt=" "></img> Weekend live
    //                 lectures
    //               </p>
    //               <p>
    //                 <img src="rightsymbol.png" alt=" "></img> Fees ₹250,000
    //                 ₹150,000 + GST
    //               </p>
    //               <button type="button" class="btn btn-outline-primary offerbtnnew"> Learn more → </button>
    //             </Card.Body>
    //           </CardGroup>
    //         </Card.Body>
    //       </Card>
    //     </div>
    //   </Col>
    // </Row>
  )
}
export default Offercard
