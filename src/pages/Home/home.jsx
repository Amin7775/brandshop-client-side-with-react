import Blogs from "../../components/Blogs/Blogs";
import Banner from "../../components/Header/Banner";
import MarqueeDetails from "../../components/Marquee/MarqueeDetails";
import Services from "../../components/services/Services";


const Home = () => {
    return (
        <div className="bg-[#f1f3f6] ">
            <Banner></Banner>
            <MarqueeDetails></MarqueeDetails>
            <div>
                <h1 className="mt-0 text-center text-4xl font-medium">Brands</h1>
                
            </div>
            <div className="bg-[#fafbfb] mt-10 mb-10 pb-5">
                <h1 className="py-5 text-center text-4xl font-medium">Our Services</h1>
                <div className="container mx-auto mt-5">
                    <Services></Services>
                </div>
            </div>

            <div className="  mt-10  pb-5">
                <h1 className="pb-5 text-center text-4xl font-medium">Blogs</h1>
                <div className="container mx-auto mt-3">
                    <Blogs></Blogs>
                </div>
            </div>
            
        </div>
    );
};

export default Home;