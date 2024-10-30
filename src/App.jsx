import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import CartContextProvider from './components/context/CartContext.jsx';
import UserContextProvider from './components/context/User.jsx';








export default function App() {

  return (
  
    
    <CartContextProvider>

 <UserContextProvider>
      <RouterProvider router={router}  />
  <ToastContainer/>
 </UserContextProvider>

    </CartContextProvider>
  
  )
}
