// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	modules: ["@nuxt/image", "nuxt-simple-robots"],

	plugins: ["plugins/oruga.ts"],

	nitro: {
		prerender: {
			crawlLinks: true,
		},
	},
});
