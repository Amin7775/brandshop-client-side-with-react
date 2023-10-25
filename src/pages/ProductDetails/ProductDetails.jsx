import { useContext } from "react";
import { useLoaderData} from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const loadedProduct = useLoaderData();
  const {user}=useContext(AuthContext)
  // console.log(loadedProduct);
  const { _id,image, name, brand, type, price, short_description, rating } =
    loadedProduct;


    const handleAddToCart = () =>{
      const userEmail = user.email;
      const cartDataForDB = {
        product_id:_id,image, name, brand, type, price, short_description, rating,
        userEmail
      }

      fetch('http://localhost:5000/cart',{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body: JSON.stringify(cartDataForDB)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `${name} ${type} has been added to your cart`,
          showConfirmButton: true,
        })
      })

    }
  return (
    <div className="bg-[#f1f3f6] py-10 px-5">
      <div className=" container mx-auto card lg:card-side bg-base-100 shadow-xl lg:grid lg:grid-cols-2">
        <figure className="bg-blue-200 p-5 lg:p-10 max-h-[600px]">
          <img src={image} alt="Album" />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-end">
            <div className="badge badge-outline bg-blue-600 text-white text-lg p-3">{brand}</div>
            <div className="badge badge-outline bg-blue-600 text-white text-lg p-3">{type}</div>
          </div>
          <div className="flex flex-col flex-grow">
          <div className="space-y-2">
          <h2 className="card-title text-2xl">{name}</h2>
          <p className="text-lg font-medium">Price : {price} TK</p>
          <p className="text-lg font-medium">Rating : {rating}/5</p>
          <p className="text-lg font-medium">Description : </p>

          <p className="flex-grow">{short_description}</p>
          </div>
          </div>
          <div className="card-actions justify-end">
            <button onClick={()=>handleAddToCart()} className="btn bg-blue-600 hover:bg-blue-500 text-white">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
