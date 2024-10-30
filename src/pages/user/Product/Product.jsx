import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
//import usefetchData from '../../../customHooks/usefetchData';
import style from './Product.module.css'
import usefetchData from './../../../customHooks/useFetchData.jsx';
import {  Flip, Slide, toast, Zoom } from 'react-toastify';
//import { UserContext } from '../../../components/context/User.jsx';
import { CartContext } from '../../../components/context/CartContext.jsx';


export default function Product() {


  const { productId } = useParams();
  console.log(productId);
  const{setcounter}=useContext(CartContext);






  /*const getprooduct1=async()=>{
  const {data}=await axios.get(`https://ecommerce-node4.onrender.com/products/${productId}`)
  console.log(data.Product)
  setproducts(data.product)
  setimage(data.product.subImages);
  console.log(productsimage);
  
  
  }
  
  useEffect(()=>{
  getprooduct1();
  
  
  },[])*/

  const { data, loading, error } = usefetchData(`https://ecommerce-node4.onrender.com/products/${productId}`);
  console.log(data);


  if (loading) {
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

  if (error) {
    return <h2 className='alert-danger'>{error}</h2>
  }

  const addToCart = async () => {
    try{
 const token = localStorage.getItem("userToken");

    const { data } = await axios.post(`https://ecommerce-node4.onrender.com/cart/`, { productId },
      {
        headers: {
          Authorization: `Tariq__${token}`

        }
      }
    )
    if(data.message='success')
    {
toast.success('Product has been added.', {
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

        setcounter((prev) => prev + 1);

    }
    



    }catch(err){
      console.log(err);
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



  return (
    <>
      <section className={`${style.product} container`} >
        <div className={`${style.parent}`}>
          <div className={`${style.child}`}>
            <div className={`${style.images_dflex}`}>
              {data.product.subImages.map(image =>
                <div key={image.public_id} className={`${style.modify_img}`}>
                  <img src={image.secure_url} />

                </div>

              )
              }

            </div>

          </div>

          <div className={`${style.child}`}>
            <h1 className={`text-center ${style.changecolor}`}>Product Name</h1>
            <h2 className={`${style.changewid} ${style.changecolor}`}>{data.product.name}</h2>
            <h2 className={`${style.changewid} ${style.changecolor} text-center`}>Deatils About The Product</h2>
            <p className={`text-center ${style.changecolor}`}>{data.product.description.split(' ').slice(0, 40).join(' ')}...</p>
            <div className={`${style.addcart}`}>
              <span className={`${style.changecolor}`}>${data.product.price}</span>
              <button className={`${style.changecolor_btn}`} onClick={addToCart}>Add To Cart</button>
              <Link className={`${style.changecolor_btn_L}`} to={`/comment/${productId}`} >Add Your Comment</Link>
            </div>
          </div>

        </div>






      </section>
    </>
  )
}



