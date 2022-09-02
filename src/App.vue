<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
</script>

<template>
  <ElConfigProvider>
    <div class="app">
      <RouterView />
    </div>
  </ElConfigProvider>
</template>
