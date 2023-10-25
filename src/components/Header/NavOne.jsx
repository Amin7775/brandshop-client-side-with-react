import { FaTwitter,FaFacebook,FaInstagram,FaReddit } from 'react-icons/fa';

const NavOne = () => {
    return (
        <div className='bg-[#0067cd]'>
            <div className='grid grid-cols-2 md:grid-cols-3   text-white h-12 container mx-auto'>
            
            <div className='text-start my-auto flex gap-2 text-xl ml-3'>
                <FaTwitter className='hover:text-2xl cursor-pointer'></FaTwitter>
                <FaFacebook className='hover:text-2xl cursor-pointer'></FaFacebook>
                <FaInstagram className='hover:text-2xl cursor-pointer'></FaInstagram>
                <FaReddit className='hover:text-2xl cursor-pointer'></FaReddit>
                </div>
            <div className='text-center my-auto font-medium hidden md:block'>Welcome to our store</div>
            <div className='text-end my-auto font-medium mr-3 lg:mr-2'>Light/Dark</div>
        </div>
        </div>
    );
};
export default NavOne;