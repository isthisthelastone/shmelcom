/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			poppins: ['PoppinsRegular', 'system-ui', 'sans-serif'],
			noodle: ['BigNoodleTitling', 'system-ui', 'sans-serif'],
		},
		colors: {
			shmelYellow: '#ffbc36',
			weedGreen: '#819685',
			black: '#000',
		},
		extend: {},
	},
	plugins: [],
};
