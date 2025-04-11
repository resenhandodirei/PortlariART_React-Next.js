'use client'

import { motion } from 'framer-motion'

export default function HeaderAbout() {
  return (
    <section className="bg-[#8C0343] text-white py-20 px-4 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 space-y-6"
        >
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
            Sobre mim
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-100">
            Sou desenvolvedora em formação, com foco em mobile e web, apaixonada por criar soluções que unem tecnologia, acessibilidade e impacto social. Atuo também na área jurídica, com ênfase em proteção de dados e direitos fundamentais, trazendo uma perspectiva única aos projetos que construo.
          </p>
          <p className="text-sm text-gray-200 italic">
            “Tecnologia com propósito transforma realidades.”
          </p>
        </motion.div>

        {/* Espaço para futura imagem ou ilustração profissional */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 hidden md:flex justify-end"
        >
          <div className="w-64 h-64 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center text-white text-sm">
            {/* Aqui pode entrar uma ilustração, ou foto estilizada futuramente */}
            Foto ou identidade visual profissional
          </div>
        </motion.div>
      </div>
    </section>
  )
}
