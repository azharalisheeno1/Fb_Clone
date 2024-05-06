import React from 'react'
import Topbar from '../../Components/Topbar'
import Sidebar from '../../Components/Sidebar'
import RightBar from '../../Components/RightBar'
import Feed from '../../Components/Feed/Feed'

function Home() {
  return (
    <>
    
    <Topbar></Topbar>
    <div className='flex justify-between'>
    <Sidebar></Sidebar>
    <Feed></Feed>
    <RightBar></RightBar>
    </div>
    
    </>
  )
}

export default Home