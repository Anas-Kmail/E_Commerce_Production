import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function usefetchData(url) {
const [data,setData]=useState(null);
const [loading,isloading]=useState(true);
const [error,seterror]=useState(null);
    const fetchData=async()=>{
try{

const {data}= await axios.get(url); 
setData(data);
seterror(null);
}catch(err){
seterror(err);



}finally{

isloading(false);


}
    }
useEffect(()=>{

fetchData();
},[url])

return {data,loading,error};



  
}
