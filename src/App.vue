<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import services from "@/services";
import { onMounted } from "vue";

onMounted(async () => {
  // const userData = await services.userService.getUser();
  // console.log(userData);

  // const postUserData = await services.userService.postUser();
  // console.log(postUserData);
  const getUserWithParamsData = await services.userService.getUserWithParams({
    requestType: "JSON",
  });
  console.log(getUserWithParamsData);
});
</script>

<template>
  <Suspense>
    <ElConfigProvider>
      <RouterView />
    </ElConfigProvider>
    <template #fallback>
      <div v-loading.fullscreen.lock="true" class="loading"></div>
    </template>
  </Suspense>
</template>
