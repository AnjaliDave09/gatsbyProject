import React, { useState } from "react"
import "../Developers/developer.css"
import "bootstrap/dist/css/bootstrap.min.css"
const Checkbox = () => {
  const [color, setcolor] = useState('');

  const setStyle = (color) => {
    setcolor(color); 
  };

const [selectedOption, setselectedOption] = useState(" ");
const [isDisabled, setIsDisabled] = useState(false);

const handleOptionChange = event => {
  setIsDisabled(!isDisabled)
  let imgData = document.getElementById("img1")
  if (event.target.value === "Uplift your Engineering Skills") {
    imgData.setAttribute("src", "Uplift.png")
  } else if (event.target.value === "Exposure to Product Management") {
    imgData.setAttribute("src", "Product.png")
  } else if (event.target.value === "Learn to design own Products") {
    imgData.setAttribute("src", "Learn.png")
  } else if (event.target.value === "Placement Support") {
    imgData.setAttribute("src", "Graphcard.png")
  }
}

  return (
    <div className="container">
      <div className="producteng">Product Engineering</div>
      <div className="productdis"> We make you a complete all-round professional.</div>
      <div className="graphcard">
        <div>
          <img id="img1" src="Graphcard.png" alt=" "></img>
        </div>
        <div className="allgraphcard container">

          <div class="set" disabled={isDisabled}>
            <input
              class="form-check-input"
              type="radio"
              id="flexRadioDefault1"
              value="Placement Support"
              checked={selectedOption === "Placement Support"}
              onChange={handleOptionChange}
            />
            <label class="form-check-label" for="flexRadioDefault1">
              {" "}
              Placement Support{" "}
            </label>
            <br></br>
            <h3 className="graphtext">
              Set yourself apart using placement <br></br> modules. Our numbers
              talk.
            </h3>
          </div>

          <div class="set" disabled={isDisabled}>
            <input
              class="form-check-input"
              type="radio"
              id="flexRadioDefault2"
              value="Uplift your Engineering Skills"
              checked={selectedOption === "Uplift your Engineering Skills"}
              onChange={handleOptionChange}
            />
            <label class="form-check-label" for="flexRadioDefault2">
              {" "}
              Uplift your Engineering Skills{" "}
            </label>
            <br></br>
            <h3 className="graphtext">
              Learn from your seniors to reduce <br></br> unknown unknowns.
            </h3>
          </div>

          <div class="set">
            <input
              class="form-check-input"
              type="radio"
              id="flexRadioDefault3"
              value="Exposure to Product Management"
              checked={selectedOption === "Exposure to Product Management"}
              onChange={handleOptionChange}
            />
            <label class="form-check-label" for="flexRadioDefault3">
              {" "}
              Exposure to Product Management{" "}
            </label>
            <h3 className="graphtext">
              Learn about writing detailed PRDs before <br></br> you start
              coding.
            </h3>
          </div>

          <div class="set">
            <input
              class="form-check-input"
              type="radio"
              id="flexRadioDefault4"
              value="Learn to design own Products"
              checked={selectedOption === "Learn to design own Products"}
              onChange={handleOptionChange}
            />
            <label class="form-check-label" for="flexRadioDefault4">
              {" "}
              Learn to design own Products{" "}
            </label>
            <h3 className="graphtext">
              Learn the basics of design to have <br></br> empathy with your
              colleagues
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Checkbox