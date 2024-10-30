import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Check({children}) {
 
    const navigate=useNavigate();
    const token=localStorage.getItem('userToken');
    if(!token){
        navigate('/login');
    }else{
        return children;
    }
 
 
    
  
}
