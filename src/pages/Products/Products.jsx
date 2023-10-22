import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
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
    
    // console.log(products)
    return (
        <div className="bg-[#f1f3f6]">
            products of : {brandName}
            {
                products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
            }
        </div>
    );
};

export default Products;