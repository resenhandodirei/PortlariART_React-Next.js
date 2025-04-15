'use client'

import { useState } from 'react'
import { CheckCircle, Heart, Users, Lightbulb, Speaker } from 'lucide-react'

export default function SoftSkills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills = [
    {
      id: 'comunicacao',
      nome: 'Comunicação',
      descricao: 'Capacidade de expressar ideias de forma clara e eficaz, seja oralmente ou por escrito.',
      icone: <Speaker size={30} />,  // Ícone menor
    },
    {
      id: 'trabalho-em-equipe',
      nome: 'Trabalho em Equipe',
      descricao: 'Habilidade de colaborar com outras pessoas para alcançar objetivos comuns.',
      icone: <Users size={30} />,
    },
    {
      id: 'criatividade',
      nome: 'Criatividade',
      descricao: 'Pensamento inovador para resolver problemas e propor novas soluções.',
      icone: <Lightbulb size={30} />,
    },
    {
      id: 'empatia',
      nome: 'Empatia',
      descricao: 'Capacidade de compreender e se colocar no lugar do outro, facilitando as interações.',
      icone: <Heart size={30} />,
    },
    {
      id: 'resolucao-de-problemas',
      nome: 'Resolução de Problemas',
      descricao: 'Habilidade de identificar problemas e encontrar soluções eficazes e rápidas.',
      icone: <CheckCircle size={30} />,
    },
  ]

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-[#8C0343] text-center mb-6">
          Soft Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-[#F9F9F9] duration-300 ease-in-out"
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="mb-3 text-[#8C0343]">{skill.icone}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{skill.nome}</h3>
              <p
                className={`text-sm text-gray-600 transition-all duration-300 ${
                  hoveredSkill === skill.id ? 'max-h-24' : 'max-h-0 overflow-hidden'
                }`}
              >
                {skill.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
