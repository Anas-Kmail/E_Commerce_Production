import {createBrowserRouter} from "react-router-dom"

//import { Children } from "react"
import Home from "../components/user/Home/Home.jsx"
import Register from "../pages/user/Register/Register.jsx";
import Login from "../pages/user/Login/Login.jsx";
import Root from "../assets/Root.jsx";
import CategoryDetails from "../pages/user/CategoryDetails/CategoryDetails.jsx";
import Product from "../pages/user/Product/Product.jsx";
import Cart from "../pages/user/Cart/Cart.jsx";
import Profile from "../pages/user/Profile/Profile.jsx";
import ForgetPassword from "../pages/user/Forgetpassword/ForgetPassword.jsx";
import SendCode from './../pages/user/SendCode/SendCode.jsx';
import ProtectedRouter from "../ProtectedRouter.jsx";
import PublicRoute from "../PublicRoute.jsx";
import Order from "../pages/user/Order/Order.jsx";
import Comment from "../pages/Comment/Comment.jsx";







const router=createBrowserRouter([
{
path:'/',
element:<Root />,
children:[{
path:'/',
element:<ProtectedRouter><Home/></ProtectedRouter> 

},{
path:'/register',
element:<PublicRoute><Register/></PublicRoute>



},{
path:'/login',
element:<PublicRoute><Login  />  </PublicRoute> 


},{
path:'/CategoryDetails/:Category_id',
element:<ProtectedRouter><CategoryDetails/></ProtectedRouter>


},{
path:'/product/:productId',
element:<ProtectedRouter><Product/></ProtectedRouter>


},{
    path:'/cart',
    element:
   <ProtectedRouter><Cart/></ProtectedRouter> 


},{
path:'/profile',
element:<ProtectedRouter><Profile/></ProtectedRouter>



},{
path:'/forgetpassword',
element:<ForgetPassword/>


},{
path:'/sendcode',
element:<SendCode/>


},{
path:'/order',
element:<ProtectedRouter><Order/></ProtectedRouter>


},{
path:'/comment/:productId',
element:<ProtectedRouter><Comment/></ProtectedRouter>



}
]
}

]);
export default router; 