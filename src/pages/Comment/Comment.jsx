import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import * as yup from 'yup'
import { useFormik } from 'formik'
import { IoStarSharp } from "react-icons/io5";
import { FaCommentDots } from "react-icons/fa";
import style from './Comment.module.css'
//import { UserContext } from '../../components/context/user';
import axios from 'axios';
import {  Flip, Slide, toast, Zoom } from 'react-toastify';
export default function Comment() {

  const { productId } = useParams();
  console.log(productId);

  const schema = yup.object({

    comment: yup.string().min(5).max(30),
    rating: yup.string().min(1).max(5),

  });

  async function Sendcomment() {
    try{
  const token = localStorage.getItem('userToken');
    console.log(token);
    const { data } = await axios.post(`https://ecommerce-node4.onrender.com/products/${productId}/review`, formik.values, {
      headers: {

        Authorization: `Tariq__${token}`
      }


    });
    if(data.message='success')
      {
  toast.success('Comment has been added.', {
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
  
   

  }


  const formik = useFormik({
    initialValues: {
      comment: '',
      rating: '',


    }, onSubmit: Sendcomment,
    validationSchema: schema



  }

  );








  return (


    <section className={`${style.parent}`}>
      <div className={`${style.wraper}`}>
        <form action='' onSubmit={formik.handleSubmit}>
          <h1>Your Comment</h1>
          <div className={`${style.input_box}`}>
            <input type='text' placeholder='Your Comment' value={formik.comment} name='comment' onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched.comment && formik.errors.comment ? <div className={`alert alert-danger ${style.pad}`}>{formik.errors.comment}</div> : null}
            <FaCommentDots className={`${style.icon}`} />

          </div>

          <div className={`${style.input_box}`}>
            <input type='text' placeholder='Rating{1_5}' value={formik.rating} name='rating' onChange={formik.handleChange} required onBlur={formik.handleBlur} />
            {formik.touched.rating && formik.errors.rating ? <div className={`alert alert-danger ${style.pad}`}>{formik.errors.rating}</div> : null}
            <IoStarSharp className={`${style.icon}`} />


          </div>



          <button type='submit' className={`${style.comment}`}> Comment</button>



        </form>
      </div>

    </section>







  )
}
