import React from "react"
import Header from "../HeaderSide/Header"
import Footerdev from "./Footerdev"
import '../Developers.css'

export default function Layoutdev({ children }) {
  return <div>
  <Header />
    {children}
  <Footerdev />
</div>
}