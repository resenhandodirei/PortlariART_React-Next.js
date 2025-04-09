'use client'

import { motion } from 'framer-motion'

export default function HeaderAbout() {
  return (
    <section className="bg-[#FCE4EC] py-20 px-6 text-center text-[#8C0343]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Oi! Eu sou a <span className="underline decoration-[#8C0343]/60">Larissa</span> 💻✨
        </h1>
        <p className="text-lg md:text-xl text-[#8C0343]/90">
          Estudante de Direito e de Tecnologia apaixonada por aprender, ensinar e transformar ideias em soluções reais.  
        </p>
      </motion.div>
    </section>
  )
}
