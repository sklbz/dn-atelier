module.exports = {
  syntax: 'postcss-scss',
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    stylelint: {},
    "postcss-nested-vars": {},
    cssnano: {},
    "postcss-preset-env": {
      stage: 1,
      features: {}
    },
  },
};
