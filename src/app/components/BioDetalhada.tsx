'use client'

import { Briefcase, GraduationCap, Code, Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function BioDetalhada() {
  return (
    <section className="bg-white text-gray-800 py-16 px-4 md:px-10">
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6 border-b border-[#8C0343] inline-block pb-2">
            Minha trajetória
          </h2>
          <p className="text-base md:text-lg leading-relaxed">
            Minha formação é marcada pela interseção entre Direito e Tecnologia. Atualmente, curso Direito na Universidade Federal do Ceará (UFC) e Análise e Desenvolvimento de Sistemas pela XP Educação. Tenho buscado integrar essas áreas através de projetos que promovam a inovação com responsabilidade social, ética e impacto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Formação Acadêmica */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <GraduationCap className="text-[#8C0343]" />
              <h3 className="text-xl font-medium">Formação Acadêmica</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700">
              <li>Direito – Universidade Federal do Ceará (UFC)</li>
              <li>Análise e Desenvolvimento de Sistemas – XP Educação</li>
            </ul>
          </motion.div>

          {/* Experiências Relevantes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <Briefcase className="text-[#8C0343]" />
              <h3 className="text-xl font-medium">Experiência</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700">
              <li>Residente em TIC — Desenvolvimento iOS e Chatbots</li>
              <li>Estágio em T.I — Órgão público municipal</li>
              <li>Corretora de redações voluntária — Salvaguarda</li>
              <li>Projetos com foco em Data Science e Machine Learning</li>
            </ul>
          </motion.div>

          {/* Habilidades Técnicas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <Code className="text-[#8C0343]" />
              <h3 className="text-xl font-medium">Habilidades Técnicas</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700">
              <li>React, React Native, SwiftUI, Node.js</li>
              <li>PostgreSQL, Firebase, JWT</li>
              <li>Python (ML, IA, Pandas, NumPy)</li>
              <li>Figma, Git, Metodologias Ágeis</li>
            </ul>
          </motion.div>

          {/* Valores e Propósito */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <Heart className="text-[#8C0343]" />
              <h3 className="text-xl font-medium">Valores e Propósito</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700">
              <li>Educação como ferramenta de transformação</li>
              <li>Responsabilidade social e inclusão digital</li>
              <li>Compromisso com ética e direitos humanos</li>
              <li>Curiosidade como motor de aprendizado</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
