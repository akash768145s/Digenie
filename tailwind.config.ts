import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      // backgroundImage:{
        
      // },
      screens:{
        sm:'480px' ,  
        md:"640px",
        lg:"768px" ,
        xl:"1024px" ,
        xxl:"1280px" 
      },
      colors: {
        primary: "hsl(240, 6%, 10%)",
        secondary: "hsl(240, 100%, 27%)",
        tertiary: "hsl(220, 5%, 49%)",
        subColor: "#FFCC00",
        containerBackground: "hsl(210, 60%, 98%)",
        inputBorder: "var(--input-br)",
        inputColor: "#455A64",
        inputDisabled: "#ECEFEC",
        labelColor: "#78909C",
        labelFocusColor: "#607D8B",
        textSubColor: "var(--text-sub-color)",
      },
      height: {
        screen: "100dvh",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'cta': "url('https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg')"
      },
    },
  },
  plugins: [],
};
export default config;
