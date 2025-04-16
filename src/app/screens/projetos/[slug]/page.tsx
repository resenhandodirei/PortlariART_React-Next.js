'use client'

import { useParams } from "next/navigation";
import projetos from "@/data/projetos"; // Isso funciona com base no tsconfig.json se você tiver baseUrl: "src"

export default function ProjetoDetalhado() {
  const { slug } = useParams();

  const projeto = projetos.find((p) => p.slug === slug);

  if (!projeto) {
    return <div className="text-red-500 text-center mt-10">Projeto não encontrado</div>;
  }

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-[#8C0343]">{projeto.titulo}</h1>
      <img src={projeto.imagem} alt={projeto.titulo} className="w-full h-auto rounded-xl mt-4" />
      <p className="mt-4 text-gray-700">{projeto.descricaoLonga}</p>
      <div className="mt-4">
        <strong className="text-[#8C0343]">Tecnologias utilizadas:</strong>
        <ul className="list-disc list-inside">
          {projeto.tecnologias.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
