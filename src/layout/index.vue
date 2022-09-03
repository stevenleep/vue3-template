<template>
  <div class="app-layout">
    <NavBar />
    <AppMain />

    <el-button type="primary">Primary</el-button>
  </div>
</template>

<script lang="ts" setup>
import AppMain from "./components/AppMain.vue";
import NavBar from "./components/NavBar.vue";
</script>
