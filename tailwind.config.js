/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tab: { max: "1200px" },
        mob: { max: "640px" },
      },
      fontFamily: {
        poppins: ["Poppins", ...defaultTheme.fontFamily.sans],
        impact: ["Coffee Butter", ...defaultTheme.fontFamily.sans],
        impacted: ["Impacted", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#165226",
        c1: "#0cc754",
        c2: "#143619",
        c3: "#123416",
      },
    },
  },
  plugins: [],
};
