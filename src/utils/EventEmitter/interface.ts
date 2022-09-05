import { BaseStoreMap, BaseStoreMapProperties, SupportedStoreEnum } from "@/utils/MapStore";

export type EventListener<V = void> = (...args: any[]) => V;

export interface EventListeners<Item = EventListener> {
  on?: (event: BaseStoreMapProperties, listener: Item) => Function;
  emit?: (event: BaseStoreMapProperties, ...args: any[]) => void;
  off?: (event: BaseStoreMapProperties) => void;
  once?: (event: BaseStoreMapProperties, listener: Item) => Function;
}

export interface EventEmitterOptions {
  maxListeners?: number;
  storeMode?: SupportedStoreEnum | string;
  // store: you can implement the storage layer yourself
  store?: BaseStoreMap<any>;
}

export { SupportedStoreEnum };
