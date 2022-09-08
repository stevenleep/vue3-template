import { App } from "vue";
import {
  AbstractDirective,
  registerDirective as registerDirectiveToStore,
} from "./createDirective";

import permission from "./directives/v-permission";
import debounce from "./directives/v-debounce";
import copy from "./directives/v-copy";
import lazy from "./directives/v-lazy";

// const directiveModules = import.meta.glob("./directives/*.ts");
const directives = [permission, debounce, copy, lazy];
export function setupDirective(app: App<Element>) {
  directives.forEach((directive) => mountDirectiveImpl(app, directive));
}
function mountDirectiveImpl(app: App<Element>, absDirective: AbstractDirective) {
  app.directive(absDirective.name, absDirective.directive);
  registerDirectiveToStore(absDirective);
}

export * from "./createDirective";
