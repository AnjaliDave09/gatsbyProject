import React from 'react'
import Header from "../HeaderSide/Header"
import Footer2 from './Footer2'

const Layout2 = ({children}) => {
  return (
    <div>
         <Header />
        {children}
         <Footer2 />
    </div>
  )
}

export default Layout2