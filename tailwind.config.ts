import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'body-color': '#d5d4d4',
        'main-background-color': '#ffffff',
        'main-background-color1': '#ffffffa',
        'main-background-color3': '#ffffffcc',
        'main-background-color4': '#efefef',
        'main-background-color5': '#f9f9f9',
        'second-background-color': '#9D9EA1',
        'second-background-color1': '#222222',
        'second-background-color2': '#ffffff',
        'second-background-color3': '#7f7f7f',
        'second-background-color4': '#d5d4d4',
        'main-color': '#6453ee',
        'main-color1': '#645390',
        'main-color2': '#6453ee33',
        'main-color3': '#6463ff',
        'contrust-color': '#00000099',
        'contrust-color1': '#00000080',
        'contrust-color2': '#00000026',
        'contrust-color3': '#000000cc',
        'contrust-color4': '#000000',
        'custom-red': '#EF4444',
        'dark-yellow-transperant': '#78787821',
        'dark-blue': '#0d0e14',
        'dark-navy': '#10161f',
        'purple-med': '#6453EE',
        'secondary-blue': '#88c5ff',
        absolutewhite: 'var(--absolutewhite)',
        linear: 'var(--linear)',
        secondary: 'var(--secondary)',
        white: 'var(--white)'
      },
      spacing: {
        '3-spacing-lg': '1.5rem' // Example spacing variable
      },
      fontFamily: {
        // Integrate Google Fonts with CSS variables
        sora: ['Sora', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
        'pp-neue-montreal': [
          'var(--font-pp-neue-montreal-bold)',
          'Helvetica',
          'Arial',
          'sans-serif'
        ]
      },
      fontSize: {
        base: '16px',
        lg: '18px',
        xl: '20px'
      },
      // You can customize line heights or other extensions here
      lineHeight: {
        normal: '1.5',
        relaxed: '1.75'
      },
      // Additional layer for all-[unset] utility if needed
      corePlugins: {
        preflight: true // Enable Tailwind's base styles (preflight)
      },
      variants: {
        extend: {
          // You can add hover, focus, active states, etc.
        }
      },

      backgroundImage: {
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, #194A2F, #006400, #000000)',
        'radial-opacity':
          'radial-gradient(circle, rgba(41,60,74,1) 0%, rgba(41,60,74,0) 70%)',
        'radial-opacity-corner':
          'radial-gradient(circle, black 0%, black 30%, black 70%, rgba(41,60,74,0.5) 100%)',
        'radial-opacity-green':
          'radial-gradient(circle, rgba(23,39,40,1) 0%, rgba(41,60,74,0) 75%)',
        'diagonal-opacity':
          'radial-gradient(circle at top left, rgba(41,60,74,0) 10%, rgba(23,39,40,1) 50%, rgba(41,60,74,0) 90%)'
      },
      keyframes: {
        moveLine: {
          '0%': { left: '0%' },
          '100%': { left: '100%' }
        }
      },
      animation: {
        moveLine: 'moveLine 3s infinite'
      }
    }
  },
  plugins: []
};

export default config;
