import { ProjetoDetalhado as ProjetoDetalhadoType } from "@/data/projetos";
import { BlocoTecnologias } from "./BlocoTecnologias";

interface Props {
  projeto: ProjetoDetalhadoType;
}

export default function ProjetoDetalhado({ projeto }: Props) {
  return (
    <div>
      <h1>{projeto.titulo}</h1>
      <img src={projeto.imagem} alt={projeto.titulo} />
      <p>{projeto.descricaoLonga}</p>
      <BlocoTecnologias tecnologias={projeto.tecnologias} />
    </div>
  );
}
