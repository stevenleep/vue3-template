<template>
  <section class="main-content" p-20px>
    <RouterView />
  </section>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.main-content {
  height: $app-content-heightable;
  scroll-behavior: smooth;
  overflow-y: auto;
}
</style>
