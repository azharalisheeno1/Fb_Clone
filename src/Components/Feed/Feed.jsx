import React from 'react'
import Share from '../Share'
import Post from '../Post'
import { Posts } from "../../dummyData";

function Feed() {
  return (
    <div className='bg-gray-100 w-full p-5'>
      <Share></Share>
      {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
     
    </div>
  )
}

export default Feed