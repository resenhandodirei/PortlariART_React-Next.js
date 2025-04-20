// app/components/BotaoContato.tsx
"use client";

import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";
import Link from "next/link";

export default function BotaoContato() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-center mt-12 mb-16"
    >
      <Link href="/contato">
        <button className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-600 via-fuchsia-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:brightness-110 transition duration-300 ease-in-out hover:scale-105">
          <FaEnvelopeOpenText className="text-lg" />
          Quero colaborar 💌
        </button>
      </Link>
    </motion.div>
  );
}
