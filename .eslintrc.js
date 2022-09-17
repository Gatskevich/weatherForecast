module.exports = {
  root: true,
  env: {
		browser: true,
		es2021: true,
	},
	extends: [
    "@react-native-community",
		"prettier"
	],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
