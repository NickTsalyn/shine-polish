import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1440px",
        xl: "1920px",
      },
      container: {
        screens: {
          sm: "335px",
          md: "712px",
          lg: "1156px",
          xl: "1516",
        },
      },
      colors: {
        main: "#006778",
        secondary: "#E6BA95",
        tertial: "#00BFDE",
        accent: "#780032",
        "accent-light": "#DE005D",
        text: "#262D33",
        white: "#fff",
        subtext: "#737373",
        blue: "#5FE4F9E5",
        "secondary-placeholder": "#522600",
        "error-input-bgn": "#FFF2F2",
        light: "rgba(255, 247, 239, 0.68)",
        sand: "rgba(230, 186, 149, 0.68)",
        
      },

      boxShadow: {
        "main-shadow": "0px 5px 15px 0px rgba(0, 0, 0, 0.35)",
        "text-shadow":
          "108px 75px 37px rgba(0, 0, 0, 0.00), 69px 48px 34px rgba(0, 0, 0, 0.01), 39px 27px 28px rgba(0, 0, 0, 0.05), 17px 12px 21px rgba(0, 0, 0, 0.09), 4px 3px 12px rgba(0, 0, 0, 0.10)",
        "review-shadow":
          "42px 122px 36px 0px rgba(182, 169, 124, 0.00), 27px 78px 33px 0px rgba(182, 169, 124, 0.01), 15px 44px 28px 0px rgba(182, 169, 124, 0.05), 7px 19px 21px 0px rgba(182, 169, 124, 0.09), 2px 5px 11px 0px rgba(182, 169, 124, 0.10)",
      },
      backgroundImage: {
        "main-gradient": "linear-gradient(180deg, #006778 0%, #00BFDE 100%)",

        "auth-button-bgn":
          "linear-gradient(21deg, #00BFDE 13.35%, #006778 86.65%)",

        "main-fb-bgn": "linear-gradient(164deg, #006778 4.74%, #00BFDE 88.81%)",

        "main-wa-bgn":
          "linear-gradient(9deg, #00BFDE 5.7%, #008298 71.75%, #006778 83.33%)",

        "main-google-bgn":
          "linear-gradient(69deg, #00BFDE 8.52%, #006778 91.48%)",

        "not-active-step":
          "linear-gradient(180deg, rgba(0, 103, 120, 0.20) 0%, rgba(0, 191, 222, 0.20) 100%)",

        "plus-minus-gradient":
          "linear-gradient(180deg, #006778 50%, #00BFDE 50%)",
        // "error-border-gradient":
        //   " linear-gradient(to right, #DE005D, #780032)",

        // "main-border-gradient":
        //   "linear-gradient(90deg, #00BFDE 100%, #006778 100%)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: Function }) {
      const newUtilities = {
        ".main-border": {
          "border-image": "linear-gradient(to right, #00BFDE , #006778 )",
          "border-image-slice": "1",
          "border-radius": "12px",
        },

        ".border-error": {
          "border-image": "linear-gradient(to right, #DE005D , #780032)",
          "border-image-slice": "1",
          "border-radius": "12px",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
export default config;
