import { BaseStoreMapProperties, ExtendedMapConstructor } from "./extendInterface";

export class BaseStoreMap<ItemConstructor = Function>
  extends Map<BaseStoreMapProperties, ItemConstructor>
  implements ExtendedMapConstructor<ItemConstructor>
{
  /**
   *
   * @param key BaseStoreMapProperties
   * @returns ItemConstructor | undefined
   */
  public getStore(key: BaseStoreMapProperties): ItemConstructor | undefined {
    return this.get(key);
  }

  /**
   * @description: add item to store
   * @param key BaseStoreMapProperties
   * @param value ItemConstructor
   * @returns void
   */
  public add(key: BaseStoreMapProperties, value: ItemConstructor): void {
    this.set(key, value);
  }
}
