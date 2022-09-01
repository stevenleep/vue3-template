<script setup lang="ts">
import HelloWorldVue from "@components/HelloWorld.vue";
import { useLocaleStore } from "@store/locale";

const localeStore = useLocaleStore();
</script>

<template>
  <div>
    <button @click="localeStore.setLocale(Date.now().toString())">
      {{ localeStore.locale }}
    </button>

    <HelloWorldVue />
  </div>
</template>
