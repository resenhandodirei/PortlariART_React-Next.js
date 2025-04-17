// app/components/LinksProjeto.tsx
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface LinksProjetoProps {
  repositorio?: string;
  deploy?: string;
}

export default function LinksProjeto({ repositorio, deploy }: LinksProjetoProps) {
  if (!repositorio && !deploy) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center gap-6 mt-6"
    >
      {repositorio && (
        <a
          href={repositorio}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-700 transition-colors shadow-md"
        >
          <FaGithub className="text-lg" />
          <span>Repositório</span>
        </a>
      )}

      {deploy && (
        <a
          href={deploy}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-md"
        >
          <FaExternalLinkAlt className="text-sm" />
          <span>Deploy</span>
        </a>
      )}
    </motion.div>
  );
}
