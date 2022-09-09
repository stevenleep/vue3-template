<template>
  <div class="sidebar-logo-container">
    <transition>
      <RouterLink :to="appSettings.sidebar.link">
        <aside>
          <img v-if="appSettings.sidebar.enableLogo" :src="appSettings.sidebar.logo" alt="logo" />
          <h1 v-if="!appStore.getCollapseState" class="sidebar-title">
            {{ appSettings.sidebar.title }}
          </h1>
        </aside>
      </RouterLink>
    </transition>
  </div>
</template>

<script setup lang="ts">
import appSettings from "@/config/settings";
import { useAppStore } from "@/store";
const appStore = useAppStore();
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variable.module.scss";
@import "@/assets/styles/family.scss";

.sidebar-logo-container {
  height: $menu-header-height;
  transition: all 0.3s ease;
  padding: 0 $padding-xl;
  background-color: $side-bar-title;

  &:hover {
    cursor: pointer;
  }

  aside {
    display: flex;
    align-items: center;
    gap: $padding-base;
    height: 100%;
    width: 100%;

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }

    .sidebar-title {
      color: $menu-text;
      font-size: 18px;
      font-weight: 500;
      // text-transform: uppercase;
      transition: all 0.3s ease;
    }
  }
}
</style>
