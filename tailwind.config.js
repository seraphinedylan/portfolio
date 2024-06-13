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
      aspectRatio: {
        "1155/678": "1155/678",
      },
      zIndex: {
        99: "99",
        max: "9999",
      },
      minHeight: { ...spacings, "1/2": "50vh" },
      maxHeight: spacings,
      minWidth: spacings,
      maxWidth: spacings,
      width: {
        730: "45.625rem",
        25: "25rem",
      },
      spacing: spacings,
      borderWidth: {
        16: "16px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        background: "#07001B",
        foreground: "#a6dbf7",
        muted: {
          DEFAULT: "#22272a",
          foreground: "#9ba7b0",
        },
        popover: {
          DEFAULT: "#010e19",
          foreground: "#d5eefb",
        },
        card: {
          DEFAULT: "#01111e",
          foreground: "#bee3f8",
        },
        border: "#05233e",
        input: "#062c4b",
        primary: {
          DEFAULT: "#97d0f7",
          foreground: "#063455",
        },
        secondary: {
          DEFAULT: "#2d4253",
          foreground: "#cddbe4",
        },
        accent: {
          DEFAULT: "#034472",
          foreground: "#034072",
          light: "#1c0056",
          regular: "#7611a6",
          dark: "#c561f6",
          overlay: "hsla(280, 89%, 67%, 0.33)",
          "subtle-overlay": "hsla(281, 81%, 36%, 0.33)",
          "text-over": "#ffffff",
        },
        destructive: {
          DEFAULT: "#f65137",
          foreground: "#FFFFFF",
        },
        ring: "#97cff7",
        gray: {
          0: "#ffffff",
          50: "#f3f4f7",
          100: "#e3e6ee",
          200: "#c3cadb",
          300: "#a3acc8",
          400: "#8490b5",
          500: "#6474a2",
          600: "#505d84",
          700: "#3d4663",
          800: "#283044",
          900: "#141925",
          999: "#090b11",
        },
        "link-color": "#c561f6",
        "gradient-stop-1": "#4c11c6",
      },
      backgroundImage: {
        "blue-gradient": "linear-gradient(to right, #034072, #97cff7)",
        "radial-gradient": "radial-gradient(#141925, #283044 150%)",
        "gradient-subtle": "linear-gradient(150deg, #141925 19%, #090b11 81%)",
        "gradient-accent-orange":
          "linear-gradient(150deg, #ca7879, #7611a6, #1c0056)",
        "gradient-stroke": "linear-gradient(180deg, #505d84, #283044)",
      },
      boxShadow: {
        sm: "0px 6px 3px rgba(255, 255, 255, 0.01), 0px 4px 2px rgba(255, 255, 255, 0.01), 0px 2px 2px rgba(255, 255, 255, 0.02), 0px 0px 1px rgba(255, 255, 255, 0.03)",
        md: "0px 28px 11px rgba(255, 255, 255, 0.01), 0px 16px 10px rgba(255, 255, 255, 0.03), 0px 7px 7px rgba(255, 255, 255, 0.05), 0px 2px 4px rgba(255, 255, 255, 0.06)",
        lg: "0px 62px 25px rgba(255, 255, 255, 0.01), 0px 35px 21px rgba(255, 255, 255, 0.05), 0px 16px 16px rgba(255, 255, 255, 0.1), 0px 4px 9px rgba(255, 255, 255, 0.12)",
      },
      fontFamily: {
        system: ["Roboto", "Oxygen Mono", "Ubuntu", "Cantarell", "Open Sans"],
        body: ["Public Sans", "var(--font-system)"],
        brand: ["Rubik", "var(--font-system)"],
      },
      transitionProperty: {
        "border-color": "border-color",
      },
      dropShadow: {
        DEFAULT: "0px 2px 9px rgba(0, 0, 0, 0.2)",
      },
      transitionDuration: {
        theme: "0.2s",
      },
      transitionTimingFunction: {
        theme: "ease-in-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class", // only generate classes
    }),
    require("@tailwindcss/aspect-ratio"),
  ],
};
