<template>
  <main class="app-layout">
    <NavBar />
    <div class="main-container">
      <AppMain />
    </div>
  </main>
</template>

<script lang="ts">
export default {
  name: "AppLayout",
};
</script>

<script lang="ts" setup>
import AppMain from "./components/AppMain.vue";
import NavBar from "./components/NavBar.vue";

import { setAppTitle } from "@/helpers";
setAppTitle("App");
</script>
