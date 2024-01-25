import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import { sveld } from "sveld";

// import { mdsvex } from "mdsvex";

export default defineConfig({
	plugins: [sveltekit(), sveld()],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"]
	},
	optimizeDeps: {
		include: ['@repo/ui'],
	  },
	css: {
		preprocessorOptions: {
			scss: {
				// additionalData: '@import "./src/lib/sass/_mixins";'
			}
		}
	}
});
