module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  ignorePatterns: ['next.config.js', '.eslintrc.js'],
  plugins: ['@typescript-eslint', 'simple-import-sort', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    // 'next/core-web-vitals',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    // 'simple-import-sort/imports': [
    //   'error',
    //   {
    //     groups: [
    //       // Packages `react` related packages come first.
    //       ['^react', '^@?\\w'],
    //       // Internal packages.
    //       ['^(@|components)(/.*|$)'],
    //       // Side effect imports.
    //       ['^\\u0000'],
    //       // Parent imports. Put `..` last.
    //       ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
    //       // Other relative imports. Put same-folder imports and `.` last.
    //       ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
    //       // Style imports.
    //       ['^.+\\.?(css)$'],
    //     ],
    //   },
    // ],
  },
};
