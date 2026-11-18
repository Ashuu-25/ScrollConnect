import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
   <div className="w-full flex justify-between" >
    <div>logo</div>
        <div className="md:flex hidden">
            <Link href="/about">about us</Link>
            <Link href="/faq">FAQ</Link>
         </div>
        <div> <button> abc </button> </div>
    </div>
  )
}

export default Nav