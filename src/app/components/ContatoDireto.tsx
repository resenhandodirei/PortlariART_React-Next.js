'use client'

import { Mail, Linkedin, Instagram, Phone } from 'lucide-react'
import Link from 'next/link'

export default function ContatoDireto() {
  const contatos = [
    {
      icone: <Mail size={20} />,
      texto: 'larimscorrea@gmail.com',
      link: 'mailto:larimscorrea@gmail.com',
    },
    {
      icone: <Linkedin size={20} />,
      texto: 'linkedin.com/in/resenhandodirei',
      link: 'https://www.linkedin.com/in/resenhandodirei',
    },
    {
      icone: <Instagram size={20} />,
      texto: '@resenhandodirei',
      link: 'https://www.instagram.com/resenhandodirei',
    },
    {
      icone: <Phone size={20} />,
      texto: '(85) 9 91984587',
      link: 'https://wa.me/558599198-4587',
    },
  ]

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-[#8C0343] mb-8 text-center">
          Redes e Contato Direto
        </h2>
        <ul className="grid sm:grid-cols-2 gap-6">
          {contatos.map((contato, index) => (
            <li key={index}>
              <Link
                href={contato.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition border border-gray-100 hover:border-[#8C0343]"
              >
                <div className="p-2 bg-[#f9f0f4] rounded-full text-[#8C0343]">
                  {contato.icone}
                </div>
                <span className="text-gray-800 text-sm sm:text-base font-medium break-words">
                  {contato.texto}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
