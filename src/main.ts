import { createApp } from "vue";
import { router } from "@/router";
import { createPinia } from "pinia";
import "./style.less";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-indigo/theme.css";

const pinia = createPinia();

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.use(pinia);

app.mount("#app");
