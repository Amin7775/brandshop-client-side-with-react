import { useLoaderData} from "react-router-dom";

const ProductDetails = () => {
  const loadedProduct = useLoaderData();
  console.log(loadedProduct);
  const { image, name, brand, type, price, short_description, rating } =
    loadedProduct;
  return (
    <div className="bg-[#f1f3f6] py-10 px-3 md:px-5 lg:px-0">
      <div className=" container mx-auto card lg:card-side bg-base-100 shadow-xl lg:grid lg:grid-cols-2">
        <figure className="bg-blue-200">
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
            <button className="btn bg-blue-600 text-white">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
