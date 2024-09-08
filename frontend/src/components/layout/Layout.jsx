import React from 'react'
import Navbar from './Navbar'
const Layout = ({children}) => {
  return (
    <>
<<<<<<< HEAD
      {/* <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div> */}
=======
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
>>>>>>> 3d499b9546485dafc73fa5a0b67f92c91966f5da
      <Navbar></Navbar>
      {children}
      
    </>
  )
}

export default Layout
