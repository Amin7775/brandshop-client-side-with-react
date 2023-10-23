import { useContext } from "react";
import { FaAsymmetrik } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { AuthContext } from "../../provider/AuthProvider";

const NavTwo = () => {
  const {user}=useContext(AuthContext)
    const navLinks = (
        <>
          <li className=" hover:bg-blue-500 rounded-md mx-1">
            <NavLink to={"/"} className="hover:text-white">Home</NavLink>
          </li>
          <li className=" hover:bg-blue-500   rounded-md mx-1">
            <NavLink to={"/addProducts"} className="hover:text-white">Add Products</NavLink>
          </li>
          <li className=" hover:bg-blue-500 rounded-md mx-1">
            <NavLink to={"/myCart"} className="hover:text-white">My Cart</NavLink>
          </li>
          <li className=" hover:bg-blue-500 rounded-md mx-1">
            <NavLink to={"/login"} className="hover:text-white">Login</NavLink>
          </li>
         
        </>
      );
    return (
        <div className="bg-white">
            <div className="navbar container mx-auto  py-4 px-0">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 text-lg font-medium bg-black "
            id="sidebar"
          >
            {navLinks}
          </ul>
        </div>
            <FaAsymmetrik className="text-5xl my-auto mr-2"></FaAsymmetrik>
        <p className="text-4xl font-semibold mx-0 px-0">
          <span className="text-blue-600">
          <span className="text-black">Al</span>Tech
          </span>
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul
          className="menu menu-horizontal px-1 font-medium  "
          id="sidebar"
        >
          {navLinks}
        </ul>
      </div>
      {/* user section */}
      <div className="navbar-end mr-2">
        {
          user ? <div>
            {user.displayName}
          </div>:
          <div>
            guest
          </div>
        }
      </div>
     
    </div>
        </div>
    );
};

export default NavTwo;