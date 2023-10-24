const CartListProduct = ({ product }) => {
  const { loadedProduct } = product;
  const { _id, image, name, brand, type, price, short_description, rating } =
    loadedProduct;

    
  return (
    <div className="border-t-4 border-slate-200 border- flex justify-between items-center">
      <div className="flex gap-3 items-center w-11/12">
        <div className="p-5 w-48  bg-blue-200">
          <img className="my-auto border-5" src={image} alt="" />
        </div>
        <div>
          <p className="text-lg font-medium">Name: {name}</p>
          <p className="font-medium">Brand: {brand}</p>
          <p className="font-medium">Type: {type}</p>
        </div>
      </div>
      <div className="flex flex-col h-full justify-between items-end">
        <p className="font-medium ">{price} TK</p>
        <button  className="font-medium text-purple-600">Delete</button >
      </div>
    </div>
  );
};

export default CartListProduct;