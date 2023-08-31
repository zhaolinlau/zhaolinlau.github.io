import Oruga from "@oruga-ui/oruga-next";
import { bulmaConfig } from "@oruga-ui/theme-bulma";
import "@oruga-ui/theme-bulma/dist/bulma.css";
import "@mdi/font/css/materialdesignicons.css";
import "animate.css/animate.css";
import "@fortawesome/fontawesome-free/css/all.css";

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(Oruga, bulmaConfig);
});
