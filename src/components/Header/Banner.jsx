
const Banner = () => {
    return (
        <div className="h-[200px] md:h-[300px] lg:h-[600px] relative bg-[url('https://i.ibb.co/rbzttB7/2-14b3526d-421b-43f6-8479-e8a60d033c9d.png')]" >
            
               <div className="container mx-auto h-full pl-10">
            <div className="flex flex-col gap-2 justify-center items-start  h-full max-w-3xl ">
                <h3 className="text-3xl font-medium">Welcome To</h3>
                <h1 className="text-7xl font-bold mb-4">Al<span className="text-blue-600">Tech</span></h1>
                <p className="text-xl font-medium">Discover Quality Accessories for Every Tech Enthusiasts.</p>
                <p className="text-base font-medium"> We Bring You A Curated Selection Of Top-Notch Accessories To Elevate Your Tech Experience.</p>
                <button className="btn bg-blue-600 text-white hover:bg-blue-500 mt-5">Shop Now</button>
            </div>
               
                </div> 
            
            
        </div>
    );
};

export default Banner;