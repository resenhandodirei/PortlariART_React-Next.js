'use client'

import { motion } from 'framer-motion'

export default function HeaderProjetos() {
  return (
    <section className="bg-[#fefefe] text-gray-800 py-16 px-6 sm:px-10 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Meus Projetos
        </h2>
        <p className="text-lg sm:text-xl text-gray-600">
          Aqui estão alguns dos trabalhos que desenvolvi com carinho e dedicação.
          Cada um representa uma fase da minha evolução como dev.
        </p>
      </motion.div>
    </section>
  )
}
