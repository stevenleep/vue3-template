import { Paths } from "@/config";
import { RouteRecordRaw, RouteLocationNormalized, RouteLocationNormalizedLoaded } from "vue-router";

export function isLoginPath(routerRaw: RouteLocationNormalized): boolean {
  return routerRaw.path === Paths.Login;
}

interface FilterInvisibleOptions {
  invisibleCallback?: (route: RouteRecordRaw) => boolean;
}
export function filterVisibleRoutes(
  routes: RouteRecordRaw[],
  options: FilterInvisibleOptions = {},
): RouteRecordRaw[] {
  const customInvisibleCallback = options.invisibleCallback;
  return routes.filter((route) => {
    const shouldReserved = route.meta?.visible !== false;
    if (customInvisibleCallback) {
      return customInvisibleCallback(route);
    }
    if (Array.isArray(route.children) && route.children.length > 0 && shouldReserved) {
      route.children = filterVisibleRoutes(route.children, options);
    }
    return shouldReserved;
  });
}

/**
 *
 * @param routes RouteRecordRaw Tree
 * @returns RouteRecordRaw[]
 */
export function flattenRoutes(routes: RouteRecordRaw[]): RouteRecordRaw[] {
  const result: RouteRecordRaw[] = [];
  routes.forEach((route) => {
    result.push(route);
    if (Array.isArray(route.children) && route.children.length > 0) {
      result.push(...flattenRoutes(route.children));
    }
  });
  return result;
}

export function generateMenuRoutes(routes: RouteRecordRaw[]): RouteRecordRaw[] {
  return filterVisibleRoutes(routes, {
    invisibleCallback: (route) => {
      return route.meta?.menu !== false;
    },
  });
}

export function includingInRoutes(
  route: RouteLocationNormalizedLoaded,
  routes: RouteRecordRaw[],
): boolean {
  const flattenMenuRoutes = flattenRoutes(routes);
  return flattenMenuRoutes.some((menuRoute) => menuRoute.path === route.path);
}
