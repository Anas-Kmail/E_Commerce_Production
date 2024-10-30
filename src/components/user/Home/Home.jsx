import React from 'react'
import Categories from '../Categories/Categories.jsx'
import Allproduct from '../Allproduct/Allproduct.jsx'
import style from './Home.module.css'






export default function Home() {







  




  return (
    
    <main className='home'>
      
<Categories/>
<div className={`${style.middle}`}>
<h1>Products</h1>
  
</div>
 <div className={`${style.btn_group}`}>
  
 

<div className={`  btn-group`} role="group">
  <button type="button" className={`btn ${style.btn_dark} btn-dark dropdown-toggle ${style.child}`} data-bs-toggle="dropdown" aria-expanded="false">
    Sort By
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Name</a></li>
    <li><a className="dropdown-item" href="#">Price</a></li>
    <li><a className="dropdown-item" href="#">Discount</a></li>
  </ul>
</div>




 </div>




<Allproduct/>

    </main>
    
  )
}
