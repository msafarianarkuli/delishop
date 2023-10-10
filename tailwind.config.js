/** @type {import("tailwindcss").Config} */
module.exports = {
  important: true,
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "360px",
        sm: "576px",
        md: "768px",
        lg: "900px",
        xl: "1200px",
      },
      fontFamily: {
        IranSans: [
          "var(--font-iransans)",
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
      boxShadow: {
        inner: "-4px -4px 5px #ffffff inset, 2px 2px 8px rgba(36, 65, 93, 0.25) inset",
      },
      colors: {
        primary: "#FF5500",
        primarySupermarket: "#FF5500",
        error: "#ff4d4f",
        textColor: "#2C3036",
        textColorLight: "#8D8D8D",
        iconColor: "#575F6B",
        borderColor: "#B0B8C4",
      },
      spacing: {
        screenSpace: "19px",
        headerNormal: "56px",
        bottomNavigation: "63px",
      },
      transitionProperty: {
        height: "height",
        width: "width",
      },
    },
  },
  plugins: [],
};
