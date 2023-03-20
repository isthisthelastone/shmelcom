module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'xo',
	],
	overrides: [
		{
			extends: [
				'airbnb',
				'airbnb-typescript',
				'airbnb/hooks',
				'xo-typescript',
				'plugin:prettier/recommended',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'prettier',
	],
	rules: {
		'react/react-in-jsx-scope': 0,
		'import/prefer-default-export': 0,
	},
};
