<template>
  <main>
    <ToolHeader />
    <section class="main-content" p-20px>
      <RouterView />
    </section>
  </main>
</template>

<script lang="ts" setup>
import ToolHeader from "./ToolHeader/index.vue";
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variable.module.scss";
@import "@/assets/styles/layout.scss";

.main-content {
  height: $app-content-heightable;
  scroll-behavior: smooth;
  overflow-y: auto;
}
</style>
