module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'xo'],
	overrides: [
		{
			extends: [
				'airbnb',
				'airbnb-typescript',
				'airbnb/hooks',
				'plugin:prettier/recommended',
			],
			files: ['*.ts', '*.tsx'],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {},
};
