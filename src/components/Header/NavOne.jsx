import { useState } from 'react';
import { FaTwitter,FaFacebook,FaInstagram,FaReddit } from 'react-icons/fa';
import { MdOutlineDarkMode } from 'react-icons/md';

const NavOne = () => {
    const [mode,setMode]=useState("light")
    const [icon,setIcon]=useState("white")

    function changeTheme() {
        const html = document.documentElement;
        
        if (mode === "light") {
          html.classList.remove("light");
          html.classList.add("dark"); // Add the "dark" class
          setMode("dark");
          setIcon("white")
        } else {
          html.classList.remove("dark");
          html.classList.add("light"); // Add the "light" class
          setMode("light");
          setIcon("black")
        }
        console.log("hello");
      }
    return (
        <div className='bg-[#0067cd]'>
            <div className='grid grid-cols-2 md:grid-cols-3  text-white h-12 container mx-auto'>
            
            <div className='text-start my-auto flex gap-2 text-xl ml-3'>
                <FaTwitter className='hover:text-2xl cursor-pointer'></FaTwitter>
                <FaFacebook className='hover:text-2xl cursor-pointer'></FaFacebook>
                <FaInstagram className='hover:text-2xl cursor-pointer'></FaInstagram>
                <FaReddit className='hover:text-2xl cursor-pointer'></FaReddit>
                </div>
            <div className='text-center my-auto font-medium hidden md:block'>Welcome to our store</div>
            <div className='flex w-full justify-end items-center pr-4'>
                {
                    icon == "white" && <MdOutlineDarkMode onClick={changeTheme} className='text-3xl text-white bg-black rounded-full cursor-pointer' ></MdOutlineDarkMode>
                }
                {
                    icon == "black" && <MdOutlineDarkMode onClick={changeTheme} className='text-3xl text-black bg-white rounded-full cursor-pointer'></MdOutlineDarkMode>
                }
                
                
                
                </div>
        </div>
        </div>
    );
};
export default NavOne;