// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['~/assets/styles/reset.css', '~/assets/styles/variables.scss', '~/assets/styles/global.scss'],
	runtimeConfig: {
		public: {
			apiEndpoint: process.env.API_ENDPOINT,
		},
	},
});
