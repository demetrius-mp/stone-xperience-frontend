import typography from '@tailwindcss/typography';
import daisyui from 'daisyui';
import daisyuiThemes from 'daisyui/src/theming/themes';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [typography, daisyui],
	daisyui: {
		themes: [
			'light',
			'dark',
			{
				stonexperience: {
					...daisyuiThemes.emerald,
					primary: '#0fcc7d'
				}
			}
		]
	}
} as Config;
