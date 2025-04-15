
"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Nav = () => {

  const pathName = usePathname();
  console.log(pathName)

  return (
    <nav className='flex justify-between bg-blue-900 text-white p-3 text-2xl'> 
        <h1>Logo Here {pathName}</h1>
        <ol className='flex gap-4'>
          <Link className={pathName===`/` ? "active" : ""} href={"/"}><li>Home</li></Link>  
          <Link  className={pathName===`/about` ? "active" : "" } href={"/about"}><li>About</li></Link>  
          <Link  className={pathName===`/pricing` ? "active" : "" } href={"/pricing"}><li>Pricing</li></Link>  
          <Link  className={pathName===`/contact` ? "active" : "" } href={"/contact"}><li>Contact</li></Link>  
          
 
        </ol>
    </nav>
  )
}

export default Nav