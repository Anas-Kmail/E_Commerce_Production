import React from 'react'
import style from './Footer.module.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';



export default function Footer() {
  return (
    <section className={`  ${style.background}`}>
      <div className={`${style.parent} container row m-auto `} >
        <div className={`${style.child_1} col-lg-2 `}>
          <div>

            <h3>
              Keep In Touch
            </h3>
            <div className={`${style.icons}`}>
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              <FaTiktok />
            </div>
          </div>
          {/* <div className={${style.child_1A}}>

            <h2>Contact With Us!</h2>
            <form>

              <div className={${style.input}}>
                <input type='text' placeholder='Name' required />
                <FaUser />
              </div>
              <div className={${style.input}}>
                <input type='email ' placeholder='Email ' required />
                <MdEmail />

              </div >

              <div className={${style.input_area}}>
                <label><input type='checkbox' />I give permission to store the above data and use it to contact me</label>
                <textarea></textarea>
                <button type='submit'>Submit</button>

              </div>


            </form>



          </div> */}

          <div>


          </div>



        </div>
        <div className='col-lg-1'>

        </div>

        <div className={`${style.child_2} col-lg-4 `}>
          <h2>Contact Us</h2>
          <div className={`${style.close}`}>
            <IoCall />
            <span> (+972) 568 479 697</span>


          </div>
          <div className={`${style.close}`}>
            <MdEmail />
            <span>annaskmail2k@gmail.com</span>


          </div>
          <div className={`${style.close}`}>
            <FaLocationDot />
            <span>Jenin , Around Of Rami Center Group </span>
          </div>


        </div>
        <div className={`${style.child_3 } col-lg-3 `}>

          <div>Links</div>

          <div className={`${style.closeEnd}`} >
            <Link to={'/'}>Home</Link>
            <Link to={'/register'}>Login</Link>
            <Link >Logout</Link>
          </div>
        </div>
        </div>
   
   
      
    </section>
  )
}