

const ProductCard = ({product}) => {
    const {image, name, brand, type, price, short_description, rating} = product;

    
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="border-2 bg-blue-100">
          <img
            className="my-auto h-full mt-5"
            src={image}
          />
        </figure>
        <div className="card-body pt-5">
          <h2 className="card-title">
            {name}
          </h2>
          <div className="text-gray-600">
          <p className="text-lg">- Brand : {brand}</p>
          <p className="text-lg">- Type : {type}</p>
          <p className="text-lg">- Price : {price}TK</p>
          <p className="text-lg">- Rating : {rating}/5</p>
          </div>
          
          {/* <p>{short_description}</p> */}
          <div className="flex gap-2 justify-center flex-col md:flex-row mt-3">
            <button className="btn bg-blue-600 text-white">View Details</button>
            <button className="btn bg-blue-600 text-white">Add To Cart</button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
