// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	typescript: {
		shim: false,
	},
	modules: ["@nuxt/image", "@nuxtjs/google-fonts"],
	googleFonts: {
		families: {
			Merienda: {
				wght: "300..900",
			},
		},
		display: "swap",
	},
	plugins: ["plugins/oruga.js"],
});
