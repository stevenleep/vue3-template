<template>
  <main>
    <van-config-provider :theme-vars="theme">
      <!-- 开启顶部安全区适配 -->
      <!-- <van-nav-bar safe-area-inset-top /> -->

      <RouterView />

      <van-button type="primary" @click="goPage(Paths.Generate)"> Generate </van-button>
      <van-button type="primary" @click="goPage(Paths.Share)"> Share </van-button>

      <!-- 开启底部安全区适配 -->
      <van-number-keyboard safe-area-inset-bottom />
    </van-config-provider>
  </main>
</template>

<script lang="ts" setup>
import { theme } from "./theme";
import { router } from "@/router";
import { Paths } from "@/config";

function goPage(path: string) {
  router.push(path);
}
</script>
