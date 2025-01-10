/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind')
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"lora": "'Lora', serif"
			},
			colors: {
				"pallate1": "#000F1A",
				"pallate2": "#F0F9FF",
			},
		},
	},
	plugins: [addDynamicIconSelectors()],
}