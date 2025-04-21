"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../app/styles/swiper-custom.css"; // Ajuste o caminho conforme sua estrutura

// Dados de exemplo, substitua conforme necessário ou importe de um arquivo de dados
const projetos = [
  { nome: "DelicQueue", descricao: "Gerador de senhas interativo com estética gastronômica.", cor: "#F9A825", tecnologia: "React Native" },
  { nome: "CoinVerter", descricao: "Conversor de moedas simples e direto ao ponto.", cor: "#039BE5", tecnologia: "React" },
  { nome: "AgendaPsico", descricao: "Sistema para agendamentos em clínicas psicológicas.", cor: "#F44336", tecnologia: "PHP + PostgreSQL" },
  { nome: "MoneyQueen", descricao: "Plataforma de apoio financeiro para jovens senhoras.", cor: "#8C0343", tecnologia: "Next.js" },
];

export default function ProjetosDestaque() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[#F2AED4] via-[#fcddec] to-[#F2AED4] mb-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-[#8C0343]">
        ✨ Projetos em Destaque
      </h2>

      <div className="max-w-6xl mx-auto relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1.1}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
          pagination={{ clickable: true }}
          className="px-2"
        >
          {projetos.map((projeto, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#2D3766] mb-2">{projeto.nome}</h3>
                  <p className="text-sm text-gray-600 mb-4">{projeto.descricao}</p>
                </div>
                <span
                  className="text-xs font-medium text-white px-2 py-1 rounded self-start"
                  style={{ backgroundColor: projeto.cor }}
                >
                  {projeto.tecnologia}
                </span>
              </div>
            </SwiperSlide>
          ))}

          {/* Botões personalizados */}
          <div className="swiper-button-prev custom-nav-arrow" />
          <div className="swiper-button-next custom-nav-arrow" />
        </Swiper>
      </div>
    </section>
  );
}
