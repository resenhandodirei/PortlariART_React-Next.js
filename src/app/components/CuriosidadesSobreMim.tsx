'use client'

import { Heart, BookOpen, PawPrint, Plane, Music, Smile } from 'lucide-react'

const curiosidades = [
  {
    icone: <Heart className="text-[#8C0343] w-6 h-6" />,
    titulo: 'Romântica incurável',
    descricao: 'Sou apaixonada por livros de romance (mesmo os de qualidade duvidosa!).',
  },
  {
    icone: <PawPrint className="text-[#F2AED4] w-6 h-6" />,
    titulo: 'Irmã de pet',
    descricao: 'Tenho uma gatinha chamada Miau que manda e desmanda aqui em casa.',
  },
  {
    icone: <BookOpen className="text-[#2D3766] w-6 h-6" />,
    titulo: 'Curiosa por natureza',
    descricao: 'Não consigo resistir a aprender algo novo — especialmente se for tecnologia ou Direito!',
  },
  {
    icone: <Plane className="text-[#033867] w-6 h-6" />,
    titulo: 'Espírito aventureiro',
    descricao: 'Amo ficar em casa, mas meu coração bate mais forte perto do mar.',
  },
  {
    icone: <Music className="text-[#A30454] w-6 h-6" />,
    titulo: 'Trilha sonora constante',
    descricao: 'Sempre tem uma música tocando enquanto estudo, crio ou sonho.',
  },
  {
    icone: <Smile className="text-[#FCE3EE] w-6 h-6" />,
    titulo: 'Gentileza importa',
    descricao: 'Acredito que educação e gentileza podem mudar o mundo (e as conexões).',
  },
]

export default function CuriosidadesSobreMim() {
  return (
    <section
      id="curiosidades"
      className="py-16 px-6 bg-gradient-to-br from-[#F2AED4] via-[#FCE3EE] to-[#033867] rounded-2xl mb-16"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#2D3766] mb-12">
          Curiosidades sobre mim
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {curiosidades.map((item, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl p-6 flex flex-col h-full shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-white rounded-full">{item.icone}</div>
                <h3 className="ml-3 text-lg font-semibold text-[#2D3766]">
                  {item.titulo}
                </h3>
              </div>
              <p className="text-sm text-[#2D3766] flex-grow">
                {item.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
