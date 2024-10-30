import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./User.jsx";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [sum,setsum]=useState("0");
    const [loading, isloading] = useState(true);
    const [error, seterror] = useState(null);
    const [cart, setCart] = useState({});
    const [changeCart, setChangCart] = useState(null);
    
    const [counter,setcounter]=useState(0);
    const getCart = async () => {
        
try{
const token = localStorage.getItem('userToken');    
const { data } = await axios.get(`https://ecommerce-node4.onrender.com/cart/`, {

            headers: {
                Authorization: `Tariq__${token}`
            }

        });
       // console.log(data);
       const totalQuantity=data.products.reduce((acc,product)=>acc+product.quantity,0);
       setcounter(totalQuantity);
        setCart(data);
       

}catch(err){
seterror(err);

}finally{
isloading(false);

}
        
    };

    const getsum=async (productsa)=>{
        let currentsum=0;
{
    
productsa?.map(prod=>{
  
    currentsum+=(prod.quantity*prod.details.finalPrice);




})
      
}
setsum(currentsum);
        

    }




    const increaseQty = async (prodId) => {
        console.log(prodId);
        const token = localStorage.getItem('userToken');
        console.log(prodId);
        const { data } = await axios.patch(`https://ecommerce-node4.onrender.com/cart/incraseQuantity`,
            { "productId": prodId }, {

            headers: {
                Authorization: `Tariq__${token}`
            }
        }
        )
        setChangCart((prev) => prev + 1);
    };

    const decreseQty = async (prodId, proQuantity) => {
        if (proQuantity == 1) return;
        console.log(prodId);
        const token = localStorage.getItem('userToken');
        console.log(prodId);
        const { data } = await axios.patch(`https://ecommerce-node4.onrender.com/cart/decraseQuantity`,
            { "productId": prodId }, {

            headers: {
                Authorization: `Tariq__${token}`
            }
        }
        )
        setChangCart((prev) => prev - 1)
    }
    const RemoveItem = async (ProId) => {
        const token = localStorage.getItem('userToken');
        console.log(ProId)
        const { data } = await axios.patch(`https://ecommerce-node4.onrender.com/cart/removeItem`,
            { "productId": ProId },
            {

                headers: {
                    Authorization: `Tariq__${token}`
                }
            }
        )
        console.log(data)
        setChangCart((prev) => prev - 1)
        setcounter((prev) => prev - 1)
    }
    const addToCart = async (productId) => {
        const token = localStorage.getItem('userToken');
        console.log(token)
        const res = await axios.post(`https://ecommerce-node4.onrender.com/cart/`,
            { productId: productId },
            {
                headers: {
                    Authorization: `Tariq__${token}`
                }

            })
        if (res.data.message == "success") {
            toast.success('🦄 Product is Added successfully', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }

    }
    const clearCart = async () => {
        const token = localStorage.getItem('userToken');
        const { data } = await axios.patch(`https://ecommerce-node4.onrender.com/cart/clear`, {}, {
            headers: {
                Authorization: `Tariq__${token}`
            },
        })
        console.log(data);
        setChangCart(0)
        setcounter(0)
    }
    useEffect(() => {
        let token =localStorage.getItem('userToken');
        if(token){

              getCart();
        }
      
    }, [changeCart])

    return <CartContext.Provider value={{ cart, addToCart, RemoveItem, decreseQty, increaseQty, clearCart,loading,isloading,error,seterror,getsum,sum,counter,setcounter }}>{children} </CartContext.Provider>;
}

export default CartContextProvider;