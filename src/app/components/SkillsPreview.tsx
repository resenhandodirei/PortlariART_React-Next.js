export default function SkillsPreview() {
    return (
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-[#8C0343] mb-8">Tecnologias que uso</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {['React', 'TypeScript', 'SwiftUI', 'Python', 'PostgreSQL', 'Tailwind CSS'].map((skill, index) => (
            <span
              key={index}
              className="bg-[#8C0343] text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    )
  }