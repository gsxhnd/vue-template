import { createApp } from "vue";
// import { router } from "@/router";
import { createRouter, createWebHashHistory } from "vue-router";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";

// const pinia = createPinia();

const Home = { template: "<div>Home</div>" };
const About = { template: "<div>About</div>" };

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
// app.use(pinia);

app.mount("#app");
