// tailwind.config.js

module.exports = {
  content: [
    './app/**/*.{tsx, ts, jsx, js}',
    '../../packages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik-regular': ['Rubik_400Regular'],
        'rubik-medium': ['Rubik_500Medium'],
        'rubik-bold': ['Rubik_700Bold'],
      },
    },
  },
  plugins: [],
};
