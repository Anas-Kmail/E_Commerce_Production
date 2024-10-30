import React, { useContext, useState } from 'react'
import { FaUser } from "react-icons/fa";
import style from './Login.module.css'
import { FaLock } from "react-icons/fa";
import {useFormik} from 'formik'
import axios from 'axios'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import {  Flip, Slide, toast, Zoom } from 'react-toastify';
import { Bounce } from 'react-toastify';
//import { UserContext } from '../../../components/context/user';
import { UserContext } from './../../../components/context/User.jsx';





export default function Login( ) {
  const{setLogin,setUserData}=useContext(UserContext);
  const[iserrors,seterrors]=useState("");
     const navigate=useNavigate();

    const schema=yup.object({

      email :yup.string().required().min(5).max(50).email(),
      password :yup.string().required().min(5).max(50)

    });



  const formik=useFormik({
    initialValues:{
      email:'',
      password:''


    },onSubmit:LoginUser  ,
    validationSchema:schema
    


}

);

async function  LoginUser() {
  try{
  const {data}= await axios.post(`https://ecommerce-node4.onrender.com/auth/signin`,formik.values)
  console.log(data);
  if(data.message=='success')
  {
    localStorage.setItem("userToken",data.token);
    setLogin(true);
    const decoded=jwtDecode(data.token);
    setUserData(decoded);
    toast.success('You have successfully logged in.', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Zoom,
      });
    navigate('/');

    
  }

  }catch(error){
seterrors(error.response.data.message);
toast.error(iserrors, {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  transition: Slide,
  });
    
  }



}





  return (
    <section className={`${style.parent}`}>
    <div className={`${style.wraper}`}>
      <form action='' onSubmit={formik.handleSubmit}>
        <h1>Login</h1>
        <div className={`${style.input_box}`}>
        <input type='email' placeholder='Username&Email' value={formik.email} name='email' onChange={formik.handleChange} required onBlur={formik.handleBlur}/>
        {formik.touched.email && formik.errors.email?<div className={`alert alert-danger ${style.pad}`}>{formik.errors.email}</div>:null}
        <FaUser className={`${style.icon}`}/>
        </div>

        <div className={`${style.input_box}`}>
        <input type='password' placeholder='Password' value={formik.password} name='password' onChange={formik.handleChange} required onBlur={formik.handleBlur}/>
        {formik.touched.password && formik.errors.password?<div className={`alert alert-danger ${style.pad}`}>{formik.errors.password}</div>:null}
        <FaLock className={`${style.icon}`}/>

        </div>

          <div className={`${style.remember_forget}`}>

          <label><input type='checkbox' />Remember me</label>
          <Link to={'/sendcode'} >Forget Password?</Link>
          </div>
          <button type='submit'>Login</button>

          <div className={`${style.register_link}`}>

          <p>Don't have an acount?<Link to={'/register'}>Register</Link></p>

          </div>

      </form>



    </div>
    
    </section>
  )
}
