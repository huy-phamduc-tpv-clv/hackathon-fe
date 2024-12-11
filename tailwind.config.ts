import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

export default {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			'colors': {
				primary: {
					black: '#1F2128',
				},
				secondary: {
					green: '#009245',
				},
				teritary: {
					neon: '#A6E818',
				},
				error: {
					red: '#FF4647',
				},
				neutral: {
					900: '#1C1C1C',
					800: '#3C3C3C',
					700: '#5B5B5B',
					600: '#6E6E6E',
					500: '#979797',
					400: '#979797',
					300: '#B7B7B7',
					200: '#EAEAEA',
					100: '#F3F3F3',
					50: '#F9F9F9',
				},
			},
			'fontSize': {
				'3xl': '2.25rem',
				'2xl': '1.5rem',
				'xl': '1.375rem',
				'3l': '1.25rem',
				'2l': '1.125rem',
				'l': '1rem',
				'3m': '0.875rem',
				'2m': '0.75rem',
			},
			'fontWeight': {
				regular: '400',
				medium: '500',
				extrabold: '600',
				heavy: '700',
			},
			'fontFamily': {
				bfo: ['Bagel Fat One', 'system-ui'],
				inter: ['inter', 'sans-serif'],
			},
			boxShadow: {
				'custom-1': '-2px 0px 11px 0px rgba(0, 0, 0, 0.2)',
			  },
		},
	},
	darkMode: 'class',
	plugins: [nextui()],
} satisfies Config;
