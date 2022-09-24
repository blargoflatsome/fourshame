/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter']
      },
      colors: {
        black: "#1a1110",
        white: "#fffafa",
        gray: {
          darkest: "#2a2a2a",
          darker: "#4d4d4d",
          dark: "#6c6c6c",
          base: "#c0c0c0",
          light: "#d5d5d5",
          lighter: "#f3f3f3",
          lightest: "#fafafa"
        },
        action: {
          light: "#7395ae",
          dark: "#557a95"
        },
        accent: {
          darkest: "#370617", // "#370617"
          dark: "#6A040F", // "#6A040F"
          base: "#660000", // "#6A040F"
          light: "#ff0800", // "#D00000"
          lighter: "#9D0208", //  "#9D0208"
          fade: "#d48e8f40" // "#d48e8f40"
        }
      },
      screens: {
        xs: '480px' // Added xs
        // 'sm': '640px',
        // 'md': '768px',
        // 'lg': '1024px',
        // 'xl': '1280px',
      }
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'plugins/**/*.js', 'nuxt.config.js'],
    options: {
      // Set safelist in nuxt.config.js -> purgeCSS.safelist: ['btn', 'icon']
    }
  }
}
