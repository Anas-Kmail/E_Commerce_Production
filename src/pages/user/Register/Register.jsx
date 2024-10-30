import React from 'react'
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {useFormik} from 'formik'
import axios from 'axios'
import style from './Register.module.css'
//import values from './../../../../node_modules/lodash-es/values';
import * as yup from 'yup'
import {  Flip, Slide, toast, Zoom } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigte=useNavigate();

  const schema=yup.object({
    userName:yup.string().required().min(5).max(50),
    email :yup.string().required().min(5).max(50).email(),
    password :yup.string().required().min(5).max(50)

  });



  const formik=useFormik({
      initialValues:{
        userName:'',
        email:'',
        password:''


      },onSubmit: async(values)=>{
        try{

  const {data}= await axios.post(`https://ecommerce-node4.onrender.com/auth/signup`,formik.values)
          console.log(data);
        if(data.message=='success'){
         
          toast.success('The account has been created.', {
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
        }catch(err){

          toast.error(`${err.response.data.message}`, {
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


      },validationSchema:schema


  }

  );
 

  return (
    <section className={`${style.parent}`}>
    <div className={`${style.wraper}`}>
      <form action='' onSubmit={formik.handleSubmit} >
        <h1>Register</h1>
        <div className={`${style.input_box}`}>
        <input type='text' placeholder='Username'  required name='userName' value={formik.userName} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.userName && formik.errors.email?<div className={`alert alert-danger ${style.pad}`}>{formik.errors.userName}</div>:null}
        <FaUser className={`${style.icon}`}/>
        </div>
        <div className={`${style.input_box}`}>
        <input type='email' placeholder='Email'  required name='email' value={formik.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.email && formik.errors.email?<div className={`alert alert-danger ${style.pad}`}>{formik.errors.email}</div>:null}
        <MdEmail className={`${style.icon}`}/>
        </div>

        <div className={`${style.input_box}`}>
        <input type='password' placeholder='Password'  required name='password' value={formik.password} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        {formik.touched.password && formik.errors.email?<div className={`alert alert-danger ${style.pad}`}>{formik.errors.password}</div>:null}
        <FaLock className={`${style.icon}`}/>

        </div>
          <button type='submit'>Register</button>

        

      </form>



    </div>
    
    </section>
 




  )
}
