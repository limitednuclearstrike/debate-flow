import vercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const isElectronBuild = process.env.BUILD_TARGET === 'electron';

let adapter = vercel();

if (isElectronBuild) {
	const { default: staticAdapter } = await import('@sveltejs/adapter-static');
	adapter = staticAdapter({
		fallback: 'index.html'
	});
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter
	}
};

export default config;
