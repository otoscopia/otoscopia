module.exports = {
  env: {
    es2021: true,
    'jest/globals': true,
  },
  extends: ['@react-native', 'airbnb', 'airbnb-typescript', 'prettier'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': ['error', {endOfLine: 'auto'}],
  },
};
