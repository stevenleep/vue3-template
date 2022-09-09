<template>
  <div class="settings-dropdown-container">
    <ElDropdown>
      <span class="el-dropdown-link"> Move Here</span>
      <template #dropdown>
        <ElDropdownMenu>
          <ElDropdownItem>Settings</ElDropdownItem>
          <ElDropdownItem divided @click="logout">Logout</ElDropdownItem>
        </ElDropdownMenu>
      </template>
    </ElDropdown>
  </div>
</template>

<script lang="ts" setup>
import { Paths } from "@/config";
import { router } from "@/router";
import { dismissalAuthorize } from "@/utils";

function logout() {
  dismissalAuthorize();
  router.push(Paths.Login);
}
</script>
