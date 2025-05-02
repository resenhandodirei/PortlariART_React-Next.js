export interface ProjetoDetalhado {
  deploy: string | undefined;
  repositorio: string | undefined;
  slug: string;
  titulo: string;
  descricao: string;
  descricaoLonga: string;
  imagem: string;
  imagens: string[];
  tecnologias: string[];
  categoria: "FrontEnd" | "BackEnd" | "Mobile" | "FullStack" | "Dados"; // <- nova propriedade
  objetivos?: string;
  aprendizados?: string;
  diferenciais?: string;
  destaque?: string;
}

export const projetos: ProjetoDetalhado[] = [
  {
    titulo: "AgendaPsico",
    slug: "agendapsico",
    descricao: "Agenda para psicólogos...",
    descricaoLonga:
      "Uma aplicação para psicólogos agendarem suas consultas com facilidade, visualizarem seus horários disponíveis e acompanharem seus atendimentos de forma prática.",
    imagem: "/images/agendapsico.png",
    imagens: [
      "/images/agendapsico1.png",
      "/images/agendapsico2.png",
      "/images/agendapsico3.png",
    ],
    tecnologias: ["PHP", "PostgreSQL", "Bootstrap"],
    categoria: "FullStack", // <- adicionada
    deploy: undefined,
    repositorio: undefined,
    objetivos:
      "Criar uma ferramenta que auxilie profissionais da psicologia a organizarem sua rotina de atendimentos.",
    aprendizados:
      "Integração de API de calendário, manipulação de datas, organização de rotas em PHP e SQL avançado.",
    diferenciais:
      "Interface pensada para não causar fadiga visual, campos de agendamento simplificados, foco na produtividade.",
  },
  {
    titulo: "Fila Med",
    slug: "fila-med",
    descricao: "Aplicativo para organização de filas em clínicas...",
    descricaoLonga:
      "Uma solução para melhorar o atendimento em clínicas de saúde, permitindo o controle de senhas e filas de forma moderna e eficiente.",
    imagem: "/images/fila-med.png",
    imagens: [
      "/images/fila-med1.png",
      "/images/fila-med2.png",
      "/images/fila-med3.png",
    ],
    tecnologias: ["React", "Node.js"],
    categoria: "FullStack", // <- adicionada
    deploy: undefined,
    repositorio: undefined,
    objetivos:
      "Desenvolver um app moderno para otimizar o processo de atendimento em clínicas, evitando aglomerações e confusões.",
    aprendizados:
      "Comunicação entre front-end e back-end com React e Node, lógica de geração de senhas, manipulação de filas em tempo real.",
    diferenciais:
      "Design focado na área da saúde, animações sutis para melhorar a experiência do usuário, responsividade total.",
    destaque:
      "Aplicativo com conceito validado em clínicas reais, criado em ambiente de residência tecnológica.",
  },
];

export default projetos;
