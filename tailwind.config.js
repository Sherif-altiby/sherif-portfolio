/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btnColor: "#3986fa",
        light: "#f6f6f6",
        dark: "rgb(119, 119, 121)",
        pColor: "rgba(0, 0, 0, 0.816)",
        skillBg: "rgb(245, 245, 245)",
        textDark: "#151418",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      
    },
  },
  plugins: [],
}; 
