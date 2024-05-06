import React, { useState } from "react";

import { BiSolidLike } from "react-icons/bi";
import { FaCommentDots } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { Users } from "../dummyData";
function Post({ post }) {
const [increment,setIncrement]= useState(post.like)

  return (
    <>
      <div className="max-w-3xl mt-10 mx-auto md:w-[700px] bg-white rounded-md shadow-md p-4 mb-4">
        <div className="flex items-center mb-4">
          <img
            src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
            alt="Profile Picture"
            className="h-10 w-10 rounded-full mr-2"
          />
          <div>
            <p className="font-semibold">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </p>
            <p className="text-gray-500 text-sm">{post.date}</p>
          </div>
        </div>

        <p className="text-lg mb-4">{post.desc}</p>

        <img src={post.photo} alt="Post Image" className="mb-4" />

        <div className="flex justify-between  items-center">
          <button onClick={()=>setIncrement(increment + 1)} className="flex items-center space-x-1 text-gray-600 hover:text-blue-500  focus:outline-none">
            <BiSolidLike size={30} />
            <span className="text-md font-semibold">Like {increment} </span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500 focus:outline-none">
            <FaCommentDots size={30} />
            <span className="text-md font-semibold">
              Comment {post.comment}{" "}
            </span>
          </button>
          <button className="flex items-center space-x-1 text-gray-600 hover:text-green-500 focus:outline-none">
            <FaShare size={30} />
            <span className="text-md font-semibold">Share </span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Post;
