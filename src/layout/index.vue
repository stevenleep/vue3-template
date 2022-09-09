<template>
  <Sidebar class="sidebar-container" />
  <AppMain
    class="main-container"
    :class="{
      'main-container-collapse': appStore.getCollapseState,
    }"
  />
</template>

<script lang="ts" setup>
import AppMain from "./components/AppMain.vue";
import Sidebar from "./components/Sidebar/index.vue";
import { useAppStore } from "@/store";
const appStore = useAppStore();
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variable.module.scss";
.main-container {
  margin-left: $side-bar-width;
  &.main-container-collapse {
    margin-left: $side-bar-collapse-width;
  }
}
</style>
