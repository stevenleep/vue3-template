<template>
  <main class="login-layout">
    <NavBar />
    <section class="login-container">
      <router-view />
    </section>
  </main>
</template>

<script setup lang="ts">
import NavBar from "@/layouts/components/NavBar.vue";
import { setAppTitle } from "@/helpers";
setAppTitle("Login");
</script>

<style scoped lang="less">
.login-layout {
  height: 100%;

  // .login-container {
  // display: flex;
  // justify-content: center;
  // }
}
</style>
