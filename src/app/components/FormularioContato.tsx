"use client";

import { useState } from "react";

const FormularioContato = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
    setForm({ nome: "", email: "", mensagem: "" });
  };

  return (
    <section
      id="formulario-contato"
      className="bg-gradient-to-br from-white to-[#fff0f5] rounded-3xl p-8 md:p-12 shadow-2xl max-w-3xl mx-auto border border-[#fcd5e5] mt-10 mb-10"
    >
      <h3 className="text-3xl font-extrabold text-center text-[#8C0343] mb-8">
        Me envie uma mensagem ✨
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-semibold text-[#8C0343]">
            Nome
          </label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-[#e2c0d2] bg-white placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#8C0343]/40 shadow-sm transition"
            placeholder="Seu nome completo"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-[#8C0343]">
            E-mail
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-[#e2c0d2] bg-white placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#8C0343]/40 shadow-sm transition"
            placeholder="exemplo@email.com"
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-semibold text-[#8C0343]">
            Mensagem
          </label>
          <textarea
            name="mensagem"
            value={form.mensagem}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-4 rounded-xl border border-[#e2c0d2] bg-white placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#8C0343]/40 shadow-sm transition"
            placeholder="Digite sua mensagem com carinho :)"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-2 bg-[#8C0343] hover:bg-[#6f0235] text-white font-bold rounded-full shadow-md transition"
        >
          Enviar mensagem 💖
        </button>
      </form>
    </section>
  );
};

export default FormularioContato;
