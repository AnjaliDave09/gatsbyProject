import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Layout/Layout.css';
import { Link } from "gatsby"
import { Button } from "antd"

const ProgressCard = () => {
  return (
    <div className='container'>
          <div className="merge">
    <img src="./merge.png" alt=" "></img>
    <h1 class="mergeno">200,000+</h1>
    <div class="mergetext">applications received</div>

    <div className="arrow">
      <img src="./arrow.png" alt=" "></img>
    </div>
    
    <div className="mergeno1">10%</div>
    <div className="mergetext1"> 
        clear technical <br></br> assessment
    </div>

    <div className="arrow1">
      <img src="./arrow.png" alt=" "></img>
    </div>

    <div className="mergeno2">5%</div>
    <div className="mergetext2">
      clear remote <br></br> communication <br></br> assessment
    </div>

    <div className="arrow2">
      <img src="./arrow.png" alt=" "></img>
    </div>

    <div className="mergeno3">3%</div>
    <div className="mergetext3">
    undergo our intence 8- <br></br> week training
    </div>

    <div className="arrow3">
      <img src="./arrow.png" alt=" "></img>
    </div>

    <div className="mergeno4" >1%</div>
    <div className="mergetext4">
    developers are curated <br></br> based on perfomance
    <div className="mergebtn">
        <Button value={'large'}>
           <Link to="/Fordeveloper2"> Get Early Access→ </Link>
        </Button>
    </div>
    </div>
   </div>
    </div>
  )
}

export default ProgressCard