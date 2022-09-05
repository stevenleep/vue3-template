import {
  BaseStoreMap,
  BaseStoreMapProperties,
  CollectionMapStore,
  SupportedStoreEnum,
} from "@/utils/MapStore";
import { EventEmitterOptions } from "./interface";

export abstract class AbstractEventEmitter<Item = EventListener> {
  // the store default is not implemented. When it is running
  // you can implement the storage layer yourself
  public listenerStore: CollectionMapStore<Item> | BaseStoreMap<Item> | null = null;
  public onceEventStore = new Set<BaseStoreMapProperties>(); // once eventName store

  constructor(public options: EventEmitterOptions = {}) {
    this.prepare();
  }

  /**
   * @description: prepare store mode
   */
  private prepare() {
    const { storeMode } = this.options;
    this.options.storeMode = storeMode || SupportedStoreEnum.BaseStore;
    this.initStore(this.options.storeMode, this.options);
  }

  /**
   * @title: init store
   *
   * @description: Out of the process of initialized Store will involve certain business logic,
   *               and the specific implementation is submitted to the subclass
   *
   * @param initStoreMode SupportedStoreEnum
   * @param options EventEmitterOptions
   */
  protected abstract initStore(
    initStoreMode: SupportedStoreEnum | string,
    options: EventEmitterOptions,
  ): void;

  public getListeners(key: BaseStoreMapProperties): Item[] {
    const listeners = this.listenerStore?.getStore(key);
    if (!listeners) {
      return []; // no listeners
    }
    return Array.isArray(listeners) ? listeners : [listeners];
  }

  /**
   * @description: Event belonging to only can only trigger once
   *
   * @param eventName BaseStoreMapProperties
   * @returns boolean
   */
  public hasOnceEvent(eventName: BaseStoreMapProperties) {
    return this.onceEventStore.has(eventName);
  }

  /**
   * @description: Judgment is Collection type store
   */
  public isCollectionMode() {
    return (
      this.options.storeMode === SupportedStoreEnum.CollectionStore &&
      this.listenerStore instanceof CollectionMapStore
    );
  }

  protected requestCancelCallback(eventName: BaseStoreMapProperties, handler: Item) {
    return () => {
      if (this.isCollectionMode() && this.listenerStore instanceof CollectionMapStore) {
        const newestListeners = this.getListeners(eventName).filter((item) => item !== handler);
        this.listenerStore?.set(eventName, newestListeners);
      } else {
        this.listenerStore?.delete(eventName);
      }
    };
  }
}
