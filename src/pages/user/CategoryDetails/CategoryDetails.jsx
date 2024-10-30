import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
//import usefetchData from '../../../customHooks/usefetchData.jsx';
import ClipLoader from "react-spinners/ClipLoader";
import style from './CategoryDetails.module.css'
import usefetchData from './../../../customHooks/useFetchData.jsx';


export default function CategoryDetails() {
const[products,setproducts]=useState([]);
const {Category_id}=useParams();


/*const getproduct=async ()=>{
const {data}=await axios.get(`https://ecommerce-node4.onrender.com/products/category/${Category_id}`);
setproducts(data.products);
console.log(useParams());



}
useEffect(()=>{

getproduct();

},[])
*/
const {data,loading,error}=usefetchData(`https://ecommerce-node4.onrender.com/products/category/${Category_id}`);
if(loading){
  return (
    <div className={`${style.loader}`}>
  <ClipLoader
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

    <section className={`container ${style.mains} `}>
  {data?.products.map(prod=>
    
<div className={`${style.card} `}>
  <div className={`${style.cardp}`}>
  <img className={`${style.card_image}`} src={prod.mainImage.secure_url} alt='Can,t found the image' />
  <h2 className={`${style.main}`}>Product Name</h2>
<h3 className={`${style.title}`}>{prod.name}</h3>
<span className={`${style.price}`}>Price</span>
<div className={`${style.price}`}>
<p>$</p><span className={`${style.speical}`}>{prod.price}</span>

</div>
<Link to={`/product/${prod._id}`} className={`${style.link}`} >More Deatils</Link>
</div>


</div>




)}



</section>


  )
}
