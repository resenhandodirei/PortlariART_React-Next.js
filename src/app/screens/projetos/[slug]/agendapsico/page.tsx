// src/app/screens/projetos/[slug]/agendapsico/page.tsx
import projetos from "@/data/projetos";

const ProjetoAgendapsico = () => {
  const projeto = projetos.find((p) => p.slug === "agendapsico");

  if (!projeto) {
    return <div>Projeto não encontrado.</div>;
  }

  return (
    <div>
      <h1>{projeto.titulo}</h1>
      <img src={projeto.imagem} alt={projeto.titulo} />
      <p>{projeto.descricaoLonga}</p>
      <h3>Tecnologias usadas:</h3>
      <ul>
        {projeto.tecnologias.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjetoAgendapsico;
