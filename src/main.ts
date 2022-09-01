import { createApp } from "vue";
import 'element-plus/dist/index.css'
import App from "./App.vue";
import { setupPinia } from "./store";
import { setAppTitle, getEnvOrDefault } from "./utils";

// Set app title according to runtime environment
setAppTitle(getEnvOrDefault("VITE_APP_TITLE", "Admin"));

const app = createApp(App)
// Middleware
setupPinia(app);

// Start app
app.mount("#app");
