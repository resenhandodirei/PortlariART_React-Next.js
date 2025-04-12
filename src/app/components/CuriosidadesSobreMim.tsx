'use client'

import { Heart, BookOpen, PawPrint, Plane, Music, Smile } from 'lucide-react'

const curiosidades = [
  {
    icone: <Heart className="text-pink-500 w-6 h-6" />,
    titulo: 'Romântica incurável',
    descricao: 'Sou apaixonada por livros de romance (mesmo os de qualidade duvidosa!).',
  },
  {
    icone: <PawPrint className="text-amber-500 w-6 h-6" />,
    titulo: 'Irmã de pet',
    descricao: 'Tenho uma gatinha chamada Miau que manda e desmanda aqui em casa.',
  },
  {
    icone: <BookOpen className="text-indigo-500 w-6 h-6" />,
    titulo: 'Curiosa por natureza',
    descricao: 'Não consigo resistir a aprender algo novo — especialmente se for tecnologia ou Direito!',
  },
  {
    icone: <Plane className="text-cyan-600 w-6 h-6" />,
    titulo: 'Caseira com espírito aventureiro',
    descricao: 'Amo ficar em casa, mas meu coração bate mais forte perto do mar.',
  },
  {
    icone: <Music className="text-purple-500 w-6 h-6" />,
    titulo: 'Trilha sonora constante',
    descricao: 'Sempre tem uma música tocando enquanto estudo, crio ou sonho.',
  },
  {
    icone: <Smile className="text-yellow-500 w-6 h-6" />,
    titulo: 'Gentileza importa',
    descricao: 'Acredito que educação e gentileza podem mudar o mundo (e as conexões).',
  },
]

export default function CuriosidadesSobreMim() {
  return (
    <section className="bg-white py-16 px-4" id="curiosidades">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#8C0343] mb-10">
          Curiosidades sobre mim
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {curiosidades.map((curio, idx) => (
            <div
              key={idx}
              className="bg-gray-100 rounded-xl p-5 shadow hover:shadow-md transition duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center gap-3 mb-2">
                {curio.icone}
                <h3 className="text-lg font-semibold">{curio.titulo}</h3>
              </div>
              <p className="text-sm text-gray-700">{curio.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
