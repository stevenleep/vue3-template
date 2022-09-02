import { createApp } from "vue";
import "element-plus/dist/index.css";
import { setupPinia } from "@/store";
import { getEnvOrDefault, setAppTitle } from "@/utils";
import { setupRouter } from "@/router";
import App from "./App.vue";

import "@/mock";

import "./styles.scss";

// Set app title according to runtime environment
setAppTitle(getEnvOrDefault("VITE_APP_TITLE", "Admin"));

const app = createApp(App);

setupPinia(app);
setupRouter(app)
  .isReady()
  .then(() => {
    app.mount("#app");
  });

// Start app
// app.mount("#app");
