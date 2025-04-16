import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import projetos from "../../../../data/projetos";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

const ProjetoDetalhado = ({ params }: Props) => {
  const { slug } = params;
  const projeto = projetos.find((p) => p.slug === slug);

  if (!projeto) {
    return <div className="text-center mt-20 text-red-500">Projeto não encontrado</div>;
  }

  return (
    <>
      <Navbar />
      <main className="py-12 px-4 max-w-6xl mx-auto">
        {/* Botão de voltar */}
        <div className="mb-6">
          <Link
            href="/screens/projetos"
            className="text-sm text-[#8C0343] hover:underline flex items-center gap-1"
          >
            ← Voltar para projetos
          </Link>
        </div>

        {/* Título */}
        <h1 className="text-3xl font-bold text-[#8C0343] mb-4">{projeto.titulo}</h1>

        {/* Imagem */}
        <Image
          src={projeto.imagem}
          alt={projeto.titulo}
          width={1000}
          height={500}
          className="w-full h-auto rounded-lg shadow"
        />

        {/* Descrição longa */}
        <p className="mt-6 text-gray-700 leading-relaxed">{projeto.descricaoLonga}</p>

        {/* Tecnologias */}
        <div className="mt-6">
          <h2 className="font-semibold text-[#8C0343] mb-2">Tecnologias Utilizadas:</h2>
          <ul className="list-disc list-inside text-sm">
            {projeto.tecnologias.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjetoDetalhado;
