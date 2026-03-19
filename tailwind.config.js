const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        thunder: ['Thunder', 'sans-serif'],
        thunderlight: ['ThunderLight', 'sans-serif'],
        thundermedium: ['ThunderMedium', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;