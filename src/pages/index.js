import React from "react"
import "../components/HeaderSide/Header.css"
import Workemail from "../components/Workemail"
import "antd/dist/antd.css"
import Layout from "../components/Layout/Layout"
import CardHeading from "../components/Companies/CardHeading"
import Cardadd from "../components/Companies/Cardadd"
import NewCards from "../components/Companies/NewCards"
import "bootstrap/dist/css/bootstrap.min.css"
import ProgressCard from "../components/Companies/ProgressCard"
import Bluecard from "../components/Companies/Bluecard"

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="contanier">
          <div className="container">
            <div className="nextone">
              <div class="settext1">
                Your gateway <br></br> to global talent.
              </div>
              <div class="setext2">
                Find curated React Developers <br></br> with timezone overlap
              </div>
              <Workemail />
            </div>
          </div>

          <div className="container">
            <div class="setlogo">
              <img src="/vector.png" alt=" " />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="setext4">Trusted by Silicon Valley Brands</div>
          <CardHeading />
        </div>
        <div className="container">
          <div className="setext5">Curation process</div>
          <div className="setext6">
            We vet & train developers so you can focus on building
          </div>
          <div className="container">
            <ProgressCard />
          </div>
        </div>
        <div className="container">
          <div className="setext7">How it works</div>
          <div className="setext8">
            Review open source code before you start interviewing someone
          </div>
          <Cardadd />
        </div>
        <div className="container">
          <Bluecard />
        </div>
        <div className="container">
          <div className="setext9">People who backed us</div>
          <div className="setext10">See what they have to say</div>
          <NewCards />
        </div>
      </Layout>
    </div>
  )
}
