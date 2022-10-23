# EventEmitter

Extensible EventEmitter, which has been internally implemented as a Store for different Collection And Base type

## Base Usage

```typescript
import {EventEmitter} from "./EventEmitter";
const eventEmitter = new EventEmitter();

// on
eventEmitter.on('test', () => {});

// emit
eventEmitter.emit('test')
eventEmitter.emit('test', ...params)

// off
eventEmitter.off('test');

// once
eventEmitter.once("onceTest", () => {});

// getKeyListeners
eventEmitter.getListeners("test");

// hasOnceEvent
eventEmitter.hasOnceEvent("test");
```

## Configable
```typescript
import {EventEmitter} from "./EventEmitter";
const eventEmitter = new EventEmitter({
    // 可选的，WIP, 允许最大存储范围
    // maxListeners: 20,

    // 可选的，CollectionStore 类型存储，默认BaseStore
    // storeMode: SupportedStoreEnum.CollectionStore,
    
    // 可选的，可自行实现存储层(基于BaseStoreMap or CollectionStore), 或者继承Map实现ExtendedMapConstructor的add与getStore
    // store: new BaseStoreMap(),
    store: class XXXStore extends Map {
      add(key, value) {
        this.set(key, value)
      },
      getStore(key) {
        return this.get(key)
      }
    }
 });
```
```typescript
// ExtendedMapConstructor
export interface ExtendedMapConstructor<ItemConstructor> {
  add: (key: BaseStoreMapProperties, value: ItemConstructor) => void;
  getStore: (
    key: BaseStoreMapProperties,
  ) => ItemConstructor | CollectionMapStoreDefine<ItemConstructor> | undefined;
}
```

## Fully customisable controls
This method provides a set of AbstractEventEmitter for you to implement your own EventEmitter mechanism, on the basis of which you can implement any EventEmitter library you want.
```typescript
import { AbstractEventEmitter, EventListeners, EventEmitterOptions } from "./EventEmitter";

class MyEventEmitter extends AbstractEventEmitter implements EventListeners {
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
    // You can use any of the store implementations
    this.listenerStore = options.store;
  }
  
  // EventListeners will prompt you for what methods you need to implement
  
  on() {},
  once(){},
  off(){},
  emit(){},
}
```
