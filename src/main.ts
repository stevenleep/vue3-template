import { createApp } from "vue";
import App from "./App.vue";
import { setAppTitle, getEnvOrDefault } from "./utils";

// Set app title according to runtime environment
setAppTitle(getEnvOrDefault("VITE_APP_TITLE", "Admin"));

// Start app
createApp(App).mount("#app");
