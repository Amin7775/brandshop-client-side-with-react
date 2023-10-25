
const Banner = () => {
    return (
        <div className="h-[350px] md:h-[550px] lg:h-[600px] relative bg-[url('https://i.ibb.co/rbzttB7/2-14b3526d-421b-43f6-8479-e8a60d033c9d.png')]" >
            
               <div className="container mx-auto h-full md:pl-10">
            <div className="flex flex-col gap-1 md:gap-2 justify-center items-center md:items-start  h-full max-w-xs mx-auto md:mx-0 md:max-w-3xl ">
                <h3 className="text-2xl md:text-3xl font-medium">Welcome To</h3>
                <h1 className="text-5xl md:text-7xl font-bold mb-2 md:mb-4">Al<span className="text-blue-600">Tech</span></h1>
                <p className="text-lg md:text-xl font-medium text-center md:text-start">Discover Quality Accessories for Every Tech Enthusiasts.</p>
                <p className="text-sm md:text-base font-medium hidden md:block"> We Bring You A Curated Selection Of Top-Notch Accessories To Elevate Your Tech Experience.</p>
                <button className="btn bg-blue-600 text-white hover:bg-blue-500 mt-2 md:mt-5 text-xs md:text-base">Shop Now</button>
            </div>
               
                </div> 
            
            
        </div>
    );
};

export default Banner;