"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CallToActionContato = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-gradient-to-r from-[#8C0343]/90 to-[#FFB6C1]/90 rounded-2xl p-8 md:p-12 text-white text-center shadow-lg"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Vamos conversar?
      </h2>
      <p className="text-lg md:text-xl font-light mb-6 max-w-2xl mx-auto">
        Se você tiver alguma ideia, dúvida ou proposta, estou por aqui! É só me chamar no WhatsApp ou usar o formulário abaixo.
      </p>

      {/* 👉 Botão para o formulário interno */}
      <Link href="#formulario-contato" scroll={true}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#8C0343] font-semibold px-6 py-3 rounded-full shadow-md transition hover:bg-[#ffeef3]"
        >
          Preencher formulário 💌
        </motion.button>
      </Link>

      {/* 👉 OU, descomente se quiser linkar pro WhatsApp direto */}
      {/* 
      <Link
        href="https://wa.me/5599999999999" // ← coloque seu número aqui
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#8C0343] font-semibold px-6 py-3 rounded-full shadow-md transition hover:bg-[#ffeef3]"
        >
          Chamar no WhatsApp 📲
        </motion.button>
      </Link>
      */}
    </motion.div>
  );
};

export default CallToActionContato;
