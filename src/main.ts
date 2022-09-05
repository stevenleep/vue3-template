import { createApp } from "vue";
import { setupPinia } from "@/store";
import { getEnvOrDefault, setAppTitle } from "@/utils";
import { setupRouter } from "@/router";
import { setVanLocale } from "@/locale";

import App from "./App.vue";

// https://www.npmjs.com/package/amfe-flexible
import "amfe-flexible";
// http://vant-contrib.gitee.io/vant/#/zh-CN/advanced-usage#zhuo-mian-duan-gua-pei
import "@vant/touch-emulator";

// Why do project need to use normalize.css?
// ref: https://github.com/necolas/normalize.css/
import "normalize.css/normalize.css";
import "@/assets/styles/normalize.scss";

// unocss
// https://github.com/unocss/unocss
import "uno.css";

// Set app title according to runtime environment
setAppTitle(getEnvOrDefault("VITE_APP_TITLE", "Admin"));

const app = createApp(App);

setupPinia(app);
setupRouter(app);

setVanLocale("ZH_CN");

app.mount("#app");
