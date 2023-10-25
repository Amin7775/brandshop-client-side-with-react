import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLoaderData } from "react-router-dom";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const loadedCart = useLoaderData();
  const [cartProducts, setCartProducts] = useState(loadedCart);
//   const filter = cartProducts.filter(product=> product.userEmail == user.email)
//   console.log(filter)
  
  const handleDelete = (_id) => {
    console.log(_id)
    fetch(`https://b8a10-brandshop-server-side-amin7775-o7m8p11w0.vercel.app/cart/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          const remaining = cartProducts.filter(
            (cartProduct) => cartProduct._id !== _id
          );
         setCartProducts(remaining)
        }
      });
  };

  return (
    <div className="min-h-screen bg-[#f1f3f6] px-5 md:px-4">
      <h1 className="text-4xl font-medium text-center py-8">Cart List</h1>
      {/* <p className="text-center">User: {user.displayName} <span>({user.email})</span></p> */}
      <div className="w-full lg:w-1/2 border-4 border-x-0 border-t-0 border-slate-200 mx-auto mt-2 mb-5 h-full">
        {cartProducts.map((product) => (
          <div
            key={product._id}
            className="border-t-4 border-slate-200 w-full"
          >
            <div className="grid grid-cols-6 gap-0  w-full">
              <div className="p-5 bg-blue-200 w-full col-span-2 md:col-span-1  flex justify-center items-center">
                <img className="my-auto w-40" src={product.image} alt="" />
              </div>
              <div className="border-blue-400 border-5 col-span-3 md:col-span-4 pl-5 flex flex-col justify-center py-2">
                <p className="text-base md:text-lg md:font-medium "><span className="font-medium">Name:</span> {product.name}</p>
                <p className=" md:font-medium"><span className="font-medium">Brand:</span> {product.brand}</p>
                <p className=" md:font-medium"><span className="font-medium">Type:</span> {product.type}</p>
              </div>
              
            <div className="flex flex-col h-full justify-center items-end">
              <p className="font-medium ">{product.price} TK</p>
              <button
                onClick={() => handleDelete(product._id)}
                className="font-medium text-purple-600"
              >
                Delete
              </button>
            </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto container w-1/2">
        <button className="btn w-full mb-16 bg-blue-600 text-white hover:bg-blue-500">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default MyCart;
