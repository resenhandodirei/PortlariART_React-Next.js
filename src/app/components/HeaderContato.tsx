"use client";

import { motion } from "framer-motion";

const HeaderContato = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center py-16 px-4 bg-gradient-to-r from-[#8C0343]/90 to-[#ff91a4]/90 text-white rounded-xl shadow-lg"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Vamos conversar?
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mx-auto font-light">
        Seja para tirar dúvidas, trocar ideias ou iniciar um novo projeto — estou à disposição. Me manda uma mensagem 💌
      </p>
    </motion.header>
  );
};

export default HeaderContato;
