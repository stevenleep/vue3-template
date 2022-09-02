<template>
  <!-- XXX: This is test component-->
  <slot
    v-for="(source, index) in sources"
    :key="safeKeys(source, keys, index)"
    :value="source"
    name="traversal"
    :index="index"
  />
</template>

<script lang="ts" setup>
defineProps({
  sources: { type: Array, default: () => [] },
  keys: { type: String, default: () => "id" },
});

function safeKeys(source: any, expectedKeys: string, index: number) {
  return Reflect.has(Object(source), expectedKeys) ? source[expectedKeys] : index;
}
</script>
