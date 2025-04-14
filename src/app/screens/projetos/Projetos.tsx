import HeaderProjetos from "@/app/components/HeaderProjetos";
import ProjetoCard from "@/app/components/ProjetoCard";
import GridDeProjetos from "@/app/components/GridDeProjetos";
import ProjetosDestaque from "@/app/components/ProjetosDestaque";

import React from "react";

export default function About() {
  return (
    <>
   <HeaderProjetos />
   <ProjetoCard 
      titulo="Example Title" 
      descricao="Example Description" 
      tecnologias={["React", "TypeScript"]} 
   />
    <GridDeProjetos />
    <ProjetosDestaque />


    </>
  );
}