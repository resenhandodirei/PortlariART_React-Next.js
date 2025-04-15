'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { X } from 'lucide-react'

interface ModalDetalhesProjetoProps {
  isOpen: boolean
  onClose: () => void
  projeto: {
    title: string
    description: string
    techs: string[]
    image?: string
    repo?: string
    link?: string
  } | null
}

export default function ModalDetalhesProjeto({
  isOpen,
  onClose,
  projeto,
}: ModalDetalhesProjetoProps) {
  if (!projeto) return null

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-90"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-90"
            >
              <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex justify-between items-start mb-4">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {projeto.title}
                  </Dialog.Title>
                  <button onClick={onClose}>
                    <X className="text-gray-600 hover:text-gray-800" />
                  </button>
                </div>

                {projeto.image && (
                  <img
                    src={projeto.image}
                    alt={projeto.title}
                    className="w-full rounded-lg mb-4"
                  />
                )}

                <p className="text-sm text-gray-600 mb-4">{projeto.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {projeto.techs.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#8C0343]/10 text-[#8C0343] px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {projeto.repo && (
                    <a
                      href={projeto.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-white bg-[#8C0343] px-4 py-2 rounded-md hover:bg-[#8C0343]/90 transition"
                    >
                      Ver repositório
                    </a>
                  )}
                  {projeto.link && (
                    <a
                      href={projeto.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#8C0343] border border-[#8C0343] px-4 py-2 rounded-md hover:bg-[#8C0343]/10 transition"
                    >
                      Ver projeto
                    </a>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
