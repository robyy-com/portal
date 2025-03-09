import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    maxWidth: {
      container: "1440px",
      contentContainer: "1140px",
      containerSmall: "1024px",
      containerXs: "768px",
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1200px",
          "2xl": "1536px",
        },
      },

      colors: {
        bgColor: "var(--bg-color)",
        primaryColor: "var(--primary-color)",
        primaryColorHover: "var(--primary-color-hover)",
        secondaryColor: "var(--secondary-color)",
        secondaryColorHover: "var(--secondary-color-hover)",
        textColor: "var(--text-color)",
        bgMenuColor: "var(--bg-menu-color)",
        bgTopColor: "var(--bg-top-color)",
        bgCardColor: "var(--bg-card-color)",
        borderColor: "var(--border-color)",
        tabBorderColor: "var(--tab-border-color)",
        sectionBgColor: "var(--section-bg-color)",
        secondarytext: "var(--secondarytext-color)",
        thirdtextColor: "var(--thirdtext-color)",
        fothtextColor: "var(--forthtext-color)",
        fivthtextColor: "var(--fivthtext-color)",
        white: "var(--white-color)",
        overlayColor: "var(--overlay-color)",
        sixthtextColor: "var( --sixthtext-color)",
      },
      fontFamily: {
        titleFont: ["inter", "inter"],
        bodyFont: ["inter", "inter"],
      },
      fontSize: {
        regular: "18px",
      },
      boxShadow: {
        navbarShadow: "-4px -4px 4px 4px #FFFFFF40",
        cardShadow: "4px 4px 4px 4px #000000",
        buttonShadow: "-4px -4px 4px 0px #FFFFFF40",
      },
    },
  },
  plugins: [],
};
export default config;
