module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['prettier', 'react', 'filenames'],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'react/prop-types': 0,
    'no-console': [
      2,
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-shadow': 1,
  },
  overrides: [
    {
      files: [
        '{lib,pages}/*.spec.{ts,tsx,js}',
        '{lib,pages}/__tests__/**/*.{ts,tsx,js}',
      ],
      env: {
        'jest/globals': true,
      },
      extends: ['plugin:jest/recommended'],
    },
    {
      files: ['**/*.{ts,tsx,js}'],
      plugins: ['filenames'],
      rules: {
        'filenames/match-exported': 2,
      },
      excludedFiles: ['pages/**/*'],
    },
    {
      files: ['**/*.{ts,tsx,js}'],
      plugins: ['jsdoc'],
      rules: {
        'jsdoc/require-jsdoc': [
          2,
          {
            publicOnly: true,
            require: {
              ClassDeclaration: true,
              MethodDefinition: true,
              FunctionDeclaration: true,
            },
            contexts: [
              'Program > VariableDeclaration > VariableDeclarator > ArrowFunctionExpression',
              'TSPropertySignature',
              'TSEnumDeclaration',
            ],
          },
        ],
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint/eslint-plugin'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        'no-shadow': 0,
        '@typescript-eslint/no-shadow': 1,
        '@typescript-eslint/explicit-function-return-type': 0,
        '@typescript-eslint/explicit-member-accessibility': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/indent': 0,
        '@typescript-eslint/member-delimiter-style': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-use-before-define': 0,
        '@typescript-eslint/no-unused-vars': [
          2,
          {
            argsIgnorePattern: '^_',
          },
        ],
      },
    },
    {
      files: ['**/cypress/integration/**/*', '**/cypress/support/**/*'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './cypress/tsconfig.json',
      },
      globals: {
        cy: false,
        Cypress: false,
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
