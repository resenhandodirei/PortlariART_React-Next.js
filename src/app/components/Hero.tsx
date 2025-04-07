// components/Hero.tsx
export default function Hero() {
    return (
      <section className="bg-[#8C0343] text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Olá, eu sou a Larissa Corrêa</h1>
        <p className="text-lg mb-6">Desenvolvedora mobile, estudante de Direito e apaixonada por tecnologia e justiça social.</p>
        <a
          href="/cv-larissa.pdf"
          className="bg-white text-[#8C0343] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
          download
        >
          Baixar Currículo
        </a>
      </section>
    )
  }
  