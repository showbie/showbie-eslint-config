module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: { experimentalObjectRestSpread: true },
  },
  env: {
    browser: true,
  },
  extends: ['eslint:recommended', './code-style.js'],
  rules: {},
};
