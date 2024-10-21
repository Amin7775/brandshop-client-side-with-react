import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-[100vh] flex flex-col gap-4 bg-gray-800 text-white justify-center items-center mx-auto p-5 text-center">
            <div style="width:100%;height:0;padding-bottom:100%;position:relative;"><iframe src="https://giphy.com/embed/C21GGDOpKT6Z4VuXyn" width="100%" height="100%" style="position:absolute" frameBorder="0" className="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/spaceshiptw-404-spaceshiphk-spaceship404-C21GGDOpKT6Z4VuXyn">via GIPHY</a></p>
            <h1 className="text-9xl font-bold">4<span className="text-orange-400">0</span>4</h1>
            <p className="text-lg md:text-2xl">The page you are looking for is temporarily unavailable.</p>
            <p className="text-lg md:text-2xl">It might have been removed or the name is changed.</p>
            <p className="text-lg md:text-2xl">Please try again later.</p>

            <Link to='/'>
            <button className="btn mt-3 bg-blue-600 text-white py-4 px-6 h-full border-0 rounded-lg font-semibold">
              Go Back To Home
            </button>
            </Link>
        </div>
    );
};

export default ErrorPage;