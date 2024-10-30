import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import style from './Cart.module.css'
//import { date } from 'yup';
import { CartContext } from '../../../components/context/CartContext.jsx';
import { FaArrowCircleUp } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import CreativeClearall from './CreativeClearall';
import { Navigate, useNavigate } from 'react-router-dom';
//import { UserContext } from '../../../components/context/User.jsx';

export default function Cart() {
 const navigate=useNavigate();
  const { clearCart, cart, addToCart, RemoveItem, loading, isloading, error, seterror, increaseQty, decreseQty, getsum, sum,counter,setcounter } = useContext(CartContext);
 
  let i = 0;

  // const getCart = async () => {
  //   try {
  //     const token = localStorage.getItem("userToken");
  //     const { data } = await axios.get(`https://ecommerce-node4.onrender.com/cart/`, {
  //       headers: {
  //         Authorization: `Tariq__${token}`
  //       }
  //     }

  //     )
  //     setData(data);
  //   } catch (err) {
  //     seterror(err);

  //   } finally {

  //     isloading(false);
  //   }

  // }
  useEffect(() => {
    isloading(false);
  }, [cart]);




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
  //console.log(cart);

  // const clearall = async () => {
  //   try {
  //     const token = localStorage.getItem("userToken");
  //     console.log(token);

  //     const { data } = await axios.patch(`https://ecommerce-node4.onrender.com/cart/clear`, {

  //       headers: {

  //         Authorization: `Tariq__${token}`

  //       }

  //     });


  //   } catch (err) {

  //     //console.log(err);

  //   }

  //   console.log(data);




  // }
  
  function sendorder(){
   
navigate('/order');



  }






  return (

    <div className={`container my-5`}>
      <div className={`${style.parent_h}`}>
      <button className={`${style.btn_height}`} onClick={sendorder}>Send Order</button>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col" className={`${style.fontText}`}> Image</th>

            <th scope="col" className={`${style.fontText}`}>Discount</th>

            <th scope="col" className={`${style.fontText}`}>Subtotal</th>
            <th scope="col" className={`${style.fontText}`}>Quantity</th>
            <th scope="col" className={`${style.fontText}`}></th>

          </tr>
        </thead>
        <tbody>
          {
            cart?.products?.map(det =>

              <tr key={det._id}>
                <th className={`${style.mainimage} d-flex gap-2 `} scope="row"><img src={det.details.mainImage.secure_url} /> <div className="d-grid grid-template-columns">
                  <span className={`${style.fontText}`}>{det.details.name.split(' ').slice(0, 2).join(' ')} ...</span>
                  <span className={`${style.fontText}`}>{det.details.price}$</span>
                </div></th>
                <td className={`${style.fontText}`}>{det.details.discount}</td>
                <td className={`${style.fontText}`}>{det.details.finalPrice}$</td>
                <td >
                  <div className={`${style.btn_arrow}`}>
                    <span>{det.quantity}</span>
                    <div className={`${style.Child_arrow}`}>
                      <button onClick={() => increaseQty(det.productId)}><FaArrowCircleUp /></button>
                      <button onClick={() => decreseQty(det.productId, det.quantity)}><FaArrowCircleDown /></button>
                    </div>
                  </div>
                </td>
                <th scope="row" ><button onClick={() => RemoveItem(det.productId)}><MdDelete />
                </button></th>
              </tr>
            )
          }
        </tbody>
        <tfoot>
          <tr >
            <td>  <button className={`${style.btn_cal}`} onClick={() => getsum(cart.products)}>Calculate the sum</button></td>
            <td>  <span>{sum}</span></td>
          </tr>
        </tfoot>
      </table>
      <div className={`${style.btn}`}>
        <CreativeClearall/>
      </div>
</div>
    </div>

  )
}


