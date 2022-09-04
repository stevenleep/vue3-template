<template>
  <main class="app-login-container login-view">
    <ViewPanel>
      <LoginPanel v-if="loginPanelState" />
      <RegisterAccount v-else />

      <SwitchPanel :on-switch="switchPanel" :state="loginPanelState" />
    </ViewPanel>
  </main>
</template>

<script setup lang="ts">
import ViewPanel from "./components/ViewPanel/index.vue";
import SwitchPanel from "./components/SwitchLoginResister/index.vue";
import LoginPanel from "./components/LoginPanel/index.vue";
import RegisterAccount from "./Register.vue";
import { ref } from "vue";

// TODO: 重构
// loginPanelState true: login false: register
const loginPanelState = ref(true);
const switchPanel = (panel: boolean) => {
  loginPanelState.value = panel;
};
</script>

<style lang="scss" scoped>
@import "./login.scss";
</style>
