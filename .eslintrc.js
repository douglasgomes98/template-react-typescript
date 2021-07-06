module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
  rules: {
    'react/prop-types': 'off',
    'prettier/prettier': 'off',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.tsx', '.ts', '.js', '.jsx'] },
    ],
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.spec.jsx', '**/*.spec.tsx', '**/setupTests.ts'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
