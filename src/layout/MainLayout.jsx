import { Outlet } from "react-router-dom";
import NavOne from "../components/Header/NavOne";
import NavTwo from "../components/Header/NavTwo";


const MainLayout = () => {
    return (
        <div>
            <div className="w-full">
            <NavOne></NavOne>
            <NavTwo></NavTwo>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;