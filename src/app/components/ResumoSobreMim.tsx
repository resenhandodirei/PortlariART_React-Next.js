import Link from 'next/link'

export default function ResumoSobreMim() {
  return (
    <section className="py-12 px-6 text-center max-w-6xl mx-auto bg-[#0468BF] rounded-lg shadow-lg text-white mt-3">
      <h2 className="text-3xl font-bold text-[#8C0343] mb-4">Quem sou eu?</h2>
      <p className="text-gray-200 mb-4">
        Sou uma desenvolvedora mobile apaixonada por criar soluções que fazem a diferença. Além disso, sou estudante de Direito e entusiasta da interseção entre tecnologia e justiça social.
      </p>
      <Link href="/about" className="text-[#8C0343] underline font-medium">Ler mais</Link>
    </section>
  )
}