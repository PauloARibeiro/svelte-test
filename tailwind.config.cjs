/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		colors: {
			primary: {
				50: '#f5f7ff',
				100: '#ebf0ff',
				200: '#ccd9ff',
				300: '#adc2ff',
				400: '#7094ff',
				500: '#3366ff',
				600: '#2e5ce6',
				700: '#264dbf',
				800: '#1f3d99',
				900: '#19327d'
			},
			error: {
				50: '#fdf6f6',
				100: '#faecec',
				200: '#f4d0d0',
				300: '#edb4b4',
				400: '#df7b7b',
				500: '#d14343',
				600: '#bc3c3c',
				700: '#9d3232',
				800: '#7d2828',
				900: '#662121'
			},
			success: {
				50: '#f6fcfa',
				100: '#eef8f4',
				200: '#d4efe5',
				300: '#bae5d5',
				400: '#86d1b5',
				500: '#52bd95',
				600: '#4aaa86',
				700: '#3e8e70',
				800: '#317159',
				900: '#285d49'
			},
			white: '#fff',
			black: '#000'
		}
	},
	plugins: []
};
