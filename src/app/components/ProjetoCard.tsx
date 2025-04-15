import Image from "next/image";
import Link from "next/link";

interface ProjetoCardProps {
  titulo: string;
  descricao: string;
  tecnologias: string[];
  imagem: string;
  link: string;
  onClick?: () => void;
}

const ProjetoCard = ({
  titulo,
  descricao,
  tecnologias,
  imagem,
  onClick,
}: ProjetoCardProps) => {
  const slug = titulo.toLowerCase().replace(/\s+/g, "-");

  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-xl shadow hover:shadow-md transition bg-white"
    >
      <Image
        src={imagem}
        alt={titulo}
        width={500}
        height={300}
        className="rounded-t-xl object-cover h-48 w-full"
      />
      <div className="p-4">
        <Link
          href={`/projetos/${slug}`}
          className="text-lg font-semibold text-[#8C0343] hover:underline"
          onClick={(e) => e.stopPropagation()}
        >
          {titulo}
        </Link>
        <p className="text-sm text-gray-600 mt-2">{descricao}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tecnologias.map((tech, index) => (
            <span
              key={index}
              className="bg-[#8C0343]/10 text-[#8C0343] text-xs px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjetoCard;
