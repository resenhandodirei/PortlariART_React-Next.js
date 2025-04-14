import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'

interface ProjetoEmDestaqueProps {
  imagem: string
  titulo: string
  descricao: string
  tecnologias: string[]
  linkDeploy?: string
  linkRepositorio?: string
  invertido?: boolean // Para alternar layout
}

export default function ProjetoEmDestaque({
  imagem,
  titulo,
  descricao,
  tecnologias,
  linkDeploy,
  linkRepositorio,
  invertido = false,
}: ProjetoEmDestaqueProps) {
  return (
    <section className="py-12 px-6 sm:px-10 lg:px-32 bg-white">
      <div className={`flex flex-col-reverse md:flex-row ${invertido ? 'md:flex-row-reverse' : ''} items-center gap-10`}>
        {/* Texto */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold text-[#8C0343] mb-3">{titulo}</h3>
          <p className="text-gray-700 mb-4">{descricao}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tecnologias.map((tech, index) => (
              <span
                key={index}
                className="bg-[#8C0343]/10 text-[#8C0343] text-xs px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            {linkDeploy && (
              <a
                href={linkDeploy}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-[#8C0343] hover:underline"
              >
                <ExternalLink size={16} /> Ver Projeto
              </a>
            )}
            {linkRepositorio && (
              <a
                href={linkRepositorio}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-700 hover:underline"
              >
                <Github size={16} /> GitHub
              </a>
            )}
          </div>
        </div>

        {/* Imagem */}
        <div className="md:w-1/2">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <Image
              src={imagem}
              alt={titulo}
              width={600}
              height={400}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
