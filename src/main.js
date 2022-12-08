import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Oruga from "@oruga-ui/oruga-next";
import { bulmaConfig } from "@oruga-ui/theme-bulma";
import "@oruga-ui/theme-bulma/dist/bulma.css";

createApp(App).use(router).use(Oruga, bulmaConfig).mount("#app");
