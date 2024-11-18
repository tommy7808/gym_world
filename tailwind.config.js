/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          black: {
            '100': '#333131',
            '200': '#242323',
            '300': '#131212',
          },
          grey: {
            '100': '#E4E4E4',
            '200': '#D4D4D4',
            '300': '#ABABAB',
          },
        },
        primary: {
          '100': '#F3535E',
          '200': '#F2404C',
          '300': '#F02D3A',
          '400': '#EF1A28',
          '500': '#E5101E',
          '600': '#D20F1C',
          '700': '#BF0D19',
          '800': '#AC0C17',
          '900': '#990B14',
        }
      },
      fontSize: {
        'desktop-h1': '4rem',
        'desktop-h2': '3rem',
        'desktop-h3': '2.5rem',
        'desktop-h4': '1.75rem',
        'desktop-p1': '1.5rem',
        'desktop-p2': '1.25rem',
        'desktop-p3': '1rem',
        'tablet-h1': '2.375rem',
        'tablet-h2': '2.125rem',
        'tablet-h3': '1.875rem',
        'tablet-h4': '1.625rem',
        'tablet-p1': '1.25rem',
        'tablet-p2': '1rem',
        'tablet-p3': '0.875rem',
        'mobile-h1': '2rem',
        'mobile-h2': '1.5rem',
        'mobile-h3': '1.25rem',
        'mobile-h4': '1.125rem',
        'mobile-p1': '1rem',
        'mobile-p2': '0.875rem',
        'mobile-p3': '0.75rem',
      },
    }
  },
  plugins: [],
}