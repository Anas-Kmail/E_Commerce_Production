import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import style from './Order.module.css'
import {useFormik} from 'formik'
import * as yup from 'yup'
import { CiBarcode } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { data } from '@remix-run/router';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../components/context/User.jsx'
//import { UserContext } from './../../components/context/User';
//import { UserContext } from './../../../components/context/User.jsx';
import {  Flip, Slide, toast, Zoom } from 'react-toastify';
export default function Order() {

  const navigate=useNavigate();
  const{setorder,order}=useContext(UserContext);

  const schema=yup.object({

    couponName :yup.string().min(5).max(30),
    address :yup.string().required().min(4).max(20),
    phone:yup.string().required().min(4).max(20)

  });

  async function  SendRequset(){
    try{

    const token=localStorage.getItem('userToken');
    console.log(token);
const {data}=await axios.post(`https://ecommerce-node4.onrender.com/order`,formik.values,{
headers:{

  Authorization:`Tariq__${token}`
}

});


console.log(data.order);
setorder(data.order);
if(data.message='success')
  {
toast.success('The request is installed.', {
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



  }


navigate('/');




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


  };
  
  
    



  const formik=useFormik({
    initialValues:{
        couponName:'',
        address:'',
        phone:''


    },onSubmit:SendRequset  ,
    validationSchema:schema
    


}

);







  return (
    <section className={`${style.parent}`}>
    <div className={`${style.wraper}`}>
      <form action='' onSubmit={formik.handleSubmit}>
        <h1>Order</h1>
        <div className={`${style.input_box}`}>
        <input type='text' placeholder='couponName' value={formik.couponName} name='couponName' onChange={formik.handleChange}  onBlur={formik.handleBlur}/>
        {formik.touched.couponName && formik.errors.couponName?<div className={`alert alert-danger ${style.pad}`}>{formik.errors.couponName}</div>:null}
        <FaUser className={`${style.icon}`}/>
        </div>

        <div className={`${style.input_box}`}>
        <input type='text' placeholder='address' value={formik.address} name='address' onChange={formik.handleChange} required onBlur={formik.handleBlur}/>
        {formik.touched.address && formik.errors.address?<div className={`alert alert-danger ${style.pad}`}>{formik.errors.address}</div>:null}
        <FaLock className={`${style.icon}`}/>

        

        </div>
        <div className={`${style.input_box}`}>
        <input type='text' placeholder='phone' value={formik.phone} name='phone' onChange={formik.handleChange} required onBlur={formik.handleBlur}/>
        {formik.touched.phone && formik.errors.phone?<div className={`alert alert-danger ${style.pad}`}>{formik.errors.phone}</div>:null}
         <CiBarcode className={`${style.icon}`}/>

        

        </div>



         
          <button type='submit' className={`${style.btn}`}>Install order</button>

         

      </form>



    </div>
    
    </section>
  )
}
