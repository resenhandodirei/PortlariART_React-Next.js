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
    { href: '#sobre', label: 'Sobre' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <nav className="bg-[#8C0343] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Nome */}
          <div className="text-lg font-bold">PortlariART</div>

          {/* Botão mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} aria-label="Abrir menu">
              {menuAberto ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Links desktop */}
          <div className="hidden md:flex space-x-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="relative hover:text-gray-100 transition"
              >
                <span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {menuAberto && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-[#8C0343]">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuAberto(false)} // Fecha ao clicar
              className="block py-2 border-b border-white text-white hover:opacity-80"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
