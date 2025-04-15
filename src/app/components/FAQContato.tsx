'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const perguntas = [
  {
    pergunta: 'Você está disponível para freelas ou projetos colaborativos?',
    resposta:
      'Sim! Estou sempre aberta a ideias criativas e colaborações. Me chama pelo formulário ou no e-mail indicado!',
  },
  {
    pergunta: 'Qual a melhor forma de entrar em contato?',
    resposta:
      'Você pode usar o formulário da página ou me chamar diretamente no LinkedIn, e-mail ou redes sociais. Respondo o mais breve possível.',
  },
  {
    pergunta: 'Você trabalha com sites, apps ou ambos?',
    resposta:
      'Atualmente, foco em desenvolvimento web e mobile (iOS/React Native), mas estou sempre expandindo meus conhecimentos!',
  },
  {
    pergunta: 'Em quanto tempo costuma responder?',
    resposta:
      'Geralmente em até 24 horas em dias úteis. Se for urgente, use o contato direto!',
  },
]

export default function FAQContato() {
  const [aberta, setAberta] = useState<number | null>(null)

  const toggle = (index: number) => {
    setAberta(aberta === index ? null : index)
  }

  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {perguntas.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-700 font-medium hover:bg-gray-50 transition"
              >
                {item.pergunta}
                {aberta === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {aberta === index && (
                <div className="px-4 pb-4 text-gray-600 text-sm">{item.resposta}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
