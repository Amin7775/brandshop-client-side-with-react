import Banner from "../../components/Header/Banner";
import MarqueeDetails from "../../components/Marquee/MarqueeDetails";
import Services from "../../components/services/Services";


const Home = () => {
    return (
        <div className="bg-[#f1f3f6] h-[1000px]">
            <Banner></Banner>
            <MarqueeDetails></MarqueeDetails>
            <div>
                <h1 className="mt-0 text-center text-4xl font-medium">Brands</h1>
                
            </div>
            <div className="bg-[#fafbfb] mt-10 mb-10">
                <h1 className="py-5 text-center text-4xl font-medium">Our Services</h1>
                <div className="container mx-auto mt-5">
                    <Services></Services>
                </div>
            </div>
            
        </div>
    );
};

export default Home;