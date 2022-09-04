import { defineComponent, Fragment, h, PropType } from "vue";

export function CreateSupportedGenericTraversal<GenericT extends unknown>() {
  return defineComponent({
    name: "GenericTraversal",
    props: {
      sources: {
        type: Array as PropType<GenericT[]>,
        default: () => [],
      },
      keys: {
        type: String as PropType<string>,
        default: () => "id",
      },
    },

    setup(props, context) {
      function safeKeys(source: GenericT, expectedKeys: string, index: number) {
        if (typeof source === "object") {
          return source;
        }
        const safeSource = Object(source);
        return Reflect.has(safeSource, expectedKeys) ? safeSource[expectedKeys] : index;
      }

      return () => {
        return props.sources.map((source: GenericT, index: number) => {
          const key = safeKeys(source, props.keys, index);
          return h(
            Fragment,
            { key },
            context.slots?.traversal?.({
              value: source,
              index,
              key,
              name: "traversal",
            }),
          );
        });
      };
    },
  });
}
