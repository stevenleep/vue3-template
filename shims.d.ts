/**
 * why need this?
 *
 * @description
 *
 * because of the TS-PARSER problem, it will make the unplugin-vue-components automatically
 * find the type definition of the type of no .vue file
 */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
