// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	typescript: {
		shim: false,
	},
	modules: [
		"nuxt-icon",
		"@nuxt/image",
		"@nuxtjs/google-fonts",
		[
			"nuxt-mail",
			{
				message: {
					to: process.env.MESSAGE_TO,
				},
				smtp: {
					service: process.env.SMTP_SERVICE,
					auth: {
						user: process.env.SMTP_AUTH_USER,
						pass: process.env.SMTP_AUTH_PASS,
					},
				},
			},
		],
	],
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
