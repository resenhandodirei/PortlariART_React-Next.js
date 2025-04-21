import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-white via-white to-[#fef6fa]">
      <div className="relative max-w-3xl mx-auto text-center space-y-6 text-[#2D3766]">
        <h2 className="text-4xl font-bold leading-tight">
          Vamos criar algo incrível juntos?
        </h2>

        <p className="text-lg text-[#8C0343]">
          Seja um aplicativo, um site ou aquele projeto acadêmico especial — me chama!
        </p>

        <Link
          href="/contato"
          className="inline-block bg-[#8C0343] text-white px-8 py-3 rounded-full font-medium shadow-md hover:bg-[#2D3766] hover:shadow-lg transition-all duration-300"
        >
          Falar comigo
        </Link>
      </div>
    </section>
  )
}
