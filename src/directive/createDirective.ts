import { Directive } from "vue";
import { BaseStoreMap } from "@/utils/MapStore";

const directiveManager = new BaseStoreMap<AbstractDirective>();
export interface AbstractDirective {
  name: string;
  directive: Directive;
}

export function createDirective<T = any, V = any>(
  directiveName: string,
  directiveImpl: Directive<T, V>,
): AbstractDirective {
  return {
    name: directiveName,
    directive: directiveImpl,
  };
}

export function registerDirective(directive: AbstractDirective): BaseStoreMap<AbstractDirective> {
  return directiveManager.set(directive.name, directive);
}
export function getDirective(directiveName: string): AbstractDirective | undefined {
  return directiveManager.get(directiveName);
}
export function hasDirective(directiveName: string): boolean {
  return directiveManager.has(directiveName);
}
