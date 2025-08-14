'use client'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="w-full fixed flex top-0 items-center justify-between px-6 max-w-full mx-auto py-5 bg-white/30 backdrop-blur-md z-50">
      <Link className="font-bold text-4xl" href={'/'}>
        <Image src="/blogLogo.png" width={250} height={250} alt="Blog Logo" />
      </Link>
      <Link className="font-bold text-4xl" href={''}>
        <ModeToggle />
      </Link>
    </nav>
  )
}

export default Navbar
