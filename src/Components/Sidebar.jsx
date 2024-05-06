import React from "react";
import profile from "../assets/azhar.png";
import { FaUserFriends } from "react-icons/fa";
import { RiMemoriesLine } from "react-icons/ri";
import { CiSaveDown2 } from "react-icons/ci";
import { MdGroups } from "react-icons/md";
import { IoMdVideocam } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
function Sidebar() {
  return (
    <>
      <div className="md:flex hidden   flex-col  lg:flex-row lg:space-x-4   ">
        <div className="bg-gray-100  lg:w-72 p-4   ">
          <div className="flex items-center space-x-2 mb-4">
            <img
              src={profile}
              alt="Profile Picture"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">Azhar Alee Sheeno</p>
            </div>
          </div>

          <ul className="mb-4  ">
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-300"
              >
                <FaUserFriends size={30} className="text-cyan-500" />
                <span className="font-semibold">Friends</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-300"
              >
                <RiMemoriesLine size={30} className="text-sky-500" />
                <span className="font-semibold">Memories</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-300"
              >
                <CiSaveDown2 size={30} className="text-pink-500 " />
                <span className="font-semibold">Saved</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-300"
              >
                <MdGroups size={30} className="text-sky-500" />
                <span className="font-semibold">Groups</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-300"
              >
                <IoMdVideocam size={30} className="text-cyan-500" />
                <span className="font-semibold">Video</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex  items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                <MdKeyboardArrowDown
                  size={30}
                  className=" bg-gray-300 rounded-full"
                />
                <span className="font-semibold">See More</span>
              </a>
            </li>
          </ul>

          <div className="border-b mt-5 border-gray-200 "></div>
          <div className="flex items-center space-x-2 mb-4">
            <div>
              <p className="font-semibold text-lg text-gray-600">Your Shortcuts</p>
            </div>
          </div>
          <ul className="mb-4 ">
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center space-x-2 py-2 rounded-lg hover:bg-gray-300"
              >
                <img
                  src="https://w7.pngwing.com/pngs/479/834/png-transparent-fiverr-green-logo-thumbnail.png"
                  alt="Profile Picture"
                  className="w-12 h-10 rounded-full"
                />

                <span className="font-semibold">Get Orders on Fiverr</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center space-x-2 py-2 rounded-lg hover:bg-gray-300"
              >
                <img
                  src="https://s.udemycdn.com/meta/default-meta-image-v2.png"
                  alt="Profile Picture"
                  className="w-12 h-10 rounded-full"
                />

                <span className="font-semibold">Udemy Courses</span>
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center space-x-2 py-2 rounded-lg hover:bg-gray-300"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR56wZm4qYJbYV_T1uyTq0Vl4ETVuAd9NLazt40yR7EFQ&s"
                  alt="Profile Picture"
                  className="w-12 h-10 rounded-full"
                />

                <span className="font-semibold">Reactjs Lectures</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
