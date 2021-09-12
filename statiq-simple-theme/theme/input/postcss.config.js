module.exports = {
  plugins: [
      require('postcss-import'),
      require('tailwindcss')('./theme/input/tailwind.config.js'),
      require('postcss-nested'),
      require('autoprefixer'),
  ]
}
