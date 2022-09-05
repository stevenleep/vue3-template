import { createApp } from "vue";
import { setupPinia } from "@/store";
import { getEnvOrDefault, setAppTitle } from "@/utils";
import { setupRouter } from "@/router";
import App from "./App.vue";

// Why do project need to use normalize.css?
// ref: https://github.com/necolas/normalize.css/
import "normalize.css/normalize.css";
import "@/assets/styles/normalize.scss";

// unocss
import "uno.css";

// Set app title according to runtime environment
setAppTitle(getEnvOrDefault("VITE_APP_TITLE", "Admin"));

const app = createApp(App);

setupPinia(app);
setupRouter(app);

app.mount("#app");
