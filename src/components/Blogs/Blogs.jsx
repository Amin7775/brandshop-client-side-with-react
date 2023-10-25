/* eslint-disable react/no-unescaped-entities */
import { SlCalender} from "react-icons/sl";
import { BiComment} from "react-icons/bi";


const Blogs = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="md:p-2">
                <img src="https://i.ibb.co/fxQsxV2/eyesignt-apple-vision-pro.png" alt="" />
                <div className="p-2 mt-5">
                <h1 className="text-xl font-medium text-center dark:text-[#f2f2f2]">Apple’s Vision Pro Headset Is Finally Real And The Platform Looks Slick And Expansive</h1>
                <div className="flex gap-10 justify-center mt-5">

                <div className="flex gap-2 items-center justify-center">
                <SlCalender className="inline-block  dark:text-white dark:font-bold"></SlCalender>
                <p className="text-gray-600 font-medium text-center dark:text-white dark:font-medium">June 5, 2023</p>
                </div>
                <div className="flex gap-2 items-center justify-center">

                <BiComment className="inline-block dark:text-white dark:font-bold"></BiComment>
                <span className=" text-gray-600 font-medium text-center dark:text-white dark:font-medium">1 Comments</span>
                </div>
                </div>
                
                <p className="mt-3 text-gray-600 px-3 dark:text-[#a7a4a4] dark:font-semibold">Apple's Vision Pro: A game-changing augmented reality device that seamlessly merges the digital and physical worlds, offering a unique AR experience. Explore the future of technology with Apple's innovative spatial computer.</p>
                </div>
            </div>
            {/* blog 2 */}
            <div className="md:p-2">
                <img src="https://i.ibb.co/cXG59qF/download.jpg" alt="" />
                <div className="p-2 mt-5">
                <h1 className="text-xl font-medium text-center dark:text-[#f2f2f2]">Intel Unveils Raptor Lake 13th-Gen Core Mobile CPUs To Power A New Breed Of Gaming Laptops</h1>
                <div className="flex gap-10 justify-center mt-5">

                <div className="flex gap-2 items-center justify-center">
                <SlCalender className="inline-block  dark:text-white dark:font-bold"></SlCalender>
                <p className="text-gray-600 font-medium text-center dark:text-white dark:font-medium">Jan 3, 2023</p>
                </div>
                <div className="flex gap-2 items-center justify-center">

                <BiComment className="inline-block dark:text-white dark:font-bold"></BiComment>
                <span className=" text-gray-600 font-medium text-center dark:text-white dark:font-medium">12 Comments</span>
                </div>
                </div>
                
                <p className="mt-3 text-gray-600 px-3 dark:text-[#a7a4a4] dark:font-semibold">Intel's 13th-Gen Raptor Lake processors are a significant upgrade over the previous-gen Alder Lake CPUs. These high-end chips offer substantial power and are tailored for desktop-class computing needs, providing a substantial boost in performance.</p>
                </div>
            </div>
            {/* blog 3 */}
            <div className="md:p-2">
                <div className="max-h-[270px]">

                <img className="max-h-[270px] w-full" src="https://i.ibb.co/SB52GSQ/sony-NW-A306.jpg" alt="" />
                </div>
                <div className="p-2 mt-5">
                <h1 className="text-xl font-medium text-center dark:text-[#f2f2f2]">Sony Revives The Walkman In Two Stunningly Slick Android Digital Music Players</h1>
                <div className="flex gap-10 justify-center mt-5">

                <div className="flex gap-2 items-center justify-center">
                <SlCalender className="inline-block  dark:text-white dark:font-bold"></SlCalender>
                <p className="text-gray-600 font-medium text-center dark:text-white dark:font-medium">Dec 15, 2022</p>
                </div>
                <div className="flex gap-2 items-center justify-center">

                <BiComment className="inline-block dark:text-white dark:font-bold"></BiComment>
                <span className=" text-gray-600 font-medium text-center dark:text-white dark:font-medium">20 Comments</span>
                </div>
                </div>
                
                <p className="mt-3 text-gray-600 px-3 dark:text-[#a7a4a4] dark:font-semibold">Sony's new portable music players, the Walkman NW-ZX707 and NW-A306, cater to audiophiles seeking premium sound quality. Featuring advanced components like FTCAP3 high-polymer capacitors and gold reflow solder, these devices take your...</p>
                </div>
            </div>
            
        </div>
    );
};

export default Blogs;