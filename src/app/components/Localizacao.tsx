'use client'

export default function Localizacao() {
  return (
    <section className="py-10 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Minha Localização</h2>
        <p className="text-gray-600 mb-6">
          Fortaleza - CE, Brasil 🌴<br />
          Disponível para projetos remotos e presenciais na região.
        </p>
        <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Localização"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15926.036143642173!2d-38.5297!3d-3.7319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74851f67dc10d%3A0xb8ff64528fe0c2aa!2sFortaleza%2C%20CE!5e0!3m2!1spt-BR!2sbr!4v1616179023330!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}
