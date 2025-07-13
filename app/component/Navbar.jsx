'use client'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
  return (
   <nav className='w-full relative flex items-center justify-between px-4 max-w-5xl mx-auto  py-5 '>
    <Link className='font-bold text-3xl' href={'/'}>We<span className='text-primary'>BLOG</span></Link>
    <Link className='font-bold text-3xl' href={''}><ModeToggle/></Link>
   </nav>
  )
}

export default Navbar
