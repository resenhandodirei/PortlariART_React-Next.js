import HeaderProjetos from "@/app/components/HeaderProjetos";
import ProjetoCard from "@/app/components/ProjetoCard";

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

    </>
  );
}