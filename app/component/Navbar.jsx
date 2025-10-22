'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { ModeToggle } from './ModeToggle'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about-us', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
    { href: '/terms', label: 'Terms & Conditions' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
  ]

  return (
    <nav className="w-full fixed top-0 left-0 flex items-center justify-between px-6 py-4 bg-white/30 backdrop-blur-md z-50 shadow-sm">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/blogLogo.png" width={180} height={180} alt="Blog Logo" />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-medium relative text-black hover:text-orange-500 transition-colors duration-200
              ${pathname === link.href ? 'text-orange-500 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-orange-500' : ''}
            `}
          >
            {link.label}
          </Link>
        ))}

        <ModeToggle />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-black hover:text-orange-500 transition"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white/90 backdrop-blur-md shadow-md md:hidden flex flex-col items-center py-4 gap-4 transition-all duration-300">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-medium text-black hover:text-orange-500 transition-colors duration-200
                ${pathname === link.href ? 'text-orange-500 underline' : ''}
              `}
            >
              {link.label}
            </Link>
          ))}

          <ModeToggle />
        </div>
      )}
    </nav>
  )
}

export default Navbar
