import { Link } from "react-router-dom";

const Brands = ({ brand }) => {
  const { brand_name, brand_image } = brand;
  return (
    <div className="p-1">
      <div className="card w-[390px] mx-auto bg-base-100 shadow-xl ">
        <Link>
        <figure className="p-5">
          <img
            className="h-[300px]"
            src={brand_image}
            alt="Shoes"
            />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-medium text-center">{brand_name}</h2>
        </div>
            </Link>
      </div>
    </div>
  );
};

export default Brands;
