export type BaseStoreMapProperties = string | number | symbol;
export type CollectionMapStoreDefine<ItemConstructor> = ItemConstructor[];

export interface ExtendedMapConstructor<ItemConstructor> {
  add: (key: BaseStoreMapProperties, value: ItemConstructor) => void;
  getStore: (
    key: BaseStoreMapProperties,
  ) => ItemConstructor | CollectionMapStoreDefine<ItemConstructor> | undefined;
}
