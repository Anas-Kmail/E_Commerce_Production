import React, { useEffect, useState } from 'react';
//import Categories from './../Categories/Categories';
import style from './Navbar.module.css'
import { FaCartPlus } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
//import { UserContext } from '../../context/user.jsx';
import { CgProfile } from "react-icons/cg";
import axios from 'axios';
//import { UserContext } from '../../context/User.jsx';
import ExitConfirmation from '../../ExitConfirmation/ExitConfirmation ';
import { CartContext } from '../../context/CartContext';
import { UserContext } from '../../context/User.jsx';


export default function Navbar( ) {
  const {  cart} = useContext(CartContext);

  
  const{isLogin,setLogin,UserData}=useContext(UserContext);
  const [categories_member,setcategories]=useState([]);
    const{setUserData,counter}=useContext(CartContext);
    console.log(counter)
  

 
  /*const navigate=useNavigate();
  function handleLogout(){
    
    localStorage.removeItem("userToken");
    setLogin(false);
    setUserData({});
    navigate('/login');
    
    
    
    }*/

   const getcategories=async ()=>{
    const token=localStorage.getItem('userToken');
    const {data}=await axios.get(`https://ecommerce-node4.onrender.com/categories`,{
      headers:{
        Authorization:`Tariq__${token}`
    
      }
    });
    setcategories(data);
    console.log(data);
    
    
    
        };

    
 
      useEffect(()=>{


getcategories();

      },[]);
      




  return (
<nav className={`navbar navbar-expand-lg ${style.bg}`}>
  <div className="container">
    <div className={`${style.dflex}`}>
    <FaShopify  fontSize='20px'/>
      <Link to={'/profile'} className={`navbar-brand ${style.iconss}`}> <CgProfile  fontSize='20px'/> {UserData.userName}</Link>
    </div>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
        {isLogin?<>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          
          <Link className="nav-link active" aria-current="page" to={`/`}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={`/`}>Products</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </a>
          <ul className="dropdown-menu">
            {
              categories_member?.categories?.map(categ=>


              <li><Link className="dropdown-item" to={`/CategoryDetails/${categ._id}`}>{categ.name}</Link></li>


              )


            }
            
         
            </ul> 
            </li>
      
            </ul>

        </>:<>
        <ul></ul>
        
        
        </>
        }
        {
              isLogin?<>
            <div className={`${style.flexitem}`}>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className={`${style.buttonaque}`} type="submit">Search</button>
      </form>
      <div className={`${style.flexitem}`}>
    
      <a   > <ExitConfirmation/></a>
      <Link to={'/cart'}><FaCartPlus fontSize='20px' /><span className={`${style.span}`}>{counter}</span></Link>
      </div>
      </div>  
              
              </>:
              <>
                    <div className={`${style.flexitem}`}>
    
      <div className={`${style.flexitem}`}>
      <Link to={`/login`}> Login</Link>
      <Link to={`/register`}> Register</Link>
      
      
      </div>

</div>
              
              
              </>

        }
     
     

    </div>
  </div>
</nav>



   

  )
}
