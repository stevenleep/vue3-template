<template>
  <section class="nav-bar nav-bar-container">
    <ul class="nav-bar-list" role="list">
      <Traversal :sources="fakeMenus">
        <template #traversal="{ value }">
          <li
            class="menu-item"
            role="menuitem"
            aria-hidden="true"
            aria-expanded="false"
            aria-label="Menu Item"
          >
            <el-icon><Promotion /></el-icon>
            <RouterLink :to="value.path">{{ value.name }}</RouterLink>
          </li>
        </template>
      </Traversal>
    </ul>
  </section>
</template>

<script lang="ts" setup>
import { Promotion } from "@element-plus/icons-vue";
import { Paths } from "@/config";
import { reactive } from "vue";

const fakeMenus = reactive([
  { id: "dashboard", name: "Dashboard", icon: "menu-view-dashboard", path: Paths.Dashboard },
  { id: "index", name: "Index", icon: "menu-view-index", path: Paths.Index },
]);
</script>
