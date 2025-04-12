'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

const eventos = [
  {
    ano: '2021',
    titulo: 'Início na Universidade',
    descricao: 'Comecei a jornada em Direito na UFC, apaixonando-me pelos Direitos Humanos e a intersecção com tecnologia.',
    icone: <GraduationCap className="w-5 h-5 text-white" />,
  },
  {
    ano: '2022',
    titulo: 'Primeiros Projetos em TI',
    descricao: 'Me envolvi com grupos de estudos e desenvolvi sistemas simples com Python e HTML/CSS.',
    icone: <Briefcase className="w-5 h-5 text-white" />,
  },
  {
    ano: '2023',
    titulo: 'Residência em TIC e SwiftUI',
    descricao: 'Fui selecionada para programas intensivos com foco em desenvolvimento iOS e mobile.',
    icone: <Briefcase className="w-5 h-5 text-white" />,
  },
  {
    ano: '2024',
    titulo: 'Projetos em destaque',
    descricao: 'Participei de projetos como AgendaPsico, CoinVerter e plataformas de educação gratuita como o Salvaguarda.',
    icone: <Briefcase className="w-5 h-5 text-white" />,
  },
]

export default function Timeline() {
  const [mostrar, setMostrar] = useState(false)

  useEffect(() => {
    setMostrar(true)
  }, [])

  return (
    <section className="py-16 px-6 bg-gray-50" id="trajetoria">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-[#8C0343] mb-2">Minha Trajetória</h2>
        <p className="text-gray-600 mb-12">
          Um pouco do meu caminho até aqui, com momentos que moldaram quem sou como profissional e pessoa.
        </p>

        <div className="relative border-l-4 border-[#8C0343] pl-6 space-y-12">
          {mostrar &&
            eventos.map((evento, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute -left-[34px] top-1.5 w-8 h-8 bg-[#8C0343] rounded-full flex items-center justify-center shadow-lg">
                  {evento.icone}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{evento.titulo}</h3>
                <span className="text-sm text-gray-500">{evento.ano}</span>
                <p className="text-gray-700 mt-1">{evento.descricao}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
