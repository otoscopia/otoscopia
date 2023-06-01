module.exports = {
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'airbnb',
    'plugin:react-native/all',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-native'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {extensions: ['.ts', '.tsx', '.js', '.jsx']},
    ],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
  },
};
