// components/Footer.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-[#8C0343] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm opacity-90">
          &copy; {new Date().getFullYear()} PortlariART. Todos os direitos reservados.
        </p>

        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm hover:text-gray-200 transition-colors duration-300 ease-in-out"
          >
            <FaGithub size={18} />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/seu-usuario"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm hover:text-gray-200 transition-colors duration-300 ease-in-out"
          >
            <FaLinkedin size={18} />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:seu-email@exemplo.com"
            className="flex items-center space-x-2 text-sm hover:text-gray-200 transition-colors duration-300 ease-in-out"
          >
            <FaEnvelope size={18} />
            <span>Contato</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
