"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#145DA0] py-4 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/Logo.jpg" alt="The Training Lab Logo" width={100} height={50} priority />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <NavLink href="#inicio">INICIO</NavLink>
            <NavLink href="#cursos">CURSOS</NavLink>
            <NavLink href="#instructores">INSTRUCTORES</NavLink>
            <NavLink href="#testimonios">TESTIMONIOS</NavLink>
            <NavLink href="#contacto">CONTACTO</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 text-center">
            <NavLink href="#inicio" mobile>
              INICIO
            </NavLink>
            <NavLink href="#cursos" mobile>
              CURSOS
            </NavLink>
            <NavLink href="#instructores" mobile>
              INSTRUCTORES
            </NavLink>
            <NavLink href="#testimonios" mobile>
              TESTIMONIOS
            </NavLink>
            <NavLink href="#contacto" mobile>
              CONTACTO
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  )
}

function NavLink({ href, children, mobile = false }: { href: string; children: React.ReactNode; mobile?: boolean }) {
  const baseClasses = "text-white hover:text-gray-200 transition-colors cursor-pointer"
  const mobileClasses = mobile ? "block py-2" : ""
  const desktopClasses = !mobile ? "text-xs tracking-wide" : ""

  return (
    <a href={href} className={`${baseClasses} ${mobileClasses} ${desktopClasses}`}>
      {children}
    </a>
  )
}

