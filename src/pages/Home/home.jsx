import { useLoaderData } from "react-router-dom";
import Blogs from "../../components/Blogs/Blogs";
import Banner from "../../components/Header/Banner";
import MarqueeDetails from "../../components/Marquee/MarqueeDetails";
import Services from "../../components/services/Services";
import Brands from "../../components/Brands/Brands";


const Home = () => {
    const brandLoader = useLoaderData()

    return (
        <div className="bg-[#f1f3f6] dark:bg-[#05010a]">
            <Banner></Banner>
            <MarqueeDetails></MarqueeDetails>
            <div className="container mx-auto pb-5">
                <h1 className="mt-0 text-center text-4xl font-medium mb-1 md:mb-10 dark:text-[#f2f2f2]">Brands</h1>
                {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-16 p-5 pb-0 pt-0 md:p-1 container mx-auto  */}
                <div className="flex flex-wrap mx-auto gap-10 justify-center pt-10 md:pt-0">
                    {
                        brandLoader.map(brand=> <Brands key={brand._id} brand={brand}></Brands>)
                    }
                </div>
            </div>
            <div className="bg-[#fafbfb] dark:bg-slate-800 mt-10 mb-10 pb-5">
                <h1 className="py-5 text-center text-4xl font-medium dark:text-[#f2f2f2]">Our Services</h1>
                <div className="container mx-auto mt-5">
                    <Services></Services>
                </div>
            </div>

            <div className="  mt-10  pb-10">
                <h1 className="pb-5 text-center text-4xl font-medium dark:text-[#f2f2f2]">Blogs</h1>
                <div className="container mx-auto mt-3 md:px-5">
                    <Blogs></Blogs>
                </div>
            </div>
            
        </div>
    );
};

export default Home;