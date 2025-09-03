'use client'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from './ModeToggle'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 flex items-center justify-between px-6 max-w-full mx-auto py-5 bg-white/30 backdrop-blur-md z-50">
      
      {/* Logo */}
      <Link href={'/'} className="flex items-center">
        <Image src="/blogLogo.png" width={250} height={250} alt="Blog Logo" />
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link href="/about-us" className="text-black hover:text-orange-500 font-medium">
          About Us
        </Link>
        <Link href="/contact" className="text-black hover:text-orange-500 font-medium">
          Contact
        </Link>
        <Link href="/terms" className="text-black hover:text-orange-500 font-medium">
          Terms & Conditions
        </Link>
        <Link href="/privacy" className="text-black hover:text-orange-500 font-medium">
          Privacy Policy
        </Link>

        {/* Dark/Light Mode Toggle */}
        <ModeToggle />
      </div>

    </nav>
  )
}

export default Navbar
