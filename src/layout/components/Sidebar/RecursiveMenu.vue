<template>
  <div class="menu-item-container">
    <ElSubMenu v-if="menuItem.children && menuItem.children.length > 0" :index="menuItem.path">
      <template #title>
        <ElIcon><Setting /> </ElIcon>
        <!-- 
          FIXME: 
          Hack: unknown reason, the menu item works abnormally under collapse.
         -->
        <span v-if="!appStore.getCollapseState">{{ menuItem.name }}</span>
      </template>

      <!-- 
        This is the recursive part. 
        We are calling the same component (RecursiveMenu) but with a different prop value.
       -->
      <Traversal :sources="menuItem.children" keys="path">
        <template #traversal="{ value: subMenuItem }">
          <RecursiveMenu :menu-item="subMenuItem" />
        </template>
      </Traversal>
    </ElSubMenu>

    <!-- 
      The <ElMenuItem> component is used instead of <ElSubMenu> when the menu item has no children.
     -->
    <div v-else class="menu-item">
      <RouterLink :to="menuItem.path">
        <ElMenuItem :index="menuItem.path">
          <ElIcon><Setting /> </ElIcon>
          <template #title>{{ menuItem.name }} </template>
        </ElMenuItem>
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  name: "RecursiveMenu",
});
</script>

<script setup lang="ts">
import { defineComponent } from "vue";
import { ElSubMenu, ElMenuItem, ElIcon } from "element-plus";
import { Setting } from "@element-plus/icons-vue";
import { useAppStore } from "@/store";

const appStore = useAppStore();
const props = defineProps({
  menuItem: {
    type: Object,
    required: true,
  },
});
console.log(props);
</script>
