import { ExternalLink, Github } from 'lucide-react'

interface ProjetoCardProps {
  titulo: string
  descricao: string
  tecnologias: string[]
  linkDeploy?: string
  linkRepositorio?: string
}

export default function ProjetoCard({
  titulo,
  descricao,
  tecnologias,
  linkDeploy,
  linkRepositorio,
}: ProjetoCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-bold text-[#8C0343] mb-2">{titulo}</h3>
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
  )
}
