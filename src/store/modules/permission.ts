import { defineStore, Store, _GettersTree } from "pinia";
import { RouteRecordRaw } from "vue-router";
import { constantRoutes, asyncRoutes } from "@/router";
import { filterVisibleRoutes } from "@/utils/router";

interface PermissionState {
  routes: RouteRecordRaw[];
  addRoutes: RouteRecordRaw[];
  menuRoutes: RouteRecordRaw[];
  hasPermission: boolean;
}
interface PermissionActions {
  generateRoutes: (roles: string) => Promise<RouteRecordRaw[]>;
}
export type PermissionStore = Store<
  typeof permissionStoreId,
  PermissionState,
  _GettersTree<PermissionState>,
  PermissionActions
>;

const permissionStoreId = "permission" as const;
export const usePermissionStore = defineStore<
  typeof permissionStoreId,
  PermissionState,
  _GettersTree<PermissionState>,
  PermissionActions
>(permissionStoreId, {
  state: () => ({
    routes: [],
    addRoutes: [],
    menuRoutes: [],
    hasPermission: false,
  }),
  persist: {
    enabled: true,
  },
  getters: {
    getRoutes: (state) => state.routes,
    getAddRoutes: (state) => state.addRoutes,
    getMenuRoutes: (state) => state.menuRoutes,
  },
  actions: {
    generateRoutes(role: string): Promise<RouteRecordRaw[]> {
      return new Promise<RouteRecordRaw[]>((resolve) => {
        let accessedRoutes: RouteRecordRaw[] = [];

        // TODO: Get the routes from the server
        if (role === "admin") {
          accessedRoutes = asyncRoutes;
        }
        // TODO: filter the routes by the role
        this.addRoutes = accessedRoutes;
        this.routes = constantRoutes.concat(accessedRoutes);
        this.menuRoutes = filterVisibleRoutes(this.routes);
        resolve(this.routes);
      });
    },
  },
});
