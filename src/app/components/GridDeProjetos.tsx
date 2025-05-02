"use client";

import Image from "next/image";
import Link from "next/link";
import projetos from "@/data/projetos";
import { useState } from "react";
import { motion } from "framer-motion";

const GridDeProjetos = () => {
  const [filtro, setFiltro] = useState("Todos");

  // Filtros predefinidos
  const categorias = ["Todos", "FrontEnd", "BackEnd", "Mobile", "FullStack", "Dados"];

  // Filtro dos projetos com base na categoria selecionada
  const projetosFiltrados =
    filtro === "Todos"
      ? projetos
      : projetos.filter((p) => p.categoria === filtro);

  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-[#8C0343]">Projetos</h2>

      {/* Botões de filtro */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setFiltro(cat)}
            className={`px-4 py-2 text-sm rounded-full border transition ${
              filtro === cat
                ? "bg-[#8C0343] text-white"
                : "bg-white text-[#8C0343] border-[#8C0343]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid de projetos */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {projetosFiltrados.map((projeto, i) => {
          const slug = projeto.slug || projeto.titulo.toLowerCase().replace(/\s+/g, "-");

          return (
            <motion.div
              key={i}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rounded-xl shadow hover:shadow-lg transition bg-white overflow-hidden"
            >
              <Link href={`/screens/projetos/${slug}`}>
                <Image
                  src={projeto.imagem}
                  alt={projeto.titulo}
                  width={600}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#8C0343] hover:underline">
                    {projeto.titulo}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">{projeto.descricao}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {projeto.tecnologias.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-[#8C0343]/10 text-[#8C0343] text-xs px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default GridDeProjetos;
