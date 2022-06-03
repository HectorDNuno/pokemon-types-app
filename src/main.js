/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "https://desolate-falls-87104.herokuapp.com";

createApp(App).use(router).mount("#app");
