/** @type {import('tailwindcss').Config} */
/*
https://themesbrand.com/velzon/html/default/
*/

const spacings = {
  "60px": "60px",
  "65px": "65px",
  "90px": "90px",
  "200px": "200px",
  "260px": "260px",
  "300px": "300px",
  "400px": "400px",
  "460px": "460px",
};

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      zIndex: {
        99: "99",
        max: "9999",
      },
      minHeight: spacings,
      maxHeight: spacings,
      minWidth: spacings,
      maxWidth: spacings,
      spacing: spacings,
      borderWidth: {
        16: "16px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        primaryPro: {
          100: "#0F3791",
          200: "#092157",
        },
        primary: {
          100: "#e2e5ed",
          200: "#a0a8c4",
          300: "#919da9",
          500: "#405189",
          600: "#3a497b",
          700: "#364574",
          800: "#33416e",
          900: "#303d67",
        },
        secondary: {
          100: "#e1ebfd",
          200: "#c2d6fb",
          500: "#3577f1",
          600: "#2d65cd",
          700: "#2a5fc1",
          800: "#2859b5",
        },
        success: {
          100: "#daf4f0",
          200: "#b6e8e1",
          500: "#0ab39c",
          600: "#099885",
          700: "#088f7d",
          800: "#088675",
        },
        warning: {
          100: "#fef4e4",
          200: "#fdeac9",
          500: "#f7b84b",
          600: "#d29c40",
          700: "#c6933c",
          800: "#b98a38",
        },
        danger: {
          100: "#fde8e4",
          200: "#fbd1c8",
          500: "#f06548",
          600: "#cc563d",
          700: "#c0513a",
          800: "#b44c36",
        },
        info: {
          100: "#dff0fa",
          200: "#bfe1f4",
          500: "#299cdb",
          600: "#2385ba",
          700: "#217daf",
          800: "#1f75a4",
        },
        gray: {
          100: "#f3f6f9",
          200: "#eff2f7",
          300: "#e9ebec",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#878a99",
          700: "#495057",
          800: "#343a40",
          900: "#212529",
        },

        blue: {
          300: "#299cdb",
          400: "#2385ba",
          500: "#3577f1",
          600: "#2d65cd",
          700: "#405189",
          800: "#364574",
        },
        yellow: {
          500: "#f7b84b",
          600: "#d29c40",
        },
      },
      transitionProperty: {
        "border-color": "border-color",
      },
      dropShadow: {
        DEFAULT: "0px 2px 9px rgba(0, 0, 0, 0.2)",
      },
      boxShadow: {
        DEFAULT: "0px 2px 9px rgba(0, 0, 0, 0.2)",
        lg: "0px 4px 8px rgba(0, 0, 0, 0.5);",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
  ],
};
