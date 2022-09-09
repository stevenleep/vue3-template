import { RouteRecordRaw } from "vue-router";
import { Paths } from "@/config";
import Layout from "@/layout/index.vue";
import { RouterMeta } from "./meta";

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: Paths.Index,
    name: "首页",
    component: Layout,
    redirect: Paths.Home,
    meta: { permissions: [RouterMeta.RequiresAuthorized] },
    children: [
      {
        path: Paths.Dashboard,
        name: "Dashboard",
        component: () => import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard/index.vue"),
        meta: { visible: true, title: "Dashboard", icon: "dashboard" },
      },
      {
        path: Paths.Home,
        name: Paths.Home,
        component: () => import(/* webpackChunkName: "home" */ "@/views/Home/index.vue"),
        meta: {
          title: "首页",
          icon: "home",
        },
      },
    ],
  },
  {
    path: Paths.Admin,
    name: "Admin",
    component: () => import(/* webpackChunkName: "admin" */ "@/views/Admin/index.vue"),
    meta: {
      visible: false,
      permissions: [RouterMeta.RequiresAdmin, RouterMeta.RequiresAuthorized],
    },
  },
  {
    path: Paths.Login,
    name: "Login",
    meta: { visible: false },
    component: () => import(/* webpackChunkName: "login" */ "@/views/Login/index.vue"),
  },
  {
    path: Paths.NoMatched,
    name: "404",
    meta: { visible: false },
    component: () => import(/* webpackChunkName: "404" */ "@/views/NotFound/404.vue"),
  },
];
