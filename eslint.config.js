import jbremsEslintConfig from 'eslint-config-jbrems';
import babelParser from '@babel/eslint-parser';
import reactPlugin from 'eslint-plugin-react';
import storybookPlugin from 'eslint-plugin-storybook';

export default [
  ...jbremsEslintConfig,
  {
    files: ['**/*.jsx'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: { presets: ['@babel/preset-react'] },
      },
      globals: { document: true },
    },
    settings: { react: { version:'detect' } },
    plugins: { react: reactPlugin },
    rules: {
      ...reactPlugin.configs['recommended'].rules,
      ...reactPlugin.configs['jsx-runtime'].rules,
      'react/no-unescaped-entities': 'off',
      'react/jsx-uses-react': ['error'],
    },
  },
  {
    files: ['**/*.stories.jsx'],
    plugins: { storybook: storybookPlugin },
    rules: {
      ...storybookPlugin.configs['recommended'].rules,
    },
  },
];