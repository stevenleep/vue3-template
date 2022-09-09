import { App } from "vue";
import {
  createRouter,
  createWebHashHistory,
  NavigationGuardNext,
  RouteLocationNormalized,
  Router,
} from "vue-router";
import { constantRoutes } from "./constantRoutes";
import { Paths } from "@/config";
import { isAuthorized, isLoginPath } from "@/utils";
import { usePermissionStore, PermissionStore } from "@/store/modules/permission";

export * from "./constantRoutes";
export * from "./asyncRoutes";

/**
 * permission Control store
 * @type {PermissionStore} permissionStore | null
 * @description: The store is used to control the permission of the route and the menuRoutes
 *
 * When the application is started, it cannot be called to Pinia to the function.
 * When user is used, it needs to be initialized and then binds
 */
let permissionStore: PermissionStore | null = null;

/**
 * Create router instance and return it
 * @param {App} app | Vue app instance
 * @returns {Router} router | Vue router instance
 */
export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});
export function setupRouter(app: App<Element>): Router {
  app.use(router);
  return router;
}

/***
 * Router guard
 *
 */
router.beforeEach((to, from, next) => {
  // If the user is not logged in, redirect to the login page
  if (!isLoginPath(to) && !isAuthorized()) {
    next({ path: Paths.Login });
    return;
  }
  // If the user is logged in, redirect to the home page
  if (isLoginPath(to) && isAuthorized()) {
    next({ path: Paths.Home });
    return;
  } else {
    processDynamicRoutes(to, from, next);
  }
});

function processDynamicRoutes(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) {
  if (!permissionStore) {
    permissionStore = usePermissionStore();
  }
  /**
   * hasPermission is used to determine whether the route has been dynamically added
   */
  if (permissionStore.hasPermission) {
    return;
  }
  permissionStore.generateRoutes("admin");
  next();
}

// TODO: Push the error to monitor system
router.onError((error) => {
  console.log(error);
});
