import { createApp } from "vue";
import { setupPinia } from "@/store";
import { setupRouter } from "@/router";
import App from "./App.vue";

import "element-plus/dist/index.css";
import "./global.less";

// Create app instance
const app = createApp(App);

// setup store
setupPinia(app);

// setup router and start app
setupRouter(app)
  .isReady()
  .then(() => {
    app.mount("#app");
  });
