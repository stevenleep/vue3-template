import { defineStore } from "pinia";

export const useAppStore = defineStore("appModuleStore", {
  state: () => ({
    collapse: false,
    device: {
      type: "desktop",
      pixelRatio: 1,
    },
  }),
  actions: {
    toggleCollapse() {
      this.collapse = !this.collapse;
      this.persistCollapse(this.collapse);
    },

    persistCollapse(newestState: boolean) {
      // TODO: persistence sidebar state
      localStorage.setItem("collapse", newestState ? "1" : "0");
    },
  },

  getters: {
    getCollapseState: (state) => state.collapse,
    getDeviceType: (state) => state.device.type,
    getDevicePixelRatio: (state) => state.device.pixelRatio,
  },
});
