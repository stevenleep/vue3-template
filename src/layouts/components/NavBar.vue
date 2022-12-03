<template>
  <header class="nav-bar nav-bar-container">
    <ul class="nav-bar-list" role="list">
      <Traversal :sources="fakeMenus">
        <template #traversal="{ value }">
          <RouterLink :to="value.path">
            <li
              class="menu-item"
              role="menuitem"
              aria-hidden="true"
              aria-expanded="false"
              aria-label="Menu Item"
            >
              <span> {{ value.name }}</span>
            </li>
          </RouterLink>
        </template>
      </Traversal>
    </ul>
  </header>
</template>

<script lang="ts" setup>
import { Paths } from "@/configs";
import { reactive } from "vue";
import Traversal from "@/components/Traversal/Traversal.vue";

const fakeMenus = reactive([
  { id: "dashboard", name: "Dashboard", icon: "menu-view-dashboard", path: Paths.Dashboard },
  { id: "index", name: "Index", icon: "menu-view-index", path: Paths.Index },
  { id: "login", name: "Login", icon: "menu-view-login", path: Paths.Login },
]);
</script>

<style scoped lang="less">
.nav-bar {
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  height: 50px;
  position: relative;
  z-index: 100;

  .nav-bar-list {
    display: flex;
    flex-direction: row;
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;

    .menu-item {
      align-items: center;
      display: flex;
      justify-content: center;
      height: 100%;
      padding: 0 30px;
      position: relative;
      text-decoration: none;
      transition: all 0.3s ease;
      cursor: pointer;

      &:hover {
        background-color: #f11f1f;
        color: #fff;
      }
    }
  }
}
</style>
