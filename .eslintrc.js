module.exports = {
  root: true,
  env: {
    es2021: true,
  },
  extends: [
    '@react-native',
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {extensions: ['.ts', '.tsx', '.js', '.jsx']},
    ],
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
  },
};
