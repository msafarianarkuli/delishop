/** @type {import("tailwindcss").Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IranSans: [
          "IRANSans",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      height: {
        headerNormal: "56px",
      },
      colors: {
        primary: "#FF5C01",
        error: "#ff4d4f",
      },
    },
  },
  plugins: [],
};
