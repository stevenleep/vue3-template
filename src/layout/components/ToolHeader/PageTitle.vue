<template>
  <span>{{ pageTitle }}</span>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const pageTitle = computed(() => {
  const { title } = route.meta || {};
  return title;
});
</script>
