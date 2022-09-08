import { createApp } from "vue";
import "element-plus/dist/index.css";
import { setupPinia } from "@/store";
import { getEnvOrDefault, setAppTitle } from "@/utils";
import { setupRouter } from "@/router";
import App from "./App.vue";

import "@/mock";

// Why do project need to use normalize.css?
// ref: https://github.com/necolas/normalize.css/
import "normalize.css/normalize.css";

// Initialize APP style
// Used to import commonly used SCSS variables and functions
import "@/assets/styles/normalize.scss";

// unocss
import "uno.css";
import { setupDirective } from "./directive";

// Set app title according to runtime environment
setAppTitle(getEnvOrDefault("VITE_APP_TITLE", "Admin"));

const app = createApp(App);

setupPinia(app);
setupDirective(app);
setupRouter(app)
  .isReady()
  .then(() => {
    app.mount("#app");
  });

// Start app
// app.mount("#app");
