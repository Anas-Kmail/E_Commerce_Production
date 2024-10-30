import { data } from '@remix-run/router';
//import axios from 'axios'
import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState,useContext } from 'react'
import style from './Profile.module.css'
import { UserContext } from './../../../components/context/User.jsx';
export default function Profile() {


const{user,getuser,order}=useContext(UserContext);
//console.log(user);
/*const getuser=async ()=>{
    const token=localStorage.getItem('userToken');
const {data}=await axios.get(`https://ecommerce-node4.onrender.com/user/profile`,{
    headers:{

        Authorization:`Tariq__${token}`
    }


});
console.log(data);
setuser(data.user);









}*/

/*
useEffect(()=>{

getuser();

},[user]);
console.log(user);*/


console.log(order);




  return (
    <div className='container my-5'>
        <div className={`${style.title_table}`}>
         <h1>User Information</h1>
         </div>
     <table className="table">
       
  <thead>
    <tr className='row mb-3 '>
      <th scope="col" className='col-lg-2 col-sm-6'>Username</th>
      <th scope="col" className='col-lg-2 col-sm-6'>Email</th>
      <th scope="col" className='col-lg-2 col-sm-6'>ConfirmEmail</th>
      <th scope="col" className='col-lg-2 col-sm-6'>Role</th>
      <th scope="col" className='col-lg-2 col-sm-6'>CreatedAt</th>
    </tr>
  </thead>
  <tbody >

    <tr key={user._id} className='row mb-3 '>
        
      
      <td className='col-lg-2 col-sm-6'>{user?.userName}</td>
      <td className={`col-lg-2 ${style.change_width} col-sm-6 `}>{user?.email}</td>
      {user.confirmEmail?<td className='col-lg-2 col-sm-6'>True</td>:<td className='col-lg-2 col-sm-6'>True</td>}
      <td className='col-lg-2 col-sm-6'>{user?.role}</td>
      <td className='col-lg-2 col-sm-6'>{user?.createdAt}</td>
      
    </tr>
 
  </tbody>
</table>
     




    </div>
  )
}
