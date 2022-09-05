import { Locale } from "vant";

import enUS from "vant/es/locale/lang/en-US";
import zhCN from "vant/es/locale/lang/zh-CN";

const VantLocales = { EN_US: enUS, ZH_CN: zhCN };

export function setVanLocale(locale: keyof typeof VantLocales) {
  Locale.use(locale, VantLocales[locale]);
}
