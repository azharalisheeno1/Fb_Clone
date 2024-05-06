import React from 'react'
import profile from '../assets/azhar.png'
import { FaVideo } from "react-icons/fa";
import { FaPhotoFilm } from "react-icons/fa6";
import { MdEmojiEmotions } from "react-icons/md";

function Share() {
const Data=[
  {
    id:1,
    name:"Live Video",
    child:(<FaVideo size={30} className='text-red-500' />),
 
  },
  {
    id:2,
    name:"Photo / Video",
    child:(<FaPhotoFilm size={30} className='text-green-500' />),
   
  },
  {
    id:3,
    name:"Feelings",
    child:(<MdEmojiEmotions size={30} className='text-yellow-500' />),
  
  },
]
  return (
    <>
    <div className='bg-white md:w-[700px] mt-20 mx-auto p-3 rounded-lg'>
      <div className='flex gap-3'>
        <img src={profile} className='w-10 h-10 rounded-full' alt="" />
        <input type="text" name="" className='bg-gray-100 px-3 py-2 rounded-full outline-none w-full' placeholder='What is  on your mind, Azhar? ' id="" />
      </div>
      <div className="border-b mt-5 border-gray-200 "></div>
      <div className='flex justify-between md:mx-10 my-5'>
      {
      Data.map((data)=>(<div className="flex justify-between items-center gap-2 text-gray-500 font-semibold" key={data.id}>
          {data.child}
        <p>{data.name}</p>
      
      </div>))
      }
  
      </div>
    </div>
    
    </>
  )
}

export default Share