import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/user/Navbar/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../components/user/Footer/Footer.jsx'
import Line from '../components/user/Line/Line.jsx'
import { useNavigate } from 'react-router-dom';


export default function Root() {



  return (
   <>
  <Navbar />
<Outlet />
  <Line/>
  <Footer/>
   
   
   
   
   
   </>
   
  )
}
