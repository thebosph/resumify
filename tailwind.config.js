/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        niteBlue: "#00212E",
        niteBlueLight: "#001e29",
        niteBlueDark: "#001117",
      },
      backgroundColor: {
        niteBlue: "#00212E",
        niteBlueLight: "#001e29",
        niteBlueDark: "#001117",
      },
    },
  },
  plugins: [],
};
