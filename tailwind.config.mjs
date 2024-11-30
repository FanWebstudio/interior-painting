/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brown: {
					900: '#563B0E',
				},
				primary: {
					600: '#F77F00',
				},
				secondary: {
					950: '#563B0E',
				},
			},
			fontFamily: {
				display: ['Montserrat', 'sans-serif'],
				body: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
