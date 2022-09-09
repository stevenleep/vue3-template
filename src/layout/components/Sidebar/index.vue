<template>
  <section>
    <Logo />
    <ElScrollbar wrap-class="scrollbar-wrapper">
      <ElMenu
        mode="vertical"
        :collapse="appStore.getCollapseState"
        class="sidebar-menu"
        router
        ellipsis
        :default-active="route.path"
      >
        <Traversal :sources="permissionStore.getMenuRoutes" keys="path">
          <template #traversal="{ value }">
            <RecursiveMenu :menu-item="value" />
          </template>
        </Traversal>
      </ElMenu>
    </ElScrollbar>
  </section>
</template>

<script lang="ts" setup>
import { ElScrollbar } from "element-plus";
import { useAppStore, usePermissionStore } from "@/store";
import { useRoute } from "vue-router";
import Logo from "./Logo.vue";
import RecursiveMenu from "./RecursiveMenu.vue";

const appStore = useAppStore();
const route = useRoute();
const permissionStore = usePermissionStore();
</script>
