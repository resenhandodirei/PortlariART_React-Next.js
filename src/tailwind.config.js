// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx,mdx}", // ou conforme seu path
    ],
    theme: {
      extend: {
        keyframes: {
          gradientBG: {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        },
        animation: {
          gradientBG: 'gradientBG 15s ease infinite',
        },
        backgroundImage: {
          'skills-gradient': 'linear-gradient(270deg, #033867, #2D3766, #8C0343, #F2AED4)',
        },
      },
    },
    plugins: [],
  }
  