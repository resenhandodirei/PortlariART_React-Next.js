'use client'

import Link from 'next/link'
import { MessageCircleHeart } from 'lucide-react'

export default function CTAContato() {
  return (
    <section className="bg-gradient-to-b from-[#F2AED4] to-[#FCE3EE] py-16 px-8 rounded-2xl shadow-lg">
      <div className="max-w-md mx-auto text-center">
        <MessageCircleHeart className="mx-auto text-[#033867] w-12 h-12 mb-4" />
        <h2 className="text-2xl font-bold text-[#2D3766] mb-4">
          Vamos conversar ou criar algo incrível juntos?
        </h2>
        <p className="text-sm text-[#2D3766] mb-6">
          Seja um projeto pessoal, acadêmico ou profissional — estou à disposição!
        </p>
        <Link
          href="#contato"
          className="inline-block px-8 py-3 bg-gradient-to-r from-[#8C0343] to-[#A30454] text-white rounded-full font-medium hover:from-[#A30454] hover:to-[#8C0343] transition-all duration-300 shadow-lg"
        >
          Falar comigo
        </Link>
      </div>
    </section>
  )
}
