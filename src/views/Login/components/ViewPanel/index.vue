<template>
  <section class="login-view-panel">
    <slot />
  </section>
</template>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.login-view-panel {
  width: 500px;
  padding: $padding-xl * 2;
  height: 400px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
</style>
