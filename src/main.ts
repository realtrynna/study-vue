import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// import Card from "./components/Card.vue";

import "./assets/main.css";

const app = createApp(App).use(router);

// app.component("Card", Card);

// 실제 Vue Instance 생성 Method
app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";
