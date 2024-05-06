import React from "react";
import { FaFacebook } from "react-icons/fa";
import { CiSearch ,CiCirclePlus,CiShop} from "react-icons/ci";
import { BiSolidMessageAltDetail } from "react-icons/bi";
import { GoBellFill } from "react-icons/go";
import { PiDotsNineBold } from "react-icons/pi";
import { LuHome } from "react-icons/lu";
import { MdOndemandVideo } from "react-icons/md";
import { IoPeopleCircle } from "react-icons/io5";

import Profile from "../assets/azhar.png";
import { Link } from "react-router-dom";
function Topbar() {
  return (
    <>
      <div className="shadow-md px-10 py-3 w-full bg-white fixed">
        <div className="container mx-auto flex justify-between   items-center">
          <div className="flex flex-row  gap-10">
            <FaFacebook size={40} className="text-blue-500" />

            <div className="flex items-center  bg-gray-100 rounded-md">
              <CiSearch size={30} className="ml-3" />
              <input
                type="text"
                placeholder="Search"
                className="px-3 md:w-[300px]  py-2 rounded-md outline-none bg-gray-100 text-gray-800 "
              />
            </div>
          </div>

          <div className="md:flex hidden items-center">
            <div className="px-4 py-2 flex gap-14   cursor-pointer">
              <LuHome size={30} />
              <MdOndemandVideo size={30} />
              <CiShop size={30} />
              <IoPeopleCircle size={30} />
              <CiCirclePlus size={30} />
            </div>
          </div>

          <div className="md:flex gap-5 hidden items-center">
            <PiDotsNineBold size={30} />

            <BiSolidMessageAltDetail size={30} />

            <GoBellFill size={30} />
            <div>
              <Link to="/profile">
              <img
                src={Profile}
                alt="User Icon"
                className="h-10 w-10 rounded-full hover:bg-gray-700 cursor-pointer"
              />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
