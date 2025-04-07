// components/Navbar.tsx
'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-[#8C0343] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Nome */}
          <div className="text-lg font-bold">Meu Portfólio</div>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="#sobre" className="hover:text-gray-200">
              Sobre
            </Link>
            <Link href="#projetos" className="hover:text-gray-200">
              Projetos
            </Link>
            <Link href="#contato" className="hover:text-gray-200">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
