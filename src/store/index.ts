import { App } from "vue";
import { createPinia } from "pinia";

export function setupPinia(app: App<Element>): void {
  app.use(createPinia());
}

export * from "./modules/app";
