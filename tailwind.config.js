module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3B71FE",
        secondary: "#AD45F7",
        "text-grey": "#6E6E80",
        "text-gray": "#6E6E80",
        "text-dark": "#0E0E2C",
        "bg-grey": "#F6F6F7",
        "bg-dark": "#262A31",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "logo-nav": "1.5rem",
        "lg-logo-nav": "2rem",
        "lg-sect-text": "1.375rem",
        "logo-ftr": "2rem",
        ftr: "0.875rem",
        link: "0.875rem",
        "lg-link": "1rem",
        "sect2-heading": "1.375rem",
        "lg-sect2-heading": "2.125rem",
        "lg-hero-heading": "3rem",
        md: "1.125rem",
        lg: "2.5rem",
      },
      gap: {
        sect: "7.5rem",
        "lg-sect": "10rem",
      },
    },
  },
  plugins: [],
};
