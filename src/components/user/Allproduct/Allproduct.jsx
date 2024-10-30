import React, {  useEffect, useState } from 'react'
//import usefetchData from '../../../customHooks/usefetchData'
import style from './Allproduct.module.css'
import { Link } from 'react-router-dom'
//import { UserContext } from '../../context/user.jsx'
import axios from 'axios'

export default function Allproduct() {
  const [currentpage, setcurrentpage] = useState(1);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [numofpage, setnumofpage] = useState(1);
  const [arr, setArr] = useState([]);
  const getproduct = async (currentpage) => {
    // const skip = (currentpage - 1) * 5;
    try {

      const { data } = await axios.get(`https://ecommerce-node4.onrender.com/products?page=${currentpage}&limit=3`);
      setProducts(data.products);
      setTotal(data.total);
      setLoading(false);

      const numOfPages = Math.ceil(data.total / 3);
      setnumofpage(numOfPages);
      const pageNumbers = Array.from({ length: numOfPages }, (_, i) => i + 1);
      console.log(pageNumbers)
      setArr(pageNumbers);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }

  }
  useEffect(() => {

    getproduct(currentpage);

  }, [currentpage]);


  /* if(data==null)
   {
     return
   }*/



  /*if(error){
    
       }*/
  //    const{isLogin,setLogin,UserData,setUserData}=useContext(UserContext);


  const handlePageChange = (newPage) => {
    console.log(newPage)
    if (newPage >= 1 && newPage <= numofpage) {
      setcurrentpage(newPage);
    }
  };


  return (

    <>

      <section className={`container ${style.mains} `}>
        {products?.map(prod =>

          <div className={`${style.card}`} >
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
        )
        }
      </section>
      <nav aria-label="Page navigation example contaniner">
        <ul className={`${style.pagination} pagination`}>
          <li className="page-item">
            <button className="page-link" aria-label="Previous" onClick={() => handlePageChange(currentpage - 1)}>
              <span aria-hidden="true" className={`${style.page_link} `}>«</span>
            </button>
          </li>
          {
            arr.map(index =>

              <li className="page-item"><button onClick={() => setcurrentpage(index)} className={`${style.page_link} page-link`} >{index}</button></li>

            )


          }

          <li className="page-item">
            <button className={`${style.page_link} page-link`} aria-label="Next" onClick={() => handlePageChange(currentpage + 1)}>
              <span aria-hidden="true">»</span>
            </button>
          </li>
        </ul>
      </nav>

    </>
  )
}