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
    fetch(`http://localhost:5000/cart/${_id}`, {
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
    <div className="min-h-screen bg-[#f1f3f6]">
      <h1 className="text-4xl font-medium text-center py-8">Cart List</h1>
      {/* <p className="text-center">User: {user.displayName} <span>({user.email})</span></p> */}
      <div className="w-1/2 border-4 border-x-0 border-t-0 border-slate-200 mx-auto mt-2 mb-5 h-full">
        {cartProducts.map((product) => (
          <div
            key={product._id}
            className="border-t-4 border-slate-200 border- flex justify-between items-center"
          >
            <div className="flex gap-3 items-center w-11/12">
              <div className="p-5 w-48  bg-blue-200">
                <img className="my-auto border-5" src={product.image} alt="" />
              </div>
              <div>
                <p className="text-lg font-medium">Name: {product.name}</p>
                <p className="font-medium">Brand: {product.brand}</p>
                <p className="font-medium">Type: {product.type}</p>
              </div>
            </div>
            <div className="flex flex-col h-full justify-between items-end">
              <p className="font-medium ">{product.price} TK</p>
              <button
                onClick={() => handleDelete(product._id)}
                className="font-medium text-purple-600"
              >
                Delete
              </button>
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
