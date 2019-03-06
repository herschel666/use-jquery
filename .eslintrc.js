module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      version: '16.8',
    },
  },
  env: {
    node: true,
    es6: true,
    browser: true,
    jest: true,
  },
};
