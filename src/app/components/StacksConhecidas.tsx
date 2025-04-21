'use client'

import { SiJavascript, SiReact, SiTailwindcss, SiPython, SiPhp, SiPostgresql, SiTypescript, SiNextdotjs, SiSwift } from 'react-icons/si'

const stacks = [
  { nome: 'JavaScript', icone: <SiJavascript className="text-yellow-400" /> },
  { nome: 'TypeScript', icone: <SiTypescript className="text-blue-500" /> },
  { nome: 'React', icone: <SiReact className="text-cyan-400" /> },
  { nome: 'Next.js', icone: <SiNextdotjs className="text-white" /> },
  { nome: 'Tailwind CSS', icone: <SiTailwindcss className="text-sky-400" /> },
  { nome: 'Python', icone: <SiPython className="text-yellow-300" /> },
  { nome: 'PHP', icone: <SiPhp className="text-purple-500" /> },
  { nome: 'PostgreSQL', icone: <SiPostgresql className="text-blue-800" /> },
  { nome: 'Swift', icone: <SiSwift className="text-orange-500" /> },
]

export default function StacksConhecidas() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 bg-gradient-to-r from-[#8C0343] to-[#F0F8FF] rounded-lg">
      <h2 className="text-3xl font-bold text-center text-white mb-12">
        Stacks que conheço
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {stacks.map((stack, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-3 hover:scale-105 hover:shadow-xl transition-all duration-300 p-6 rounded-lg bg-white bg-opacity-90"
          >
            <div className="text-5xl">{stack.icone}</div>
            <p className="text-sm font-semibold text-[#8C0343]">{stack.nome}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
