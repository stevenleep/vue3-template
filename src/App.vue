<template>
  <main>
    <van-config-provider :theme-vars="theme">
      <!-- 开启顶部安全区适配 -->
      <van-nav-bar safe-area-inset-top />
      <van-calendar v-model:show="s" />

      <RouterView />

      <van-button type="primary"> sdbuis</van-button>

      <!-- 开启底部安全区适配 -->
      <van-number-keyboard safe-area-inset-bottom />
    </van-config-provider>
  </main>
</template>

<script lang="ts" setup>
import { theme } from "./theme";
import { ref } from "vue";
const s = ref(true);
</script>
