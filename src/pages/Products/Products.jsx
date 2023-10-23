import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
    const loadedProducts = useLoaderData();
    // console.log(loadedProducts);
    const [products,setProducts]= useState(loadedProducts)
    const brandName = useParams().brand_name;
    useEffect(()=>{
        const filter = products.filter(product => brandName === product.brand)
        setProducts(filter)
    },[])
    
    const exist = products.length;
    // console.log(exist);
    // console.log(products)
    return (
        <div className="bg-[#f1f3f6] min-h-screen">
            <h1 className="text-center text-4xl font-semibold pt-10">Products of {brandName}</h1>
            {
                exist > 0 ? <div className="grid grid-cols-3 container mx-auto gap-14 mt-10 pb-16">
                {
                    products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                }
                </div>:
                <div className="flex flex-col justify-center items-center min-h-[80vh]">
                    
                    <img className="w-[300px]" src="https://i.ibb.co/X3FCfWM/pngwing-com-2.png" alt="" />
                    <div className="text-center p-5 space-y-2">
                        <h1 className="text-3xl font-semibold text-red-600">We Apologize</h1>
                        <p className="text-xl">Currently we do not have any products from {brandName} in our inventory.</p>
                        <p className="text-xl">Please check back later as our product offerings are frequently updated.</p>
                    </div>
                    <Link to={'/'}>
                    <button className="btn bg-blue-600 hover:bg-blue-500 text-white">Go Back</button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default Products;