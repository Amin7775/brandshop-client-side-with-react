import { useContext, useEffect, useState } from "react";
import { FaAsymmetrik } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from "../../provider/AuthProvider";

const NavTwo = () => {
  const {user,photo,logout}=useContext(AuthContext)

  const [image, setImage] = useState(null);

  useEffect(() => {
    setImage(photo);
  }, [photo]);

  const handleLogout = () =>{
    logout()
    .then(()=>{
      console.log("logged Out");
    })
  }

    const navLinks = (
        <>
          <li className=" hover:bg-blue-500 rounded-md mx-1">
            <NavLink to={"/"} className="hover:text-white text-base">Home</NavLink>
          </li>
          <li className=" hover:bg-blue-500   rounded-md mx-1">
            <NavLink to={"/addProducts"} className="hover:text-white text-base">Add Products</NavLink>
          </li>
          <li className=" hover:bg-blue-500 rounded-md mx-1">
            <NavLink to={"/myCart"} className="hover:text-white text-base">My Cart</NavLink>
          </li>
          <li className=" hover:bg-blue-500 rounded-md mx-1">
            <NavLink to={"/login"} className="hover:text-white text-base">Login</NavLink>
          </li>
         
        </>
      );
    return (
        <div className="bg-white">
            <div className="navbar container mx-auto  py-4 px-0">
      <div className="navbar-start lg:ml-1">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 text-lg font-medium bg-[#0067cd] text-white "
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
      <div className="navbar-end mr-3 lg:mr-2">
        {
          user ? <div className="flex items-center gap-3">
          <p className="hidden md:block font-medium">{user.displayName}</p>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-28 rounded-full">
                {image ? <img src={image} /> : <img src={user.photoURL} />}
              </div>
            </label>
            <ul
              tabIndex={0}
              className=" z-[1]  shadow menu menu-sm dropdown-content bg-[#0067cd] rounded-box w-52 text-white"
            >
              <li className="hover:bg-white rounded-md">
                <a>{user.displayName}</a>
              </li>
              <li className="hover:bg-white rounded-md">
                <a>{user.email}</a>
              </li>
              <li className="hover:bg-white rounded-md">
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
            
        </div>:
          <div className="flex items-center gap-3">
          <p className="hidden md:block font-medium">Guest Mode</p>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-28 rounded-full">
              <img src="https://i.ibb.co/RjNr5mp/speaker2.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className=" z-[1]  shadow menu menu-sm dropdown-content bg-[#0067cd] rounded-box w-52 text-white"
            >
              <li className="hover:bg-white rounded-md">
                <a>Not Logged In</a>
              </li>
              
              <li className="hover:bg-white rounded-md">
              <Link to={'/login'}><button>Login</button></Link>
              </li>
            </ul>
          </div>
            
        </div>
        }
      </div>
     
    </div>
        </div>
    );
};

export default NavTwo;