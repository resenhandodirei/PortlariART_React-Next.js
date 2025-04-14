'use client'

import ProjetoCard from './ProjetoCard'

export default function GridDeProjetos() {
  const projetos = [
    {
      titulo: 'DelicQueue',
      descricao: 'Gerenciador de senhas com estética gastronômica.',
      tecnologias: ['React Native', 'Expo', 'TypeScript'],
      linkDeploy: 'https://delicqueue.vercel.app',
      linkRepositorio: 'https://github.com/resenhandodirei/delicqueue',
    },
    {
      titulo: 'CoinVerter',
      descricao: 'Conversor de moedas moderno e funcional.',
      tecnologias: ['React', 'API ExchangeRate', 'Tailwind'],
      linkRepositorio: 'https://github.com/resenhandodirei/coinverter',
    },
    {
      titulo: 'AgendaPsico',
      descricao: 'Calendário de agendamentos com backend em PHP.',
      tecnologias: ['PHP', 'PostgreSQL', 'Bootstrap'],
    },
    // Adicione outros projetos aqui...
  ]

  return (
    <section className="bg-gray-50 px-6 py-16 sm:px-10 lg:px-32">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projetos.map((projeto, index) => (
          <ProjetoCard key={index} {...projeto} />
        ))}
      </div>
    </section>
  )
}
