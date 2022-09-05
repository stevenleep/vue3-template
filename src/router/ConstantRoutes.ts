import { RouteRecordRaw } from "vue-router";
import { Paths } from "@/config";

/**
 * @title: Constant routes
 * @description: use in the app and only have two pages, all use the static mode route
 */
import Share from "@/views/Share/index.vue";
import Generate from "@/views/Generate/index.vue";
import NoMatched from "@/views/NoMatched/index.vue";

const ConstantRoutes: RouteRecordRaw[] = [
  { path: Paths.Share, name: Paths.Share, component: Share },
  { path: Paths.Generate, name: Paths.Generate, component: Generate },
  { path: Paths.NoMatched, name: "404", component: NoMatched },
];

export default ConstantRoutes;
