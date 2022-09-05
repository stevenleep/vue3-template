import {
  BaseStoreMap,
  BaseStoreMapProperties,
  CollectionMapStore,
  SupportedStoreEnum,
} from "@/utils/MapStore";
import { AbstractEventEmitter } from "./AbstractEventEmitter";
import { EventEmitterOptions, EventListeners } from "./interface";

/**
 * @title: EventEmitter
 * @description: EventEmitter is a class that can be used to register and trigger custom events.
 */
export class EventEmitter<Item = EventListener>
  extends AbstractEventEmitter<Item>
  implements EventListeners<Item>
{
  constructor(options: EventEmitterOptions = {}) {
    super(options);
  }

  /**
   * @description: override abstract initStore method
   * @param initStoreMode SupportedStoreEnum | string
   * @param options EventEmitterOptions
   * @returns void
   */
  public override initStore(
    initializedStoreMode: SupportedStoreEnum,
    options: EventEmitterOptions,
  ) {
    // custom store implementation
    if (options.store) {
      this.listenerStore = options.store;
      return;
    }

    // when runtime, what store is determined according to the configuration
    switch (initializedStoreMode) {
      case SupportedStoreEnum.CollectionStore:
        this.listenerStore = new CollectionMapStore<Item>();
        break;
      case SupportedStoreEnum.BaseStore:
      default:
        this.listenerStore = new BaseStoreMap<Item>();
        break;
    }
  }

  public on(eventName: BaseStoreMapProperties, event: Item) {
    this.listenerStore?.add(eventName, event);
    return this.requestCancelCallback(eventName, event);
  }

  public emit(eventName: BaseStoreMapProperties, ...args: any[]) {
    this.getListeners(eventName).forEach((listener) => {
      // TODO: isFunction
      if (typeof listener === "function") {
        listener(...args);
      }
    });

    // cancel once event listeners
    if (this.hasOnceEvent(eventName)) {
      this.off(eventName);
    }
  }

  public once(eventName: BaseStoreMapProperties, event: any) {
    this.onceEventStore.add(eventName);
    this.on(eventName, event);
    return this.requestCancelCallback(eventName, event);
  }

  public off(eventName: BaseStoreMapProperties) {
    this.listenerStore?.delete(eventName);
  }
}
