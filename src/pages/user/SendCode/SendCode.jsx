import { useFormik, validateYupSchema } from 'formik';
import React, { useState } from 'react'
//import { schema } from 'yup';
import * as yup from 'yup'
import style from './SendCode.module.css'
import { FaUser } from "react-icons/fa";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//import { data } from '@remix-run/router';


export default function SendCode() {
  const navigate=useNavigate();
    const schema=yup.object({

        email :yup.string().required().min(5).max(30).email(),
    
      });
  
      async function  sendcode(){
        const {data}=await axios.patch(`https://ecommerce-node4.onrender.com/auth/sendcode`,formik.values);
        console.log(data);
        navigate('/forgetpassword');

      };
const formik=useFormik({
initialValues:{
email:''

},onSubmit:sendcode,
validationSchema:schema


}


);




  return (
    <section className={`${style.parent}`}>
    <div className={`${style.wraper}`}>
      <form action='' onSubmit={formik.handleSubmit}>
        <h1>SendCode</h1>
        <div className={`${style.input_box}`}>
        <input type='text' placeholder='Email' value={formik.email} name='email' onChange={formik.handleChange} required onBlur={formik.handleBlur}/>
        {formik.touched.email && formik.errors.email?<div className={`alert alert-danger ${style.pad}`}>{formik.errors.email}</div>:null}
        <FaUser className={`${style.icon}`}/>
        </div>

      

          
          <button type='submit'>SendCode</button>

        

      </form>



    </div>
    
    </section>
  )
}
