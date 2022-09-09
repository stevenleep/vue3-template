import { defineStore, _GettersTree } from "pinia";

interface LocaleState {
  locale: string;
  supportedLocales: string[];
}

interface LocaleActions {
  setLocale(locale: string): void;
}

export const useLocaleStore = defineStore<
  string,
  LocaleState,
  _GettersTree<LocaleState>,
  LocaleActions
>("localeStore", {
  state() {
    return {
      locale: "en",
      supportedLocales: ["en", "es"],
    };
  },
  actions: {
    setLocale(locale: string): void {
      this.locale = locale;
    },
  },
});
