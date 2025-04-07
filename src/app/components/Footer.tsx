export default function Footer() {
    return (
      <footer className="bg-[#8C0343] text-white py-6 mt-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-2 md:mb-0">&copy; {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.</p>
  
          <div className="flex space-x-4">
            <a
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition-colors"
            >
              LinkedIn
            </a>
            <a href="#contato" className="hover:text-gray-200 transition-colors">
              Contato
            </a>
          </div>
        </div>
      </footer>
    )
  }
  