import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './Categories.module.css'
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/effect-fade';
import { EffectFade } from 'swiper/modules';
import {  CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
//import usefetchData from '../../../customHooks/usefetchData';
import usefetchData from './../../../customHooks/useFetchData.jsx';


export default function Categories() {

const {data,loading,error}=usefetchData(`https://ecommerce-node4.onrender.com/categories`)
if(loading){
  return (
    <div className={`${style.loader}`}>
  <ClipLoader className='middle'
        color={'##000000'}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      
      </div>
    )
    }

    if(error){
 return <h2 className='alert-danger'>{error}</h2>
    }

    
  return (
    <section className='categories'>
     <Swiper 
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade]}
      spaceBetween={10}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
{data?.categories.map(categorys=> 
<SwiperSlide className={`${style.padpy} container` }>

<div className='category' key={categorys._id}> 
<Link to={`/CategoryDetails/${categorys._id}`} >

  <img src={categorys.image.secure_url} className={`${style.changewidth}`}/>
 </Link>
 </div>
  
</SwiperSlide>


)}
  
</Swiper>


 </section>
  )

}