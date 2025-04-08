import Link from 'next/link'

export default function ProjetosDestaque() {
  return (
    <section className="py-12 px-6 bg-[#F2AED4]">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#8C0343]">Projetos em Destaque</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2 text-[#2D3766]">DelicQueue</h3>
          <p className="text-sm text-gray-600 mb-4">Um gerador de senhas interativo com estética gastronômica.</p>
          <span className="text-xs bg-[#8C0343] text-white px-2 py-1 rounded">React Native</span>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2 text-[#2D3766]">CoinVerter</h3>
          <p className="text-sm text-gray-600 mb-4">Conversor de moedas simples e direto ao ponto.</p>
          <span className="text-xs bg-[#8C0343] text-white px-2 py-1 rounded">React</span>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2 text-[#2D3766]">AgendaPsico</h3>
          <p className="text-sm text-gray-600 mb-4">Sistema para agendamentos em clínicas psicológicas.</p>
          <span className="text-xs bg-[#8C0343] text-white px-2 py-1 rounded">PHP + PostgreSQL</span>
        </div>
      </div>
      <div className="text-center mt-6">
        <Link href="/projetos" className="text-[#8C0343] underline font-medium">Ver todos os projetos</Link>
      </div>
    </section>
  )
}