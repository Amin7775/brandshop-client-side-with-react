import { Outlet } from "react-router-dom";
import NavOne from "../components/Header/NavOne";
import NavTwo from "../components/Header/NavTwo";
import Footer from "../components/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="w-full">
            <NavOne></NavOne>
            <NavTwo></NavTwo>
            </div>
            <Outlet></Outlet>
            <div className="w-full bg-neutral">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;