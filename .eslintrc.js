module.exports = {
    env: {
      browser: true,
      es6: true,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
    ],
    parser: 'babel-eslint',
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
    ],
    rules: {
      'react/jsx-filename-extension': 0,
      'indent': ['error', 2],
      'global-require': 1,
      'react/require-default-props': 0,
      'react/prefer-stateless-function': 0,
      'class-methods-use-this': 0,
      'react/prop-types': 0,
      'react/no-unused-state': 0,
      'no-undef': 0,
      'jsx-a11y/no-noninteractive-element-interactions': 0,
    },
  };