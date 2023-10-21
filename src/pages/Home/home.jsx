import { useLoaderData } from "react-router-dom";
import Blogs from "../../components/Blogs/Blogs";
import Banner from "../../components/Header/Banner";
import MarqueeDetails from "../../components/Marquee/MarqueeDetails";
import Services from "../../components/services/Services";
import Brands from "../../components/Brands/Brands";


const Home = () => {
    const brandLoader = useLoaderData()

    return (
        <div className="bg-[#f1f3f6] ">
            <Banner></Banner>
            <MarqueeDetails></MarqueeDetails>
            <div className="container mx-auto pb-5">
                <h1 className="mt-0 text-center text-4xl font-medium mb-10">Brands : {brandLoader.length}</h1>
                <div className="grid grid-cols-3 gap-10 p-1">
                    {
                        brandLoader.map(brand=> <Brands key={brand._id} brand={brand}></Brands>)
                    }
                </div>
            </div>
            <div className="bg-[#fafbfb] mt-10 mb-10 pb-5">
                <h1 className="py-5 text-center text-4xl font-medium">Our Services</h1>
                <div className="container mx-auto mt-5">
                    <Services></Services>
                </div>
            </div>

            <div className="  mt-10  pb-10">
                <h1 className="pb-5 text-center text-4xl font-medium">Blogs</h1>
                <div className="container mx-auto mt-3">
                    <Blogs></Blogs>
                </div>
            </div>
            
        </div>
    );
};

export default Home;