import React from "react";
import img1 from '../assets/ad.png'
import Profile from '../assets/azhar.png'
import { PiUserSwitchBold } from "react-icons/pi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import gift from '../assets/gift.png'
function RightBar() {
  return (
    <>
      <div className="md:flex hidden  flex-col  lg:flex-row lg:space-x-4   ">
        <div className="bg-gray-100  lg:w-72 p-4   ">
        <h1 className="text-xl font-semibold text-gray-500 ">Posts</h1>
        <div className="flex items-center space-x-2 my-4">
          
            <img
              src={img1}
              alt="Profile Picture"
              className="w-36 h-30 "
            />
            <div>
              <p className="font-semibold">Restaurent</p>
            </div>
          </div>
        <div className="flex items-center space-x-2 my-4">
          
            <img
              src="https://wallpapers.com/images/featured/cartoon-pictures-q3hxkk0gmw6vnivj.jpg"
              alt="Profile Picture"
              className="w-36 h-30 "
            />
            <div>
              <p className="font-semibold">Cartoon</p>
            </div>
          </div>

          <div className="border-b mt-5 border-gray-200 "></div>

          <h1 className="text-md font-semibold text-gray-500 ">Your pages and profiles</h1>
        <div className="flex items-center space-x-2 my-4">
          
            <img
              src={Profile}
              alt="Profile Picture"
              className="w-10 h-10 rounded-full "
            />
            <div>
              <p className="font-semibold text-sm">A Z H A R :)</p>
            </div>
          </div>
          <ul className="mb-4  ">
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center space-x-2  py-2 rounded-lg hover:bg-gray-300"
              >
                <PiUserSwitchBold size={20}  />
                <span className="text-sm font-semibold text-gray-500">Switch to page</span>
              </a>
            </li> 
            
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center space-x-2  py-2 rounded-lg hover:bg-gray-300"
              >
                <HiOutlineSpeakerphone size={20}  />
                <span className="text-sm font-semibold text-gray-500">Promotion</span>
              </a>
            </li> 
            
            </ul>
            <div className="border-b mt-5  border-gray-200 "></div>
            <h1 className="text-md font-semibold text-gray-500 ">Birthdays</h1>
            <div className="flex items-center space-x-2 my-4">
          
          <img
            src={gift}
            alt="Profile Picture"
            className="w-14 h-14  "
          />
          <div>
            <p className="text-sm"><span className="font-bold">John</span> and <span className="font-bold"> 3 other friends</span> have a brithday today.</p>
          </div>
        </div>            
        </div>
      </div>
    </>
  );
}

export default RightBar;
