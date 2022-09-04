<template>
  <RouterLink :to="item.path">
    <ElMenuItem :index="item.id">
      <span>{{ item.name }}</span>
    </ElMenuItem>
  </RouterLink>
</template>

<script setup lang="ts">
import { ElMenuItem } from "element-plus";
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
