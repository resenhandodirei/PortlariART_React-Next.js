'use client'

import { useState } from 'react'

export default function FormularioContato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  })

  const [mensagemEnviada, setMensagemEnviada] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você pode integrar com um serviço externo
    console.log(formData)
    setMensagemEnviada(true)
    setFormData({ nome: '', email: '', mensagem: '' })
  }

  return (
    <section className="px-6 py-12 bg-white">
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-100 p-8 rounded-2xl shadow-lg">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
              Nome
            </label>
            <input
              type="text"
              name="nome"
              id="nome"
              required
              value={formData.nome}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#8C0343] focus:border-[#8C0343]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#8C0343] focus:border-[#8C0343]"
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">
              Mensagem
            </label>
            <textarea
              name="mensagem"
              id="mensagem"
              rows={5}
              required
              value={formData.mensagem}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-[#8C0343] focus:border-[#8C0343]"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="bg-[#8C0343] text-white px-6 py-2 rounded-lg hover:bg-[#a40450] transition"
            >
              Enviar Mensagem
            </button>
          </div>

          {mensagemEnviada && (
            <p className="text-green-600 text-sm mt-2">
              Sua mensagem foi enviada com sucesso! 💌
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
