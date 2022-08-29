import React from "react"
import Footer from "../Footer/Footer"
import Header from "../HeaderSide/Header"
import '../Layout/Layout.css'

export default function Layout({ children }) {
  return <div>
  <Header />
    {children}
  <Footer/>
    </div>
}