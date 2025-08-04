import nextPlugin from 'eslint-config-next';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts', '**/*.tsx'], // Specify files to lint (replaces "extensions")
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
      sourceType: 'module',
    },
    rules: {
      // Optional: Add custom rules or override defaults
      '@typescript-eslint/no-unused-vars': ['warn'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
  nextPlugin, // Includes next/core-web-vitals and other Next.js rules
];