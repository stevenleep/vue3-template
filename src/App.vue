<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
</script>

<template>
  <Suspense>
    <ElConfigProvider>
      <RouterView />
    </ElConfigProvider>

    <template #fallback>
      <div v-loading.fullscreen.lock="true" class="loading"></div>
    </template>
  </Suspense>
</template>
