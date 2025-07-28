/** @type {import('tailwindcss').Config} */
export const content = [
   './index.html',
   './src/**/*.{js,jsx,ts,tsx}',
];
export const theme = {
   extend: {
      colors: {
         primary: '#004AAD',
         accent: '#F4B400',
         background: '#F9FAFB',
         surface: '#FFFFFF',
         textMain: '#1F2937',
      },
      fontFamily: {
         poppins: ['Poppins', 'sans-serif'],
         roboto: ['Roboto', 'sans-serif'],
      },
      borderRadius: {
         lg: '8px',
         xl: '12px',
      },
      boxShadow: {
         soft: '0 2px 8px rgba(0,0,0,0.06)',
      },
   },
};
export const plugins = [];
