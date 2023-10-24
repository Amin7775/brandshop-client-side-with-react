import { useContext, useEffect, useState } from "react";
import CartListProduct from "../../components/CartProduct/CartListProduct";
import { AuthContext } from "../../provider/AuthProvider";


const MyCart = () => {
    const {user} = useContext(AuthContext)
    const [cartProducts,setCartProducts]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/cart')
        .then(res=>res.json())
        .then(data=>{

            setCartProducts(data)
        })
        // const filter = cartProducts.filter(product => product.userEmail === user.email)
    },[])

    console.log(cartProducts)
    return (
        
        <div className="min-h-screen bg-[#f1f3f6]">
            <h1 className="text-4xl font-medium text-center py-8">Cart List</h1>
            {/* <p className="text-center">User: {user.displayName} <span>({user.email})</span></p> */}
            <div className="w-1/2 border-4 border-x-0 border-t-0 border-slate-200 mx-auto mt-2 mb-5 h-full">
            {
                cartProducts.map(product => <CartListProduct key={product._id} product={product}></CartListProduct>)        
            }
            </div>
            <div className="mx-auto container w-1/2">

            <button className="btn w-full bg-blue-600 text-white hover:bg-blue-500">Checkout</button>
            </div>
        </div>
    );
};

export default MyCart;