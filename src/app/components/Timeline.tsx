'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

const eventos = [
  {
    ano: '2022',
    mes: 'Abril a Junho',
    titulo: 'Hiring Coders - Fases 1 e 2',
    descricao: 'Participei das duas primeiras fases do programa Hiring Coders, aprendendo fundamentos de desenvolvimento e boas práticas em projetos ágeis.',
    icone: <Briefcase className="w-5 h-5 text-white" />,
  },
  {
    ano: '2022',
    mes: 'Agosto',
    titulo: 'MiniCamp XP Educação',
    descricao: 'Participei do MiniCamp promovido pela XP Educação, aprofundando meus conhecimentos sobre tecnologia e inovação.',
    icone: <Briefcase className="w-5 h-5 text-white" />,
  },
  {
    ano: '2022',
    mes: 'Março',
    titulo: 'Primeiros projetos em TI',
    descricao: 'Comecei a desenvolver sistemas simples com JavaScript, Python, Java e HTML/CSS, além de me envolver com grupos de estudo.',
    icone: <Briefcase className="w-5 h-5 text-white" />,
  },
  {
    ano: '2022',
    mes: 'Agosto',
    titulo: 'Início da graduação em Direito - UFC',
    descricao: 'Dei início à jornada acadêmica no curso de Direito, encantando-me pelos Direitos Humanos e pela interseção entre Direito e Tecnologia.',
    icone: <GraduationCap className="w-5 h-5 text-white" />,
  },
  {
    ano: '2022',
    mes: 'Outubro',
    titulo: 'Início da graduação em TI - XP Educação',
    descricao: 'Comecei o curso de Análise e Desenvolvimento de Sistemas com o propósito de usar a tecnologia para transformar a sociedade.',
    icone: <GraduationCap className="w-5 h-5 text-white" />,
  },
  {
    ano: '2023',
    mes: 'Janeiro',
    titulo: 'Primeira oportunidade profissional',
    descricao: 'Iniciei minha trajetória profissional na Prefeitura Municipal de Fortaleza, atuando com dados e desenvolvimento.',
    icone: <Briefcase className="w-5 h-5 text-white" />,
  },
  {
    ano: '2023',
    mes: 'Fevereiro',
    titulo: 'GETIS - UNIFOR',
    descricao: 'Fui selecionada para o GETIS na linha de Privacidade e Proteção de Dados, sendo orientada por grandes referências da área.',
    icone: <Briefcase className="w-5 h-5 text-white" />,
  },
  {
    ano: '2023',
    mes: 'Março',
    titulo: 'GEDD - PUC-Campinas',
    descricao: 'Iniciei minha atuação acadêmica com Direito Digital, integrando o Grupo de Estudos em Direito Digital da PUC-Campinas.',
    icone: <Briefcase className="w-5 h-5 text-white" />,
  },
  {
    ano: '2023',
    mes: 'Março',
    titulo: 'NECC - UFC',
    descricao: 'Passei a integrar o Núcleo de Estudos em Ciências Criminais na linha de Direito Penal e Tecnologia.',
    icone: <Briefcase className="w-5 h-5 text-white" />,
  },
  {
    ano: '2023',
    mes: 'Março',
    titulo: 'GEDAI - UFC',
    descricao: 'Fui selecionada para o GEDAI na linha de Direitos Humanos, fortalecendo minha atuação interdisciplinar.',
    icone: <Briefcase className="w-5 h-5 text-white" />,
  },
  {
    ano: '2023',
    mes: 'Abril',
    titulo: 'Salvaguarda - Professora e Corretora de Redação',
    descricao: 'Comecei como corretora voluntária na maior iniciativa jovem do Brasil, contribuindo com a formação de estudantes de baixa renda.',
    icone: <Briefcase className="w-5 h-5 text-white" />,
  },
  {
    ano: '2023',
    mes: 'Maio',
    titulo: 'Projeto XP Smart Money',
    descricao: 'Participei do desenvolvimento do jogo XP Smart Money, voltado à educação financeira para jovens, unindo gamificação, tecnologia e impacto social.',
    icone: <Briefcase className="w-5 h-5 text-white" />,
  },  
  {
    ano: '2024',
    mes: 'Janeiro',
    titulo: 'Curso TIC Android',
    descricao: 'Selecionada para o curso com foco em desenvolvimento mobile com Kotlin e Java, fortalecendo minha base em Android.',
    icone: <Briefcase className="w-5 h-5 text-white" />,
  },
  {
    ano: '2024',
    mes: 'Fevereiro',
    titulo: 'Curso de Manutenção de Computadores',
    descricao: 'Participei de um curso prático de manutenção de computadores, aprimorando minhas habilidades técnicas em hardware.',
    icone: <Briefcase className="w-5 h-5 text-white" />,
  },
  {
    ano: '2024',
    mes: 'Junho',
    titulo: 'Residência Tecnológica em iOS - IREDE',
    descricao: 'Selecionada para a residência com foco em desenvolvimento mobile iOS, com capacitação prática e vivência no metaverso.',
    icone: <Briefcase className="w-5 h-5 text-white" />,
  },
  {
    ano: '2024',
    mes: 'Agosto',
    titulo: 'Projeto Loogot8 - Sistema Logosófico de Educação',
    descricao: 'Desenvolvi um projeto interativo voltado ao Sistema Logosófico de Educação, com foco na pedagogia centrada no desenvolvimento integral do ser humano.',
    icone: <Briefcase className="w-5 h-5 text-white" />,
  },  
  {
    ano: '2024',
    titulo: 'Projetos em destaque',
    descricao: 'Participei de projetos como Astro, CallMeDesk, Loogot8, entre outros, desenvolvendo soluções criativas e tecnológicas.',
    icone: <Briefcase className="w-5 h-5 text-white" />,
  },
  {
    ano: '2025',
    mes: 'Fevereiro',
    titulo: 'Estágio no MPCE',
    descricao: 'Iniciei estágio no Ministério Público do Estado do Ceará, atuando na área do Direito.',
    icone: <Briefcase className="w-5 h-5 text-white" />,
  },
  {
    ano: '2025',
    titulo: 'ONG Americana - Cidadania e Tecnologia',
    descricao: 'Selecionada para trabalhar como desenvolvedora Full Stack em uma ONG internacional com foco em direitos de cidadania e inovação tecnológica.',
    icone: <Briefcase className="w-5 h-5 text-white" />,
  },
  {
    ano: '2025',
    mes: 'Maio',
    titulo: 'Programa Desenvolve - Grupo O Boticário',
    descricao: 'Selecionada para o Programa Desenvolve, iniciativa do Grupo Boticário focada na formação de talentos em tecnologia e inclusão no mercado de trabalho.',
    icone: <Briefcase className="w-5 h-5 text-white" />,
  },
]



export default function Timeline() {
  const [mostrar, setMostrar] = useState(false)

  useEffect(() => {
    setMostrar(true)
  }, [])

  return (
    <section className="py-16 px-6 bg-gray-50" id="trajetoria">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-[#8C0343] mb-2">Minha Trajetória</h2>
        <p className="text-gray-600 mb-12">
          Um pouco do meu caminho até aqui, com momentos que moldaram quem sou como profissional e pessoa.
        </p>

        <div className="relative border-l-4 border-[#8C0343] pl-6 space-y-12">
          {mostrar &&
            eventos.map((evento, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="absolute -left-[34px] top-1.5 w-8 h-8 bg-[#8C0343] rounded-full flex items-center justify-center shadow-lg">
                  {evento.icone}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{evento.titulo}</h3>
                <span className="text-sm text-gray-500">{evento.ano}</span>
                <p className="text-gray-700 mt-1">{evento.descricao}</p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  )
}
