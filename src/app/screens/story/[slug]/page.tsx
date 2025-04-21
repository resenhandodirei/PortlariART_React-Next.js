// pages/story/[slug].tsx
import { useRouter } from 'next/router'
import { stories } from '../../../../data/stories' // simulação de dados

export default function StoryView() {
  const router = useRouter()
  const { slug } = router.query

  const story = stories.find(s => s.slug === slug)

  if (!story) {
    return <div className="p-4 text-center text-gray-500">História não encontrada.</div>
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{story.title}</h1>
      <p className="text-sm text-gray-500 mb-6">Publicado em {story.date}</p>
      <div className="space-y-4 text-lg leading-relaxed text-gray-700">
        {story.content.map((paragraph, index) => (
          <p key={index} className="indent-6">{paragraph}</p>
        ))}
      </div>
    </div>
  )
}
