<script setup lang="ts">
import { ElConfigProvider } from "element-plus";

import HelloWorldVue from "@components/HelloWorld.vue";
import { useLocaleStore } from "@store/locale";
const localeStore = useLocaleStore();
</script>

<template>
  <ElConfigProvider>
    <div>
      <ElRow>
        <ElButton @click="localeStore.setLocale(Date.now().toString())">
          {{ localeStore.locale }}
        </ElButton>
      </ElRow>
      <HelloWorldVue />
    </div>
  </ElConfigProvider>
</template>
