'use client'

import { SiJavascript, SiReact, SiTailwindcss, SiPython, SiPhp, SiPostgresql, SiTypescript, SiNextdotjs, SiSwift } from 'react-icons/si'

const stacks = [
  { nome: 'JavaScript', icone: <SiJavascript className="text-yellow-400" /> },
  { nome: 'TypeScript', icone: <SiTypescript className="text-blue-500" /> },
  { nome: 'React', icone: <SiReact className="text-cyan-400" /> },
  { nome: 'Next.js', icone: <SiNextdotjs className="text-black dark:text-white" /> },
  { nome: 'Tailwind CSS', icone: <SiTailwindcss className="text-sky-400" /> },
  { nome: 'Python', icone: <SiPython className="text-yellow-300" /> },
  { nome: 'PHP', icone: <SiPhp className="text-purple-500" /> },
  { nome: 'PostgreSQL', icone: <SiPostgresql className="text-blue-800" /> },
  { nome: 'Swift', icone: <SiSwift className="text-orange-500" /> },
]

export default function StacksConhecidas() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-[#8C0343] mb-10">Stacks que conheço</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
        {stacks.map((stack, index) => (
          <div key={index} className="flex flex-col items-center space-y-2 hover:scale-105 transition-transform duration-300">
            <div className="text-5xl">{stack.icone}</div>
            <p className="text-sm font-medium text-gray-700">{stack.nome}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
