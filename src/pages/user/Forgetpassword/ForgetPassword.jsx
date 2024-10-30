import axios from 'axios'
import React from 'react'
//import { UserContext } from './../../../components/context/User.jsx';
import style from './ForgetPassword.module.css'
import {useFormik} from 'formik'
import * as yup from 'yup'
import { CiBarcode } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
//import { data } from '@remix-run/router';
import { useNavigate } from 'react-router-dom';

export default function ForgetPassword() {

  const navigate=useNavigate();


  const schema=yup.object({

    email :yup.string().required().min(5).max(30).email(),
    password :yup.string().required().min(4).max(20),
    code:yup.string().required().min(4).max(20)

  });

  async function  Changepassord(){
    const {data}=await axios.patch(`https://ecommerce-node4.onrender.com/auth/forgotPassword`,formik.values);
    console.log(data);
    navigate('/login');

  };
  
    



  const formik=useFormik({
    initialValues:{
      email:'',
      password:'',
      code:''


    },onSubmit:Changepassord  ,
    validationSchema:schema
    


}

);







  return (
    <section className={`${style.parent}`}>
    <div className={`${style.wraper}`}>
      <form action='' onSubmit={formik.handleSubmit}>
        <h1>Reset Password</h1>
        <div className={`${style.input_box}`}>
        <input type='email' placeholder='Email' value={formik.email} name='email' onChange={formik.handleChange} required onBlur={formik.handleBlur}/>
        {formik.touched.email && formik.errors.email?<div className={`alert alert-danger ${style.pad}`}>{formik.errors.email}</div>:null}
        <FaUser className={`${style.icon}`}/>
        </div>

        <div className={`${style.input_box}`}>
        <input type='password' placeholder='Password' value={formik.password} name='password' onChange={formik.handleChange} required onBlur={formik.handleBlur}/>
        {formik.touched.password && formik.errors.password?<div className={`alert alert-danger ${style.pad}`}>{formik.errors.password}</div>:null}
        <FaLock className={`${style.icon}`}/>

        

        </div>
        <div className={`${style.input_box}`}>
        <input type='text' placeholder='Code' value={formik.code} name='code' onChange={formik.handleChange} required onBlur={formik.handleBlur}/>
        {formik.touched.password && formik.errors.password?<div className={`alert alert-danger ${style.pad}`}>{formik.errors.password}</div>:null}
         <CiBarcode className={`${style.icon}`}/>

        

        </div>



         
          <button type='submit'>Rest Password</button>

         

      </form>



    </div>
    
    </section>
  )
}
