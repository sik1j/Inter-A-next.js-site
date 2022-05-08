module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B71FE",
        secondary: "#29B37E",
        "text-grey": "#6E6E80",
        "text-gray": "#6E6E80",
        "text-dark": "#0E0E2C",
        "bg-dark": "#262A31",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        logo: "1.375rem",
        nav: "0.875rem",
      },
    },
  },
  plugins: [],
};
