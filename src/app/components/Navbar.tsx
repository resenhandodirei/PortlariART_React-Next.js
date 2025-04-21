'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react' // Ícones modernos

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false)

  const toggleMenu = () => {
    setMenuAberto(!menuAberto)
  }

  const links = [
    { href: '/screens/about', label: 'Sobre' },
    { href: '/screens/projetos', label: 'Projetos' },
    { href: '/screens/contato', label: 'Contato' },
  ]

  return (
    <nav className="bg-[#8C0343] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Nome clicável */}
          <Link href="/" className="text-lg font-bold hover:opacity-90 transition-colors">
            PortlariART
          </Link>

          {/* Botão mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Abrir menu">
              {menuAberto ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Links desktop */}
          <div className="hidden md:flex space-x-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="relative group hover:text-gray-100 transition-all ease-in-out duration-300"
              >
                <span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {menuAberto && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#8C0343] transition-all ease-in-out duration-300">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuAberto(false)} // Fecha ao clicar
              className="block py-2 border-b border-white text-white hover:opacity-80 transition-all ease-in-out duration-200"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
