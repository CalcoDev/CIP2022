module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "half-screen": "50vh",
      },
      minHeight: {
        "card-height": "35rem",
      },
      colors: {
        "blueish-purplish": "#4c0ffb",
      },
      flex: {
        fourth: "1 0 21%",
      },
      dropShadow: {
        "2xl-all": "0 0px 40px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
