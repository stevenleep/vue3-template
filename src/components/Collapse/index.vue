<template>
  <div @click="toggleCollapse">
    <ElIcon :size="18" :color="color">
      <Expand v-if="appStore.getCollapseState" />
      <Fold v-else />
    </ElIcon>
  </div>
</template>

<script lang="ts" setup>
import { Expand, Fold } from "@element-plus/icons-vue";
import { useAppStore } from "@/store";

const appStore = useAppStore();
function toggleCollapse() {
  appStore.toggleCollapse();
}

defineProps({
  color: {
    type: String,
    default: "#606266",
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/layout.scss";
div {
  height: 100%;
  cursor: pointer;
  @include flex-fully-center;
  padding-right: 10px;
}
</style>
