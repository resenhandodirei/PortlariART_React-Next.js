'use client'

import { BookOpen, Target, Lightbulb, Code } from 'lucide-react';

type Topico = {
  titulo: string;
  descricao: string;
  icone: React.ReactNode;
};

const topicos: Topico[] = [
  {
    titulo: 'Objetivo',
    descricao: 'Mostrar minha trajetória como desenvolvedora, destacando meus principais projetos, aprendizados e habilidades técnicas.',
    icone: <Target className="text-pink-600 w-6 h-6" />,
  },
  {
    titulo: 'Aprendizados',
    descricao: 'Ao longo da criação deste portfólio, aprofundei meus conhecimentos em React, TypeScript, componentes reutilizáveis e estilização com Tailwind.',
    icone: <BookOpen className="text-pink-600 w-6 h-6" />,
  },
  {
    titulo: 'Diferenciais',
    descricao: 'O projeto conta com rotas dinâmicas, animações suaves, componentes interativos e responsividade em todos os dispositivos.',
    icone: <Lightbulb className="text-pink-600 w-6 h-6" />,
  },
  {
    titulo: 'Tecnologias',
    descricao: 'React, Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide Icons.',
    icone: <Code className="text-pink-600 w-6 h-6" />,
  },
];

export default function TopicosInformativos() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
        Tópicos Informativos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {topicos.map((topico, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <div>{topico.icone}</div>
              <h3 className="text-lg font-medium text-gray-900">{topico.titulo}</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {topico.descricao}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
