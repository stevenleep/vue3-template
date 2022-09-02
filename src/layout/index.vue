<template>
  <div class="app-layout">
    <NavBar />
    <div class="main-container">
      <AppMain />
    </div>
  </div>
</template>

<script lang="ts" setup>
import AppMain from "./components/AppMain.vue";
import NavBar from "./components/NavBar.vue";
</script>
