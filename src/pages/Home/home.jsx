import Banner from "../../components/Header/Banner";
import MarqueeDetails from "../../components/Marquee/MarqueeDetails";


const Home = () => {
    return (
        <div className="bg-[#f1f3f6] h-[1000px]">
            <Banner></Banner>
            <MarqueeDetails></MarqueeDetails>
            <div>
                <h1 className="mt-0 text-center text-5xl font-medium">Brands</h1>
                
            </div>
        </div>
    );
};

export default Home;