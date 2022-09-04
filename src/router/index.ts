import { Paths } from "@/config";
import { isAuthorized } from "@/utils";
import { App } from "vue";
import { createRouter, createWebHashHistory, Router } from "vue-router";
import ConstantRoutes from "./ConstantRoutes";
import { isLoginPath } from "./util";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: ConstantRoutes,
});

export function setupRouter(app: App<Element>): Router {
  app.use(router);
  return router;
}

// beforeEach
router.beforeEach((to, from, next) => {
  if (!isLoginPath(to) && !isAuthorized()) {
    next({ path: Paths.Login });
  } else {
    next();
  }
});

// TODO: Push the error to monitor system
router.onError((error) => {
  console.log(error);
});
