import { Link } from "react-router-dom";


const ProductCard = ({product}) => {
    const {_id,image, name, brand, type, price, short_description, rating} = product;

    
  return (
    <div className="p-1">
      <div className="card bg-base-100 shadow-xl h-[575px] ">
        <figure className="border-2 bg-blue-100 h-[280px] p-2">
          <img
            className="my-auto h-full mt-5"
            src={image}
          />
        </figure>
        <div className="card-body pt-5">
          <h2 className="card-title">
            {name}
          </h2>
          <div className="text-gray-600 flex flex-col flex-grow">
          <div>
          <p className="text-lg">- Brand : {brand}</p>
          <p className="text-lg">- Type : {type}</p>
          <p className="text-lg">- Price : {price}TK</p>
          <p className="text-lg">- Rating : {rating}/5</p>
          </div>
          </div>
          
          {/* <p>{short_description}</p> */}
          <div className="flex gap-2 justify-center flex-col md:flex-row mt-3 ">
            <Link to={`/brand/${brand}/${_id}`}>
            <button className="btn bg-blue-600 hover:bg-blue-500 text-white">View Details</button>
            </Link>

            <Link to={`/brand/${brand}/update/${name}/${_id}`}>
            <button className="btn bg-blue-600 hover:bg-blue-500 text-white">Update</button>

            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
