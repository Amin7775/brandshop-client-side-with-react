import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const ProductBanner = ({ products }) => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    lazyLoad: true,
    speed: 2500,
  };
  console.log("From Banner", products);
  //   const {} = products;
  return (
    <div className=" p-1">
      <Slider {...settings} className="mx-5 border-2">
        <div className="bg-[#337CCF] h-96 p-1">
          <div className="container mx-auto h-full">
            <div className="grid grid-cols-2  h-full">
              <div className="my-auto space-y-3">
                <h3 className="text-white text-center text-4xl w-full ">
                  {products[0].name}
                </h3>
                <div className="flex w-full justify-center">
                  <Link to={`/brand/${products[0].brand}/${products[0]._id}`}>
                    <button className="btn text-center  bg-white text-black border-0">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
              <div className="w-full ">
                <img
                  className="mx-auto my-auto p-2 h-[370px]  "
                  src={products[0].image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* //0081C9 */}
        <div className="bg-[#337CCF] h-96 p-1">
          <div className="container mx-auto h-full">
            <div className="grid grid-cols-2  h-full">
              <div className="my-auto space-y-3">
                <h3 className="text-white text-center text-4xl w-full ">
                  {products[1].name}
                </h3>
                <div className="flex w-full justify-center">
                  <Link to={`/brand/${products[1].brand}/${products[1]._id}`}>
                    <button className="btn text-center  bg-white text-black border-0">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
              <div className="w-full ">
                <img
                  className="mx-auto my-auto p-2 h-[370px]  "
                  src={products[1].image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#337CCF] h-96 p-1">
          <div className="container mx-auto h-full">
            <div className="grid grid-cols-2  h-full">
              <div className="my-auto space-y-3">
                <h3 className="text-white text-center text-4xl w-full ">
                  {products[2].name}
                </h3>
                <div className="flex w-full justify-center">
                  <Link to={`/brand/${products[2].brand}/${products[2]._id}`}>
                    <button className="btn text-center  bg-white text-black border-0">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
              <div className="w-full ">
                <img
                  className="mx-auto my-auto p-2 h-[370px]  "
                  src={products[2].image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ProductBanner;
