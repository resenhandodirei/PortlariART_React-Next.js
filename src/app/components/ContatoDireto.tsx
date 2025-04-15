'use client'

import { Mail, Linkedin, Instagram, Phone } from 'lucide-react'
import Link from 'next/link'

export default function ContatoDireto() {
  const contatos = [
    {
      icone: <Mail size={24} />,
      texto: 'larissa@email.com',
      link: 'mailto:larissa@email.com',
    },
    {
      icone: <Linkedin size={24} />,
      texto: 'linkedin.com/in/larissacorrea',
      link: 'https://www.linkedin.com/in/larissacorrea',
    },
    {
      icone: <Instagram size={24} />,
      texto: '@larimscorrea',
      link: 'https://www.instagram.com/larimscorrea',
    },
    {
      icone: <Phone size={24} />,
      texto: '(85) 9 9999-9999',
      link: 'https://wa.me/5585999999999', // WhatsApp direto
    },
  ]

  return (
    <section className="py-10 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Redes e Contato Direto</h2>
        <ul className="space-y-4">
          {contatos.map((contato, index) => (
            <li key={index}>
              <Link
                href={contato.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 text-gray-700 hover:text-[#8C0343] transition"
              >
                {contato.icone}
                <span>{contato.texto}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
