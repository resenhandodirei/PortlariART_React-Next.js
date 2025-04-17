import { SiPhp, SiPostgresql, SiBootstrap, SiReact } from "react-icons/si";

// Em vez de usar JSX diretamente no objeto, vamos retornar as funções que renderizam os ícones
export const iconesTecnologias: Record<string, () => JSX.Element> = {
  PHP: () => <SiPhp size={30} className="text-purple-600" />,
  PostgreSQL: () => <SiPostgresql size={30} className="text-blue-500" />,
  Bootstrap: () => <SiBootstrap size={30} className="text-indigo-600" />,
  React: () => <SiReact size={30} className="text-cyan-400" />,
};
