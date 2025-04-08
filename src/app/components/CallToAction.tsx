import Link from 'next/link'

export default function CallToAction() {
  return (
    <section className="py-12 bg-[#F2AED4] text-[#8C0343] text-center">
      <h2 className="text-2xl font-semibold mb-4">Vamos construir algo incrível juntos?</h2>
      <p className="mb-6">Seja um app, um site ou um projeto acadêmico — me chama!</p>
      <Link href="/contato" className="bg-[#2D3766] text-white px-5 py-2 rounded font-medium hover:bg-[#033867] transition-opacity uppercase">Falar comigo</Link>
    </section>
  )
}