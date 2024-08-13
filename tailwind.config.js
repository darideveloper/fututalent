/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      "purple": "#671797",
      "white": "#eae4ee",
      "purple-light": "#e4c4f7",
      "purple-dark": "#2c052c",
      "transparent": "transparent",
    },
    // fontSize: {
    //   sm: '1.6rem',
    //   base: '2rem',
    //   xl: '2.5rem',
    //   '2xl': '3.126rem',
    //   '3xl': '3.906rem',
    //   '4xl': '4.88rem',
    //   '5xl': '6.104rem',
    // }
  },
  plugins: [],
};
