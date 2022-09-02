<template>
  <div>HelloWorld</div>
  <OnClickOutside @trigger="counter++">
    <div>Click Outside of Me: {{ counter }}</div>
  </OnClickOutside>
</template>

<script setup lang="ts">
import { OnClickOutside } from "@vueuse/components";
import { ref } from "vue";
const counter = ref(0);
</script>
