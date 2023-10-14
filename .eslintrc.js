module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:jest-dom/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:react/jsx-runtime',
    'plugin:i18next/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'import',
    'react',
    'react-hooks',
    '@typescript-eslint',
    'promise',
    'prettier',
    'i18next',
  ],
  rules: {
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'i18next/no-literal-string': 1,
    'keyword-spacing': ['error', {after: true, before: true}],
    'arrow-body-style': ['error', 'as-needed'],
    'jest-dom/prefer-checked': 'error',
    'jest-dom/prefer-enabled-disabled': 'error',
    'jest-dom/prefer-required': 'error',
    'jest-dom/prefer-to-have-attribute': 'error',
    'node/no-extraneous-import': 'off',
    'node/no-missing-import': 'off',
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-key': 1,
    'react/no-unknown-property': 1,
    'react/self-closing-comp': 2,
    'react/jsx-curly-brace-presence': [
      'error',
      {props: 'never', children: 'never', propElementValues: 'always'},
    ],
    'require-jsdoc': 'off',
    camelcase: 'off',
    'no-case-declarations': 'off',
    '@typescript-eslint/ban-ts-comment': 2,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'padding-line-between-statements': 'off',
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['interface', 'type'],
        next: '*',
      },
    ],
    'import/no-extraneous-dependencies': 2,
    'import/no-named-as-default-member': 2,
    'import/order': 0,
    'import/no-duplicates': 0,
    'import/no-useless-path-segments': 2,
    'import/no-cycle': 2,
    'import/prefer-default-export': 0,
    'import/no-anonymous-default-export': 0,
    'import/named': 0,
    'import/newline-after-import': ['error', {count: 1}],
    'newline-after-var': ['error', 'always'],
    'newline-before-return': 'error',
    'max-len': ['warn', 120],
    'react-hooks/rules-of-hooks': 2,
    'no-nested-ternary': 1,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
        arrowParens: 'avoid',
      },
    ],
  },
};