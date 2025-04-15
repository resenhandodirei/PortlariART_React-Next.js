// src/app/screens/projetos/[slug]/page.tsx
import { useRouter } from 'next/router';
import projetos from '../../../data/projetos';  // Altere o caminho se necessário
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';

const ProjetoDetalhado = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Encontre o projeto com o slug correspondente
  const projeto = projetos.find((p) => p.slug === slug);

  if (!projeto) {
    return <div>Projeto não encontrado</div>;  // Mensagem de erro caso o projeto não exista
  }

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-[#8C0343]">{projeto.titulo}</h1>
      <div className="mt-4">
        <img src={projeto.imagem} alt={projeto.titulo} className="w-full h-auto" />
        <p className="mt-4">{projeto.descricaoLonga}</p>
        <div className="mt-4">
          <strong>Tecnologias:</strong>
          <ul>
            {projeto.tecnologias.map((tech: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined, index: Key | null | undefined) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjetoDetalhado;
