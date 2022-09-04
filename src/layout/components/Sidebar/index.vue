<template>
  <section class="scrollbar-wrapper">
    <Logo />

    <ElScrollbar wrap-class="scrollbar-wrapper">
      <ElMenu
        mode="vertical"
        :default-active="route.path"
        :collapse="appModuleStore.getSidebarState"
        :unique-opened="false"
        :collapse-transition="false"
      >
        <Traversal :sources="fakeMenus">
          <template #traversal="{ value }">
            <SidebarItem :item="value" />
          </template>
        </Traversal>
      </ElMenu>
    </ElScrollbar>
  </section>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { useRoute } from "vue-router";
import { ElScrollbar, ElMenu } from "element-plus";
import { useAppModuleStore } from "@/store";
import { Paths } from "@/config";
import Logo from "./Logo.vue";
import SidebarItem from "./SidebarItem.vue";

const appModuleStore = useAppModuleStore();
const route = useRoute();

const fakeMenus = reactive([
  { id: Paths.Dashboard, name: "Dashboard", icon: "menu-view-dashboard", path: Paths.Dashboard },
  { id: Paths.Home, name: "Home", icon: "menu-view-index", path: Paths.Home },
]);
</script>
