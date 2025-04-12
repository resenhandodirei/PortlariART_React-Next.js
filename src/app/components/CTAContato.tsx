'use client'

import Link from 'next/link'
import { MessageCircleHeart } from 'lucide-react'

export default function CTAContato() {
  return (
    <section className="bg-[#fdf6f9] dark:bg-[#1a0e13] py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <MessageCircleHeart className="mx-auto text-[#8C0343] w-10 h-10 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
          Quer bater um papo ou fazer um projeto juntas(os)? Me chama!
        </h2>
        <Link
          href="#contato"
          className="inline-block mt-6 px-6 py-3 bg-[#8C0343] text-white rounded-full hover:bg-[#a30454] transition-colors shadow-md"
        >
          Ir para o contato
        </Link>
      </div>
    </section>
  )
}
