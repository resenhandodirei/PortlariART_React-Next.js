import projetos from "../../../../data/projetos";
import GaleriaImagens from "@/app/components/GaleriaImagens";
import LikeDislike from "@/app/components/LikeDislike";
import TopicosInformativos from "@/app/components/TopicosInformativos";
import { BlocoTecnologias } from "@/app/components/BlocoTecnologias";
import ProjetoDetalhadoComponent from "@/app/components/ProjetoDetalhado";
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
    return <div>Projeto não encontrado</div>;
  }

  return (
    <>
      <Navbar />

      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-[#8C0343]">{projeto.titulo}</h1>

        <GaleriaImagens imagens={projeto.imagens} />

        <div className="mt-4">
          <p className="text-lg">{projeto.descricaoLonga}</p>

          <div className="mt-4">
            <strong>Tecnologias:</strong>
            <ul className="list-disc pl-6">
              {projeto.tecnologias.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6">
            <LikeDislike />
          </div>
        </div>
      </section>

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
