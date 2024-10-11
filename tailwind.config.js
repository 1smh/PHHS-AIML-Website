module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'primary': {
            50: '#e6f0ff',
            100: '#b3d1ff',
            200: '#80b3ff',
            300: '#4d94ff',
            400: '#1a75ff',
            500: '#0056e6',
            600: '#0044b3',
            700: '#003380',
            800: '#00224d',
            900: '#00111a',
          },
        },
        fontFamily: {
          'sans': ['Poppins', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }