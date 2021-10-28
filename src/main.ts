import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";
import LULU from "./components/LULU.vue";
import LULU2 from "./components/LULU2.vue";

const history = createWebHashHistory();
const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: LULU },
    { path: "/xxx", component: LULU2 },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
