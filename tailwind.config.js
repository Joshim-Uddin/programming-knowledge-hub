/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
              "primary": "#ff8284",
                      
              "secondary": "#20f92b",
                      
              "accent": "#eeb5f2",
                      
              "neutral": "#293038",
                      
              "base-100": "#F8F6F8",
                      
              "info": "#1CB2E9",
                      
              "success": "#17A149",
                      
              "warning": "#A55709",
                      
              "error": "#FA0A0A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

