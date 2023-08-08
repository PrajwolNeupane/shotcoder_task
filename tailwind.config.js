/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'background': "#EBE6E6",
        'brand-700': "#0300b5",
        'brand-600': "#0d09e8",
        'brand-500': "#201CFC",
        'brand-400': "#5193fc",
        'brand-300': "#68a1fc",
        'brand-200': "#e3ecfa",
        'text-500': '#1A202C',
        'text-400': "#232a38",
        "text-300": "#293140",
        "text-200": "#374052",
        'light-500': '#FAF7F7',
        'light-400': '#FFFFFF',
        'yellow-500':"#D69E2E"
      },
      fontFamily: {
        body: "'Poppins',sans-serif",
        mono: ['monospace']

      },
      fontSize: {
        "4xl": "50px",
        "3xl": "45px",
        "2xl": "40px",
        "xl": "35px",
        "lg": "30px",
        "md": "25px",
        "rg": "22px",
        "sm": "20px",
        "xs": "18px",
        "2xs": "16px",
        "3xs": "14px"
      },
      fontWeight: {
        'eb': 800,
        'b': 700,
        'sb': 600,
        'mb': 500,
        'r': 400,
        'l': 300
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  },
  plugins: [],
}