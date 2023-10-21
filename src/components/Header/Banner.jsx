
const Banner = () => {
    return (
        <div className="h-[600px]" style={{backgroundImage: 'url("https://i.ibb.co/3mTbjW4/Banner.jpg")'}}>
            <div className="flex flex-col gap-2 justify-center items-center h-full max-w-3xl mx-auto">
                <h3 className="text-3xl font-medium">Welcome To</h3>
                <h1 className="text-7xl font-bold mb-4">Al<span className="text-blue-600">Tech</span></h1>
                <p className="text-xl font-medium">Discover Quality Accessories for Every Tech Enthusiasts.</p>
                <p className="text-xl text-center font-medium"> We Bring You A Curated Selection Of Top-Notch Accessories To Elevate Your Tech Experience.</p>
                <button className="btn bg-blue-600 text-white hover:bg-blue-500 mt-5">Shop Now</button>
            </div>
        </div>
    );
};

export default Banner;