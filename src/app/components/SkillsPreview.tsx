'use client';

export default function SkillsPreview() {
  const skills = [
    'React', 
    'TypeScript', 
    'SwiftUI', 
    'Python', 
    'PostgreSQL', 
    'Tailwind CSS'
  ];

  return (
    <section
      className="py-16 px-6 text-white"
      style={{
        background: 'linear-gradient(135deg, #033867, #2D3766, #8C0343, #F2AED4)',
        backgroundSize: '400% 400%',
        animation: 'gradientBG 10s ease infinite',
        
      }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white drop-shadow-md">
          Tecnologias que uso
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-5 py-2 bg-white/10 border border-white/30 backdrop-blur-md rounded-full text-sm font-medium text-white hover:bg-white/20 transition duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* animação do gradiente */}
      <style jsx>{`
        @keyframes gradientBG {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
}
