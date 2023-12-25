import path from 'path';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import preprocess from 'svelte-preprocess';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import prefixer from 'postcss-variables-prefixer';
import a11yEmoji from '@fec/remark-a11y-emoji';
import slug from 'rehype-slug';
import github from 'remark-github';
import examples from 'mdsvexamples';
import examplesVite from 'mdsvexamples/vite';

import sveld from "vite-plugin-sveld";

import { mdsvex } from "mdsvex";


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess(),
		mdsvex({
			extensions: ['.svx', '.md'],
			remarkPlugins: [
				github,
				a11yEmoji,
				[
					examples,
					{
						ExampleComponent: '/src/site/lib/Example/Example.svelte'
					}
				]
			],
			rehypePlugins: [slug]
		}),
		preprocess({
			postcss: {
				plugins: [autoprefixer(), cssnano(), prefixer({ prefix: 'fds-' })]
			}

		})],

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		alias: {
			'$site': './src/site',
			'$site/*': './src/site/*',
			'$site/lib': './src/site/lib',
			'$site/lib/*': './src/site/lib/*'
		},
		vite: {
			plugins: [sveld(), examplesVite],
			resolve: {
				extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', 'svg'],
				alias: {
					$site: path.resolve('src/site'),
					'fluent-svelte': path.resolve('src/lib')
				}
			}
		}
	}
};

export default config;
