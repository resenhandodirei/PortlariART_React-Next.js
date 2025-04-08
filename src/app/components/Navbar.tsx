// components/Navbar.tsx
'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-[#8C0343] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Nome */}
          <div className="text-lg font-bold">PortlariART</div>

          {/* Links */}
          <div className="hidden md:flex space-x-6">
            {[
              { href: '#sobre', label: 'Sobre' },
              { href: '#projetos', label: 'Projetos' },
              { href: '#contato', label: 'Contato' },
            ].map(({ href, label }) => (
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
    </nav>
  )
}
