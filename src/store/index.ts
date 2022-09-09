import { App } from "vue";
import { createPinia } from "pinia";
import persistPinia from "pinia-plugin-persist";
export * from "./modules";

export const store = createPinia();
store.use(persistPinia);

export function setupPinia(app: App<Element>): void {
  app.use(store);
}
