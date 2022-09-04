import { defineStore } from "pinia";

export const useAppModuleStore = defineStore("appModuleStore", {
  state: () => ({
    sidebar: {
      opened: false,
      withoutAnimation: false,
    },
    device: {
      type: "desktop",
      pixelRatio: 1,
    },
  }),

  actions: {
    toggleSideBarState() {
      this.sidebar.opened = !this.sidebar.opened;
      this.persistenceSideBarState(this.sidebar.opened);
    },

    persistenceSideBarState(newestState: boolean) {
      // TODO: persistence sidebar state
      localStorage.setItem("sidebarStatus", newestState ? "1" : "0");
    },
  },

  getters: {
    getSidebarState: (state) => state.sidebar.opened,
    getSidebarAnimationState: (state) => state.sidebar.withoutAnimation,
    getDeviceType: (state) => state.device.type,
    getDevicePixelRatio: (state) => state.device.pixelRatio,
  },
});
