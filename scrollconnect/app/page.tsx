import Image from 'next/image'
import Nav from '../Components/Nav'
import React from 'react'

function page() {
  return (
    <div className="p-6 ">
      <Nav></Nav>
     <div>ashish </div>
     <div className="p-6 w-full h-screen" >
        <div className="p-3 md:1/2 w-full h-screen"> 
         <h1 className="text-2xl"> Welcome to sigce </h1> 
         <p>There are many variations of passages of Lorem Ipsum available,</p>
         <button className="p-4 bg-black text-white rounded-lg w-fit">Join with us </button>
        </div>
        <div className="p-3 md:1/2 w-full h-screen" > 
          <Image src="/login.png.png" alt="Login" width={500} height={500}/>
        </div>
      </div>
    </div>  
  )
}
export default page 