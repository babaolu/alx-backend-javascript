import globals from "globals";
const jest = require('eslint-plugin-jest');
const airbnbBase = require('eslint-config-airbnb-base');

module.exports = [
  {
    ignores: ['babel.config.js'],
  },
  {
    files: ['*.js'],
    languageOptions: {
      globals: {
        ...globals.es6,
        ...globals.jest,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
    },
    plugins: {
      jest: jest,
    },
    rules: {
      ...airbnbBase.rules,
      ...jest.configs['flat/all'].rules,
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
  }
];
