import { App } from "vue";
import { createRouter, createWebHashHistory, Router } from "vue-router";
import ConstantRoutes from "./ConstantRoutes";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: ConstantRoutes,
});

export function setupRouter(app: App<Element>): Router {
  app.use(router);
  return router;
}

// TODO: Push the error to monitor system
router.onError((error) => {
  console.log(error);
});
