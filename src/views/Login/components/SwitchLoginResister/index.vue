<template>
  <div class="switch-panel">
    <div
      class="switch-panel-item switch-panel-item-login"
      :class="{ 'active-panel': state }"
      @click="onSwitch(true)"
    >
      <span>Login Account</span>
    </div>
    <div
      class="switch-panel-item switch-panel-item-register"
      :class="{ 'active-panel': !state }"
      @click="onSwitch(false)"
    >
      <span>Create New Account</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  onSwitch: (panel: boolean) => void;
  state: boolean;
}>();
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variable.module.scss";
.switch-panel {
  display: flex;
  margin-top: $padding-xl;
  gap: $padding-base;
  cursor: pointer;

  .switch-panel-item {
    font-size: $font-size-base;
    transition: all 0.3s ease-in-out;
    font-weight: bold;

    &:hover {
      color: $font-color-base;
    }
  }

  .active-panel {
    color: $font-color-base;
  }
}
</style>
