import {
  BaseStoreMapProperties,
  CollectionMapStoreDefine,
  ExtendedMapConstructor,
} from "./extendInterface";

export class CollectionMapStore<ItemConstructor = EventListener>
  extends Map<BaseStoreMapProperties, CollectionMapStoreDefine<ItemConstructor>>
  implements ExtendedMapConstructor<ItemConstructor>
{
  /**
   * @description: get event listener from collection
   *              if the key is not in the collection, return undefined
   *
   * @param key BaseStoreMapProperties
   * @returns ItemConstructor[] | undefined
   */
  public getStore(
    key: BaseStoreMapProperties,
  ): CollectionMapStoreDefine<ItemConstructor> | undefined {
    return this.get(key);
  }

  /**
   * @description: add event listener to collection
   *               if the key is not in the collection, create a new collection
   *
   * @param key BaseStoreMapProperties
   * @param value ItemConstructor
   *
   * @return void
   */
  public add(key: BaseStoreMapProperties, value: ItemConstructor | ItemConstructor[]) {
    const store = this.get(key);
    const isArrayValue = Array.isArray(value) && value.length > 0;

    if (store) {
      if (isArrayValue) store.push(...value);
      else store.push(value as ItemConstructor);
    } else {
      if (isArrayValue) this.set(key, value as ItemConstructor[]);
      else this.set(key, [value as ItemConstructor]);
    }
  }
}
