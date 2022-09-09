<template>
  <section class="navbar-container">
    <aside class="guideline">
      <Collapse />
      <RenderPageTitle />
    </aside>

    <aside class="settings">
      <SettingTools />
    </aside>
  </section>
</template>

<script lang="ts" setup>
import RenderPageTitle from "./PageTitle.vue";
import SettingTools from "./SettingTools.vue";
</script>

<style lang="scss" scoped>
@import "@/assets/styles/layout.scss";

.navbar-container {
  @include flex-space-between;
  height: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  padding: 0 20px;

  aside {
    height: 100%;
    cursor: pointer;
    @include flex-fully-center;
  }
}
</style>
