"use client";

import projetos from "../../../../data/projetos";
import GaleriaImagensCarrossel from "@/app/components/GaleriaImagens";
import LikeDislike from "@/app/components/LikeDislike";
import TopicosInformativos from "@/app/components/TopicosInformativos";
import { BlocoTecnologias } from "@/app/components/BlocoTecnologias";
import LinksProjeto from "@/app/components/LinksProjeto";
import NavegacaoProjetos from "@/app/components/NavegacaoProjetos";
import BotaoContato from "@/app/components/BotaoContato";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

interface ProjetoDetalhadoProps {
  params: {
    slug: string;
  };
}

const ProjetoDetalhadoPage = ({ params }: ProjetoDetalhadoProps) => {
  const projeto = projetos.find((p) => p.slug === params.slug);

  if (!projeto) {
    return <div className="text-center py-20 text-red-600 font-semibold">Projeto não encontrado</div>;
  }

  return (
    <>
      <Navbar />

      <section className="py-12 px-4 max-w-6xl mx-auto rounded-lg bg-gradient-to-b from-white via-[#F1F5FF] to-[#D0E0FF]">
        <h1 className="text-4xl font-bold text-[#8C0343] mb-6">{projeto.titulo}</h1>

        <div className="mb-8">
          <GaleriaImagensCarrossel imagens={projeto.imagens} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow mt-8">
          <p className="text-lg leading-relaxed text-gray-700">{projeto.descricaoLonga}</p>

          <div className="mt-4">
            <strong className="text-[#8C0343]">Tecnologias utilizadas:</strong>
            <ul className="list-disc pl-6 mt-2 text-gray-800">
              {projeto.tecnologias.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

  
        </div>
        
      </section>

      <div className="mt-6 px-4 max-w-6xl mx-auto">
            <LikeDislike />
          </div>
      

      <TopicosInformativos />

      <div className="max-w-6xl mx-auto px-4 mt-10">
        <BlocoTecnologias tecnologias={projeto.tecnologias} />
      </div>

      <LinksProjeto repositorio={projeto.repositorio} deploy={projeto.deploy} />
      <NavegacaoProjetos projetos={projetos} atualSlug={params.slug} />
      <BotaoContato />

      <Footer />
    </>
  );
};

export default ProjetoDetalhadoPage;
