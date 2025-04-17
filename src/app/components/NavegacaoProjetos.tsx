// app/components/NavegacaoProjetos.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProjetoDetalhado } from "@/data/projetos";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Props {
  projetos: ProjetoDetalhado[];
  atualSlug: string;
}

export default function NavegacaoProjetos({ projetos, atualSlug }: Props) {
  const atualIndex = projetos.findIndex((p) => p.slug === atualSlug);
  const anterior = atualIndex > 0 ? projetos[atualIndex - 1] : null;
  const proximo = atualIndex < projetos.length - 1 ? projetos[atualIndex + 1] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-16 px-6 max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm md:text-base"
    >
      {anterior ? (
        <Link
          href={`/screens/projetos/${anterior.slug}`}
          className="group flex items-center gap-3 text-gray-700 hover:text-[#8C0343] transition duration-300"
        >
          <FaArrowLeft className="transition-transform group-hover:-translate-x-1 duration-300" />
          <span className="font-medium">Projeto anterior</span>
        </Link>
      ) : (
        <div className="w-40" />
      )}

      {proximo ? (
        <Link
          href={`/screens/projetos/${proximo.slug}`}
          className="group flex items-center gap-3 text-gray-700 hover:text-[#8C0343] transition duration-300"
        >
          <span className="font-medium">Próximo projeto</span>
          <FaArrowRight className="transition-transform group-hover:translate-x-1 duration-300" />
        </Link>
      ) : (
        <div className="w-40" />
      )}
    </motion.div>
  );
}
