module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {},
    "postcss-preset-env": {
      stage: 1,
      features: {}
    },
  },
};
