import { RouteRecordRaw } from "vue-router";
import { Paths } from "@/configs";
import Layout from "@/layouts/index.vue";
import { RouterMeta } from "./meta";
import LoginLayout from "@/layouts/LoginLayout.vue";

const ConstantRoutes: RouteRecordRaw[] = [
  {
    path: Paths.Index,
    // name: Paths.Index,
    component: Layout,
    meta: {
      // requiresAuth: true,
      permissions: [RouterMeta.RequiresAuthorized],
    },
    children: [
      {
        path: Paths.Dashboard,
        name: Paths.Dashboard,
        component: () => import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard/index.vue"),
      },
      {
        path: Paths.Workbench,
        name: Paths.Workbench,
        component: () => import(/* webpackChunkName: "Workbench" */ "@/views/Workbench/index.vue"),
      },
      {
        path: Paths.Index,
        redirect: Paths.Workbench,
      },
    ],
  },
  {
    path: Paths.Admin,
    name: Paths.Admin,
    component: () => import(/* webpackChunkName: "admin" */ "@/views/Admin/index.vue"),
    meta: {
      // requiresAuth: true, admin: true,
      permissions: [RouterMeta.RequiresAdmin, RouterMeta.RequiresAuthorized],
    },
  },
  {
    path: Paths.Login,
    name: Paths.Login,
    component: LoginLayout,
    meta: {
      // requiresAuth: false,
    },
    children: [
      {
        path: Paths.Login,
        name: Paths.Login,
        component: () => import(/* webpackChunkName: "login" */ "@/views/Login/index.vue"),
      },
    ],
  },
  {
    path: Paths.NoMatched,
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "@/views/NotFound/404.vue"),
  },
];
export default ConstantRoutes;
