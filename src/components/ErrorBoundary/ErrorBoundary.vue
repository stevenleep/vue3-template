<template>
  <template v-if="slots.boundary">
    <!-- TODO: make it -->
    <!-- <slot name="boundary" /> -->
  </template>
</template>

<script lang="ts" setup>
import { useSlots } from "vue";
const slots = useSlots();
</script>
