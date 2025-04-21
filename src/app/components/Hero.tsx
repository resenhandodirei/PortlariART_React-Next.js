// components/Hero.tsx
export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-[#8C0343] to-[#033867] text-white py-20 px-6 text-center shadow-lg">
      <h1 className="text-4xl font-extrabold mb-4 text-[#F2AED4]">Olá, eu sou a Larissa Corrêa</h1>
      <p className="text-lg mb-6 opacity-80">Desenvolvedora mobile, estudante de Direito e apaixonada por tecnologia e justiça social.</p>
      <a
        href="/cv-larissa.pdf"
        className="bg-[#2D3766] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#033867] transition-colors duration-300 ease-in-out transform hover:shadow-xl hover:scale-105"
        download
      >
        Baixar Currículo
      </a>
    </section>
  )
}
